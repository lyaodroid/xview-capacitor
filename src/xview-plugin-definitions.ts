import {
    CallbackID,
    NotificationPermissionResponse,
    PluginListenerHandle,
    PushNotification,
    PushNotificationActionPerformed,
    PushNotificationDeliveredList,
    PushNotificationToken,
} from "@capacitor/core";
import { Plugin } from "@capacitor/core/dist/esm/definitions";

declare module "@capacitor/core" {
    interface PluginRegistry {
        XView: XViewPlugin;
        AliPay: AliPayPlugin;
        WeChat: WeChatPlugin;
        QQ: QQPlugin;
        PushNotify: PushNotifyPlugin;
        ALocation: ALocationPlugin;
        BLocation: BLocationPlugin;
        Http: HttpPlugin;
        Scanner: ScannerPlugin;
        Media: MediaPlugin;
        Mobile: MobilePlugin;
        Speech: SpeechPlugin;
        NativeAudio: NativeAudioPlugin;
        CapacitorVideoPlayer: CapacitorVideoPlayerPlugin;
        WebviewOverlay: WebviewOverlayPlugin;
        Wifi: WifiPlugin;
        Contacts: ContactsPlugin;
        Audio: AudioPlugin;
        HotCodePush: HotCodePushPlugin;
    }
}

export declare enum FilesystemDirectory {}

export interface XViewPlugin extends Plugin {
    /**
     * 调用原来xview方法 从插件里分发事件
     * @param options
     */
    callNativeXView(options: XViewDataOptions): Promise<XViewResult>;
    /**
     * Listen for network status change events
     */
    addListener(
        eventName: string,
        listenerFunc: (status: XViewResult) => void
    ): PluginListenerHandle;
    /**
     * Remove all native listeners for this plugin
     */
    removeAllListeners(): void;
}
export declare type XViewCallJsChangeCallback = (
    result: XViewResult
) => void;

export interface XViewResult {
    code: number;
    data: any;
    errorMessage: string;
}

export interface XViewDataOptions {
    componentName: string;
    action: string;
    data: any;
    isAsync?: true | false;
    permission: [];
}
/**
 * 继承插件看是否需要权限 和 监听
 *  AliPayPlugin 支付宝sdk 使用
 */

export interface AliPayPlugin extends Plugin {
    /**
     *
     * @param options = {aliLogin:"登录参数"}
     * @param result = {openid: '<value>',uid: '<value>','authCode': '<value>'}
     */
    login(options: any): Promise<any>;

    /**
     *
     * @param {aliPay:"接口返回的参数"}
     * @value = "9000" 为支付成功
     */
    pay(options: any): Promise<{ value: boolean; code?: string }>;
}

/**
 * 微信sdk 使用
 */
export interface WeChatPlugin extends Plugin {
    /**
     *
     * @param options 登录
     */
    login(options: any): Promise<any>;

    /**
     *
     * @param options 支付
     */
    pay(options: any): Promise<any>;

    /**
     *
     * @param options 分享
     */
    share(options: any): Promise<any>;

    /**
     *
     * @param options 拉起小程序
     */
    launchMiniProgram(options: any): Promise<any>;

    addListener(
        eventName: "app-parameter",
        listenerFunc: (args: any) => void
    ): PluginListenerHandle;

    addListener(
        eventName: "app-parameter-share",
        listenerFunc: (args: any) => void
    ): PluginListenerHandle;

    /**
     * Remove all native listeners for this plugin
     */
    removeAllListeners(): void;
}

/**
 * 微信sdk 使用
 */
export interface QQPlugin extends Plugin {
    /**
     *
     * @param options 登录
     */
    login(options: any): Promise<any>;

    /**
     *
     * @param options 分享
     */
    share(options: any): Promise<any>;
}

export interface LocaitonPlugin {
    /**
     * Get the current GPS location of the device
     */
    setLocationServiceSetting(options?: any): void;
    /**
     * Get the current GPS location of the device
     */
    getCurrentPosition(options?: any): Promise<any>;
    /**
     * Set up a watch for location changes. Note that watching for location changes
     * can consume a large amount of energy. Be smart about listening only when you need to.
     */
    watchPosition(
        callback: LocationWatchCallback,
        options?: any
    ): CallbackID;

    /**
     * Clear a given watch
     */
    clearWatch(options: { id: string }): Promise<void>;

    /**
     * 关闭所有连续定位
     */
    clearAllWatches(options?: any): Promise<void>;
}
/**
 * 高德 百度 定位 作为原生实现 前端一致
 */
export interface ALocationPlugin extends Plugin, LocaitonPlugin {}

export interface BLocationPlugin extends Plugin, LocaitonPlugin {}

export type LocationWatchCallback = (position: any, err?: any) => void;

/**
 * 网络请求插件
 *  method:
  | "get"
  | "post"
  | "put"
  | "patch"
  | "head"
  | "delete"
  | "options"
  | "upload"
  | "download";
 */
export interface HttpPlugin extends Plugin {
    request(options: HttpOptions): Promise<HttpResponse>;
    setCookie(options: HttpSetCookieOptions): Promise<void>;
    getCookies(
        options: HttpGetCookiesOptions
    ): Promise<HttpGetCookiesResult>;
    deleteCookie(options: HttpDeleteCookieOptions): Promise<void>;
    clearCookies(options: HttpClearCookiesOptions): Promise<void>;
    //okgo Http  注意 data 中与 params 中都有相同参数 前端才可以请求，主要为了兼容 老项目
    get(options: HttpOptions): Promise<HttpResponse>;
    post(options: HttpOptions): Promise<HttpResponse>;
    //data 中放 file 参数 [filePath,]
    uploadFile(
        options: HttpUploadFileOptions,
        callback: HttpProgressCallback
    ): CallbackID;

    downloadFile(
        options: HttpDownloadFileOptions,
        callback: HttpProgressCallback
    ): Promise<HttpDownloadFileResult>;
}

export type HttpProgressCallback = (
    progress: HttpUploadFileResult,
    err?: any
) => void;

export interface HttpOptions {
    url: string;
    method?: string;
    params?: HttpParams;
    data?: any;
    headers?: HttpHeaders;
    /**
     * How long to wait to read additional data. Resets each time new
     * data is received
     */
    readTimeout?: number;
    /**
     * How long to wait for the initial connection.
     */
    connectTimeout?: number;
    /**
     * Extra arguments for fetch when running on the web
     */
    webFetchExtra?: RequestInit;
}

export interface HttpParams {
    [key: string]: string;
}

export interface HttpHeaders {
    [key: string]: string;
}

export interface HttpResponse {
    data: any;
    status: number;
    headers: HttpHeaders;
}

export interface HttpDownloadFileOptions extends HttpOptions {
    /**
     * The path the downloaded file should be moved to
     */
    filePath?: string;
    /**
     * Optionally, the directory to put the file in
     *
     * If this option is used, filePath can be a relative path rather than absolute
     */
    fileDirectory?: FilesystemDirectory;
}

export interface HttpUploadFileOptions extends HttpOptions {
    /**
     * The field name to upload the file with
     */
    name?: string;
    /**
     * For uploading a file on the web, a JavaScript Blob to upload
     */
    blob?: Blob;
    /**
     * For uploading a file natively, the path to the file on disk to upload
     */
    filePath?: string;
    /**
     * Optionally, the directory to look for the file in.
     *
     * If this option is used, filePath can be a relative path rather than absolute
     */
    fileDirectory?: FilesystemDirectory;
}

export interface HttpCookie {
    key: string;
    value: string;
}

export interface HttpSetCookieOptions {
    url: string;
    key: string;
    value: string;
    ageDays?: number;
}

export interface HttpGetCookiesOptions {
    url: string;
}

export interface HttpDeleteCookieOptions {
    url: string;
    key: string;
}

export interface HttpClearCookiesOptions {
    url: string;
}

export interface HttpGetCookiesResult {
    value: HttpCookie[];
}

export interface HttpDownloadFileResult {
    path?: string;
    blob?: Blob;
    //0 ~ 100 百分比
    fraction?: number;
    speed?: number;
    totalSize?: number;
    currentSize?: number;
    status?: HttpStatus;
}

export interface HttpUploadFileResult {
    //0 ~ 100 百分比
    fraction?: number;
    speed?: number;
    totalSize?: number;
    currentSize?: number;
    status?: HttpStatus;
    response?: HttpResponse;
}

export enum HttpStatus {
    START = "start",
    DOWNLOADING = "downloading",
    UPLOADING = "uploading",
    COMPLETED = "completed",
    ERROR = "error",
}

/**
 * 原生音频插件
 */
export interface NativeAudioPlugin extends Plugin {
    configure(options: ConfigureOptions): Promise<void>;
    preloadSimple(options: PreloadSimpleOptions): Promise<void>;
    preloadComplex(options: PreloadComplexOptions): Promise<void>;
    play(options: { assetId: string }): Promise<void>;
    loop(options: { assetId: string }): Promise<void>;
    stop(options: { assetId: string }): Promise<void>;
    unload(options: { assetId: string }): Promise<void>;
    setVolume(options: { assetId: string; volume: number }): Promise<void>;
}

export interface ConfigureOptions {
    fade?: boolean;
}

export interface PreloadSimpleOptions {
    assetPath: string;
    assetId: string;
}

export interface PreloadComplexOptions {
    assetPath: string;
    assetId: string;
    volume?: number;
    audioChannelNum?: number;
}

/**
 * Google 播放器插件
 */
export interface CapacitorVideoPlayerPlugin extends Plugin {
    echo(options: { value: string }): Promise<capVideoPlayerResult>;

    /**
     * Initialize a video
     * @param {capVideoPlayerOptions} options {mode:string,url:string,playerId:string,componentTag:string }
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:boolean}
     */
    initPlayer(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Return if a given playerId is playing
     *
     * @param options {playerId:string}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:boolean}
     */
    isPlaying(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Play the current video from a given playerId
     *
     * @param options {playerId:string}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    play(options: capVideoPlayerOptions): Promise<capVideoPlayerResult>;
    /**
     * Pause the current video from a given playerId
     *
     * @param options {playerId:string}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    pause(options: capVideoPlayerOptions): Promise<capVideoPlayerResult>;
    /**
     * Get the duration of the current video from a given playerId
     *
     * @param options {playerId:string}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    getDuration(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Get the current time of the current video from a given playerId
     *
     * @param options {playerId:string}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    getCurrentTime(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Set the current time to seek the current video to from a given playerId
     *
     * @param options {playerId:string, seektime:number}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    setCurrentTime(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Get the volume of the current video from a given playerId
     *
     * @param options {playerId:string}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    getVolume(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Set the volume of the current video to from a given playerId
     *
     * @param options {playerId:string}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    setVolume(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Get the muted of the current video from a given playerId
     *
     * @param options {playerId:string,volume:number}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    getMuted(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Set the muted of the current video to from a given playerId
     *
     * @param options {playerId:string,muted:boolean}
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    setMuted(
        options: capVideoPlayerOptions
    ): Promise<capVideoPlayerResult>;
    /**
     * Stop all players playing
     *
     * @returns {Promise<VideoPlayerResult>} {result: boolean, method: string, value:string}
     */
    stopAllPlayers(): Promise<capVideoPlayerResult>;
}
export interface capVideoPlayerOptions {
    /**
     * The url of the video to play
     */
    mode: string;
    url: string;
    playerId: string;
    componentTag: string;
    width?: number;
    height?: number;
    volume?: number;
    seektime?: number;
    muted?: boolean;
    videoList?: Array<any>;
    pageTitle?: string;
}
export interface capVideoPlayerResult {
    /**
     * result set to true when successful else false
     */
    result?: boolean;
    method?: string;
    value?: any;
}

/**
 * 打开内部浏览器
 */
export interface WebviewOverlayPlugin extends Plugin {
    /**
     * Open a webview with the given URL
     */
    open(options: OpenOptions): Promise<void>;

    /**
     * Close an open webview.
     */
    close(): Promise<void>;

    /**
     * Load a url in the webview.
     */
    loadUrl(options: { url: string }): Promise<void>;

    /**
     * Get snapshot image
     */
    getSnapshot(): Promise<{ src: string }>;

    show(): Promise<void>;
    hide(): Promise<void>;

    toggleFullscreen(): Promise<void>;
    goBack(): Promise<void>;
    goForward(): Promise<void>;
    reload(): Promise<void>;

    handleNavigationEvent(options: { allow: boolean }): Promise<void>;

    updateDimensions(options: Dimensions): Promise<void>;

    evaluateJavaScript(options: {
        javascript: string;
    }): Promise<{ result: string }>;

    addListener(
        eventName:
            | "pageLoaded"
            | "updateSnapshot"
            | "progress"
            | "navigationHandler",
        listenerFunc: (...args: any[]) => void
    ): PluginListenerHandle;
}

export interface OpenOptions extends Dimensions {
    /**
     * The URL to open the webview to
     */
    url: string;

    javascript?: string;
    injectionTime?: ScriptInjectionTime;
}

export interface Dimensions {
    width: number;
    height: number;
    x: number;
    y: number;
}

export enum ScriptInjectionTime {
    atDocumentStart,
    atDocumentEnd,
}

/**
 * wifi 支持AndroidQ
 */

export interface WifiPlugin extends Plugin {
    wifiEnabled(): Promise<{ isWifiEnabled: boolean }>;
    wifiOnOff(options: {
        isWifiEnabled: boolean;
    }): Promise<{ isWifiEnabled: boolean }>;
    scan(options?: { timeout: number }): Promise<any>;
    connect(options: {
        ssid: string;
        password?: string;
        authType?: string;
    }): Promise<{ ssid: string }>;
    connectPrefix(options: {
        ssid: string;
        password?: string;
    }): Promise<{ ssid: string }>;
    getWifiIP(): Promise<{ ip: string }>;
    getConnectedSSID(): Promise<{ ssid: string }>;
}

/**
 * 推送通知 统一前端调用方法
 */

export interface PushNotifyPlugin extends Plugin {
    /**
     * Register the app to receive push notifications.
     * Will trigger registration event with the push token
     * or registrationError if there was some problem.
     * Doesn't prompt the user for notification permissions, use requestPermission() first.
     */
    register(options?: any): Promise<void>;
    /**
     * On iOS it prompts the user to allow displaying notifications
     * and return if the permission was granted or not.
     * On Android there is no such prompt, so just return as granted.
     */
    requestPermission(): Promise<NotificationPermissionResponse>;
    /**
     * Returns the notifications that are visible on the notifications screen.
     */
    getDeliveredNotifications(): Promise<PushNotificationDeliveredList>;
    /**
     * Removes the specified notifications from the notifications screen.
     * @param delivered list of delivered notifications.
     */
    removeDeliveredNotifications(
        delivered: PushNotificationDeliveredList
    ): Promise<void>;
    /**
     * Removes all the notifications from the notifications screen.
     */
    removeAllDeliveredNotifications(options?: any): Promise<void>;

    /**
     * Event called when the push notification registration finished without problems.
     * Provides the push notification token.
     * @param eventName registration.
     * @param listenerFunc callback with the push token.
     */
    addListener(
        eventName: "registration",
        listenerFunc: (token: PushNotificationToken) => void
    ): PluginListenerHandle;
    /**
     * Event called when the push notification registration finished with problems.
     * Provides an error with the registration problem.
     * @param eventName registrationError.
     * @param listenerFunc callback with the registration error.
     */
    addListener(
        eventName: "registrationError",
        listenerFunc: (error: any) => void
    ): PluginListenerHandle;
    /**
     * Event called when the device receives a push notification.
     * @param eventName pushNotificationReceived.
     * @param listenerFunc callback with the received notification.
     */
    addListener(
        eventName: "pushNotificationReceived",
        listenerFunc: (notification: PushNotification) => void
    ): PluginListenerHandle;
    /**
     * Event called when an action is performed on a pusn notification.
     * @param eventName pushNotificationActionPerformed.
     * @param listenerFunc callback with the notification action.
     */
    addListener(
        eventName: "pushNotificationActionPerformed",
        listenerFunc: (
            notification: PushNotificationActionPerformed
        ) => void
    ): PluginListenerHandle;
    /**
     * Remove all native listeners for this plugin.
     */
    removeAllListeners(): void;

    /**
     * 应用退出时调用
     */

    unRegister(options?: any): Promise<void>;

    /**
     * 绑定 别名 umeng 会用到 aliasType 注意老项目迁移
     * @param options
     */
    bindAlias(options: {
        alias: string;
        aliasType?: string;
    }): Promise<void>;

    /**
     * 退出账号时使用
     * 解绑 别名 umeng 会用到 aliasType 注意老项目迁移
     * @param options
     */
    unBindAlias(options: {
        alias: string;
        aliasType?: string;
    }): Promise<void>;

    /**获取标签 tags = "tag1,tag2....tags"
     * 添加标签 用 “,”  分割
     * @param options
     */
    addTags(options: { tags: string }): Promise<void>;

    /**
     * 获取标签 tags = "tag1,tag2....tags"
     * @param options
     */
    getTags(): Promise<{ value: string }>;

    /**
     * 删除 标签 tags = "tag1,tag2....tags"
     * @param options
     */
    deleteTags(options: { tags: string }): Promise<void>;

    /**
     * 获取推送token 同时 监听注册 token 也被改变
     * @param options
     */
    getPushToken(): Promise<PushNotificationToken>;

    /**
     * 进入 Tabs 页面 进行通知 检查 如果没有 提示 收不到通知
     * 检查 次数每次 启动 为 2次  如果成功 就不要执行此逻辑
     * @param options
     */
    areNotificationsEnabled(): Promise<{ value: boolean }>;
}

/**
 * 扫一扫 支持
 * 增加一些其它功能
 */

export interface ScannerPlugin extends Plugin {
    scan(options?: ScannerOption): Promise<ScannerResult>;

    /**
     * 直接解析 图片 url or  base64
     * @param options
     */
    analyzeImage(options: ScannerOption): Promise<ScannerResult>;

    /**
     * 创建一个二维码参数必须指定 为了出错容易排查
     * 返回 base64展示 本地图片地址
     * @param options
     * 显示需要前端加 imagePrefix = "data:image/png;base64,"
     */
    generateImageCode(
        options: ImageCodeOption
    ): Promise<{ value: string }>;

    /**
     * 监听原生 事件 比如持续扫码 对焦等
     * @param eventName
     * @param listenerFunc
     */
    addListener(
        eventName: "scannerEvent",
        listenerFunc: (args: { method: string; data?: any }) => void
    ): PluginListenerHandle;
}

export interface ScannerOption {
    /**
     * Prompt text.
     */
    title?: string;
    /**
     * Prompt text.
     */
    prompt?: string;

    /**
     * 如果开启相册 选择解析 要有MediaPlugin 使用其中选择图片解析
     */
    needPhoto?: boolean;

    /**
     * 直接解析图片
     * 使用本地获取的路径或者网络图片路径
     */
    imageUrl?: string;

    /**
     * Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`.
     */
    formats?: BarcodeFormat[];

    /**
     * 默认关闭铃声提示
     */
    beepEnabled?: boolean;

    /**
     * 默认关闭震动提醒
     */
    vibrateEnabled?: boolean;
}

export interface ImageCodeOption {
    /**
     * 生成二维码 内容
     */
    text: string;

    /**
     * 二维码或者 条形码
     */
    type?: ScanCodeType;

    /**
     * 编码格式指定使用
     */
    format?: BarcodeFormat;

    /**
     * 有默认宽高 正方形
     */
    width?: number;

    height?: number;
    /**
     * 支持 头像
     */
    logoBase64?: string;
}

export enum ScanCodeType {
    BARCODE = "barcode",

    QRCODE = "qrcode",
}
export enum BarcodeFormat {
    /** Aztec 2D barcode format. */
    AZTEC = "AZTEC",

    /** CODABAR 1D format. */
    CODABAR = "CODABAR",

    /** Code 39 1D format. */
    CODE_39 = "CODE_39",

    /** Code 93 1D format. */
    CODE_93 = "CODE_93",

    /** Code 128 1D format. */
    CODE_128 = "CODE_128",

    /** Data Matrix 2D barcode format. */
    DATA_MATRIX = "DATA_MATRIX",

    /** EAN-8 1D format. */
    EAN_8 = "EAN_8",

    /** EAN-13 1D format. */
    EAN_13 = "EAN_13",

    /** ITF (Interleaved Two of Five) 1D format. */
    ITF = "ITF",

    /** MaxiCode 2D barcode format. */
    MAXICODE = "MAXICODE",

    /** PDF417 format. */
    PDF_417 = "PDF_417",

    /** QR Code 2D barcode format. */
    QR_CODE = "QR_CODE",

    /** RSS 14 */
    RSS_14 = "RSS_14",

    /** RSS EXPANDED */
    RSS_EXPANDED = "RSS_EXPANDED",

    /** UPC-A 1D format. */
    UPC_A = "UPC_A",

    /** UPC-E 1D format. */
    UPC_E = "UPC_E",

    /** UPC/EAN extension format. Not a stand-alone format. */
    UPC_EAN_EXTENSION = "UPC_EAN_EXTENSION",
}

export interface ScannerResult {
    format?:
        | "QR_CODE"
        | "DATA_MATRIX"
        | "UPC_E"
        | "UPC_A"
        | "EAN_8"
        | "EAN_13"
        | "CODE_128"
        | "CODE_39"
        | "CODE_93"
        | "CODABAR"
        | "ITF"
        | "RSS14"
        | "RSS_EXPANDED"
        | "PDF_417"
        | "AZTEC"
        | "MSI";
    methodName?: string;
    text?: string;
    imageBase64?: string;
}

export interface UpdatePlugin extends Plugin {
    /**
     * 添加打开商店更新
     */
    openAppStore(options?: any): Promise<void>;

    /**
     * 获取原生 App版本信息
     */
    getAppInfo(): Promise<UpdateAppInfo>;

    apkDownloadUpdate(
        options: UpdateOption,
        progress: UpdateProgressCallback
    ): CallbackID;

    backgroundDownload(): Promise<void>;

    hotUpdate(options: UpdateOption): Promise<void>;

    restartApp(options?: any): void;

    addListener(
        eventName: "hotUpdateStateChange",
        listenerFunc: (args: UpdateProgress) => void
    ): PluginListenerHandle;
}

export interface UpdateOption {
    /**
     * The bundle id of the app
     */
    fileUrl: string;

    /**
     * 大小主要是进度更新需要
     * 默认后端配置文件大小
     */
    apkSize?: string;
    /**
     * apk www update 使用
     */
    fileMd5: string;

    /**
     * apk www.zip（01，02）
     */
    fileName?: string;

    fileVersion: number;
}

export interface UpdateProgress {
    fraction?: number;
    totalSize?: number;
    status: HttpStatus;
}

export type UpdateProgressCallback = (
    position: UpdateProgress,
    err?: any
) => void;

export interface UpdateAppInfo {
    /**
     * The bundle id of the app
     */
    appId: string;

    /**
     * The device platform (lowercase).
     */
    platform: "ios" | "android";
    /**
     * The current bundle verison of the app
     */
    versionName: string;
    /**
     * The current bundle build of the app
     */
    versionCode: number;
}

/**
 * 兼容 老项目
 * 选择图片 选择视频  拍照 拍摄视频
 */
export interface MediaPlugin {
    /**
     * Prompt the user to pick a photo from an album, or take a new photo
     * with the camera.
     */
    selectImage(
        options?: MediaImageOptions
    ): Promise<{ images: MediaResult[] }>;
    openCamera(options?: MediaImageOptions): Promise<MediaResult>;
    previewImage(options: any): Promise<void>;

    saveImage(options?: any): Promise<any>;

    selectVideo(
        options?: MediaVideoOptions
    ): Promise<{ videos: MediaResult[] }>;
    recordVideo(options?: MediaVideoOptions): Promise<MediaResult>;
    previewVideo(options: any): Promise<void>;
}

export interface MediaImageOptions {
    style?: "WHITE" | "WECHAT";

    resultType: MediaResultType;

    /**
     * The quality of image to return as JPEG, from 0-100
     */
    quality?: number;

    /**
     * 语言显示 0 中文 1 英文
     */
    language?: number;
    /**
     * 最大选择数量
     */
    maxSelectNum?: number;
    /**
     * 是否显示原图
     */
    originalImage?: boolean;

    /**
     * 是否压缩
     */
    compress?: boolean;

    /**
     * 最小压缩尺寸
     */
    minimumCompressSize?: number;

    /**
     * 是否开启裁剪
     */
    enableCrop?: boolean;
    /**
     * 选择头像时 或者其它使用裁剪
     */
    enableCropOptions?: EnableCropOptions;
    /**
     * Whether to save the photo to the gallery.
     * If the photo was picked from the gallery, it will only be saved if edited.
     * Default: false
     */
    saveToGallery?: boolean;
    /**
     * The width of the saved image
     */
    width?: number;
    /**
     * The height of the saved image
     */
    height?: number;
    /**
     * Whether to automatically rotate the image "up" to correct for orientation
     * in portrait mode
     * Default: true
     */
    correctOrientation?: boolean;

    /**
     * iOS and Web only: The camera direction.
     * Default: CameraDirection.Rear
     */
    direction?: MediaDirection;

    /**
     * iOS only: The presentation style of the Camera. Defaults to fullscreen.
     */
    presentationStyle?: "fullscreen" | "popover";

    /**
     * Web only: Whether to use the PWA Element experience or file input. The
     * default is to use PWA Elements if installed and fall back to file input.
     * To always use file input, set this to `true`.
     *
     * Learn more about PWA Elements: https://capacitorjs.com/docs/pwa-elements
     */
    webUseInput?: boolean;
}

export enum MediaDirection {
    Rear = "REAR",
    Front = "FRONT",
}

export enum MediaResultType {
    Uri = "uri",
    Base64 = "base64",
    DataUrl = "dataUrl",
}

/**
 * 裁剪属性
 * 是否圆形裁剪
 * 宽高尺寸
 * 宽高比例
 */
export interface EnableCropOptions {
    circleCrop?: boolean;
    cropWidth: number;
    cropHeight: number;
    aspect_ratio_x: number;
    aspect_ratio_y: number;
}

export interface MediaResult {
    /**
     * The base64 encoded string representation of the image, if using CameraResultType.Base64.
     */
    base64String?: string;
    /**
     * The url starting with 'data:image/jpeg;base64,' and the base64 encoded string representation of the image, if using CameraResultType.DataUrl.
     */
    dataUrl?: string;
    /**
     * 如果类型 为 uri 则不需要base64展示  否则 若只使用 base64String
     * dataUrl 展示 与 path 原生上传 结合使用
     */
    path: string;

    /**
     * 视频缩略图 地址 base64 使用dataUrl png 展示
     */
    thumbnailPath?: number;
    /**
     * 只有开启原图 才会有值
     */
    originalImagePath?: string;
    /**
     * webPath returns a path that can be used to set the src attribute of an image for efficient
     * loading and rendering.
     */
    webPath?: string;
    /**
     * Exif data, if any, retrieved from the image or video
     */
    exif?: any;
    /**
     * The format of the image, ex: jpeg, png, gif.
     *
     * iOS and Android only support jpeg.
     * Web supports jpeg and png. gif is only supported if using file input.
     */
    format: string;
}

export interface MediaVideoOptions {
    style?: "WHITE" | "WECHAT";

    /**
     * 最大选择数量
     */
    maxSelectNum?: number;

    /**
     * 选择使用
     */
    //default 30
    videoMaxSecond?: number;
    //default 5
    videoMinSecond?: number;
    /**
     * 视频 返回缩略图的 大小
     * 默认使用 DataUrl
     */
    thumbnailWidth?: number;
    /**
     * Height of thumbnail preview
     */
    thumbnailHeight?: number;

    /**
     * 录制使用
     */
    //default 30
    recordVideoMaxSecond?: number;
    //default 5
    recordVideoMinSecond?: number;
    // 0 or 1 default 1
    videoQuality?: number;
}

/**
 * 权限被拒绝 要去设置
 * 暗黑模式变化
 */
export interface MobilePlugin extends Plugin {
    /**
     * 只是隐藏到后台
     */
    hideApp(): never;

    /**
     * Force exit the app. This should only be used in conjunction with the `backButton` handler for Android to
     * exit the app when navigation is complete.
     *
     * Ionic handles this itself so you shouldn't need to call this if using Ionic
     */
    exitApp(): never;

    /**
     * 检查通知是否 打开 推送使用
     * @param options
     */
    areNotificationsEnabled(options?: any): Promise<{ value: boolean }>;
    /**
     * 跳转打开通知 返回false 因为Android 跳转适配 失败， 提示需要手动去打开 提供打开方案链接
     * @param options
     */
    openNotification(options?: any): Promise<{ value?: boolean }>;
    /**
     * 检查位置是否打开
     * @param options
     */
    isLocationServiceEnabled(options?: any): Promise<{ value: boolean }>;
    /**
     * 打开定位总开关
     * @param options
     */
    openLocationService(options?: any): Promise<{ value?: boolean }>;

    /**
     * 如果权限被拒绝不再询问 提示 必须跳转系统设置去开启，检查同 通知一样
     * @param options
     */
    toPermissionSetting(options?: any): Promise<void>;

    /**
     * 如果传入权限为 空，默认返回 true
     * 为了兼容 Android 和 iOS 逻辑不相同时
     * 执行相同的逻辑
     * 检查权限 通过代码动态检查
     * @param options
     */
    checkPermission(options: { permissions: any[] }): Promise<void>;

    /**
     * 获取手机上所有APP 是否过滤掉系统APP
     * @param options
     */
    getAppsInfo(options?: any): Promise<{ values: any[] }>;

    /**
     * 判断 应用是否安装
     * Android {appID}
     * ios
     * @param options
     */
    isAppInstalled(options?: any): Promise<{ value: boolean }>;

    /**
     *  清除缓存
     * @param options
     */
    cleanCache(options?: any): Promise<void>;

    /**
     *  获取缓存
     * @param options
     */
    getCacheSize(options?: any): Promise<{ value: string }>;
    /**
     * 使用 逻辑 先检查 相机权限
     * 先获取 闪光灯状态
     * 然后设置 status 默认 get 获取状态
     * set 时 isOn 才可以使用
     * @param options
     */
    flashlightStatus(options: {
        status?: "GET" | "SET";
        isOn?: boolean;
    }): Promise<{ value: boolean }>;
    /**
     *  截屏
     * 默认不删除状态栏
     * false
     * format 默认png
     * @param options
     */
    screenShot(options?: {
        isDeleteStatusBar: boolean;
    }): Promise<{ value: string }>;

    /**
     * Show a Share modal for sharing content in your app with other apps
     */
    share(options: ShareOptions): Promise<any>;

    /**
     * 此方法 options 里区分 Android IOS 使用枚举 枚举值是不同的功能
     * @param options
     */
    startIntent<T>(options: Intent): Promise<T>;

    /**
     * 暗黑模式是否开启
     * @param eventName
     * @param listenerFunc
     */
    addListener(
        eventName: "darkModeStateChanged",
        listenerFunc: (args: { value: boolean }) => void
    ): PluginListenerHandle;
}

export interface ShareOptions {
    /**
     * Set a title for any message. This will be the subject
     * if sharing to email
     */
    title?: string;
    /**
     * Set some text to share
     */
    text?: string;
    /**
     * Set a URL to share, can be http, https or file URL
     */
    url?: string;
    /**
     * Set a title for the share modal. Android only
     */
    dialogTitle?: string;
}
/**
 * callbackCode 必须原生已经定义
 * 如果a action 使用默认值
 * data or packageName or componentName 必须有值
 * 其它子类 实现 此接口可以实现 不同功能
 *
 *  eventName 就是监听回调  如果 这个有值 就一定要 从这里获取结果
 *  先注册监听 再 startIntent 方法
 */

export interface Intent {
    /**
     * 处理回调使用
     */
    methodName?: string;
}

/**
 * 默认 action: "android.intent.action.VIEW",
 *     category:"android.intent.category.DEFAULT"

 */
export enum IntentFlags {
    FLAG_ACTIVITY_NEW_TASK = 0x10000000,
    FLAG_ACTIVITY_CLEAR_TASK = 0x00008000,
}
export interface AndroidIntent extends Intent {
    flags?: number;
    action?: string;
    category?: string;
    data?: string;
    type?: string;
    packageName?: string;
    extras?: {};
    componentName?: { packageName: string; clazzName: string };
}

export interface IosIntent extends Intent {
    flags?: number;
    action?: string;
    category?: string;
    data?: string;
    type?: string;
    packageName?: string;
    extras?: {};
    componentName?: { packageName: string; clazzName: string };
}

export class IntentFactory {
    private mPlatform: string;

    constructor(platform: string) {
        this.mPlatform = platform;
    }

    public callPhone = (phoneNumber: string): Intent => {
        if (this.mPlatform === "android") {
            let aIntent: AndroidIntent = {
                data: "tel:" + phoneNumber,
            };
            return aIntent;
        } else if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };

    public sendSMS = (phoneNumber: string, smsMessage: string): Intent => {
        if (this.mPlatform === "android") {
            let aIntent: AndroidIntent = {
                data: "smsto:" + phoneNumber,
                extras: { sms_body: smsMessage },
            };
            return aIntent;
        } else if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };

    public sendEmail = (email: string): Intent => {
        if (this.mPlatform === "android") {
            let aIntent: AndroidIntent = {
                data: "mailto:" + email,
            };
            return aIntent;
        } else if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };

    public talkQQ = (qq: string): Intent => {
        if (this.mPlatform === "android") {
            let aIntent: AndroidIntent = {
                data: "mqqwpa://im/chat?chat_type=wpa&uin=" + qq,
            };
            return aIntent;
        } else if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };

    public openAmap = (url: string): Intent => {
        if (this.mPlatform === "android") {
            let aIntent: AndroidIntent = {
                data: url,
                packageName: "com.autonavi.minimap",
            };
            return aIntent;
        } else if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };

    public openBmap = (url: string): Intent => {
        if (this.mPlatform === "android") {
            let aIntent: AndroidIntent = {
                data: url,
                packageName: "com.baidu.BaiduMap",
            };
            return aIntent;
        } else if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };

    public openAppleMap = (url: string): Intent => {
        if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };

    public openAppSetting = (setting?: string): Intent => {
        if (this.mPlatform === "android") {
            let aIntent: AndroidIntent = {
                action: setting || "android.settings.SETTINGS",
            };
            return aIntent;
        } else if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };
}
/**
 * 录音 和 播放 录音 注意 兼容小程序的 文件格式
 */

export interface AudioPlugin extends Plugin {
    /**
     * @param options
     * @param callback
     */
    startRecord(
        options: {
            interval?: number;
            format?: string;
        },
        callback: AudioProgressCallback
    ): CallbackID;

    /**
     * 暂停时 如果是取消 就 删除录制文件
     * @param options
     */
    stopRecord(options: { id: string }): Promise<void>;

    startPlay(
        options: { filePath: string },
        callback?: AudioProgressCallback
    ): CallbackID;

    stopPlay(options: { id: string }): Promise<void>;

    /**
     * 重置所有
     * 离开页面时候
     * @param options
     */
    onReset(options?: any): never;
}

export type AudioProgressCallback = (
    progress: AudioProgressResult,
    err?: any
) => void;

export interface AudioProgressResult {
    /**
     * 播放当前进度
     */
    currentPosition?: number;
    /**
     * 录音时 振幅
     * 1 -> maxLevel
     */
    amplitude?: number;
    /**
     * 状态暂时开启 两个
     * recording playing  pause | resume 后面开启
     */
    status: AudioStatus;

    data?: AudioFileResult;
}

export enum AudioStatus {
    START = "start",
    STOP = "stop",
}

export interface AudioFileResult {
    filePath: string;
    duration: number;
}

export interface SpeechPlugin extends Plugin {
    /**
     * @param options
     */
    clickMicRecognize(options: { appId: string }): Promise<void>;

    /**
     * @param options
     */
    stopRecognize(): Promise<void>;
    /**
     * @param options
     * @param callback
     */
    startRecognize(
        options: {
            appId: string;
        },
        callback: SpeechProgressCallback
    ): CallbackID;
}

export type SpeechProgressCallback = (
    progress: SpeechProgressResult
) => void;

export interface SpeechProgressResult {
    /**
     * 播放当前进度`
     */
    currentPosition?: number;
    /**
     * 录音时 振幅
     * 1 -> maxLevel
     */
    amplitude?: number;
    /**
     * 状态暂时开启 两个
     * recording playing  pause | resume 后面开启
     */
    status: SpeechStatus;

    data?: any;
}

export enum SpeechStatus {
    START = "start",
    END = "end",
    RESET = "reset",
    RESULT = "result",
    VOLUME = "volume",
    ERROR = "error",
}

export interface ContactsPlugin extends Plugin {
    getContacts(): Promise<{ contacts: Contact[] }>;

    chooseContacts(): Promise<Contact>;
}

export interface Contact {
    contactId: string;
    displayName?: string;
    phoneNumbers: string[];
    emails: string[];
    organizationName?: string;
    organizationRole?: string;
    birthday?: string;
}

/**
 * 完全翻译 cordova 热更新
 */

export interface HotCodePushVersion {
    /**
     * Application's version name. This version is visible to the user on the stores.
     */
    appVersion: string;
    /**
     * Application's build version number.
     */
    buildVersion: string;
    /**
     * Version of the web content, that is displayed to the user. Basically, value of the release property from chcp.json file in your local www folder.
     */
    currentWebVersion: string;
    /**
     * Previous web content version. This is a version of our backup. Can be empty, if there were no updates installed.
     */
    previousWebVersion: string;
    /**
     * Version number of the web content, that was loaded by the plugin and ready to be installed. Basically, value of the release property from chcp.json file on your server. Can be empty, if no update is waiting for installation.
     */
    readyToInstallWebVersion: string;
}
export interface HotCodePushUpdate {
    /**
     * Current version installed.
     */
    currentVersion: string;
    /**
     * Available version to replace the current one.
     */
    readyToInstallVersion: string;
}
export interface HotCodePushRequestOptions {
    /**
     * Url of the chcp.json config on the server. Plugin will use this one instead of <config-file url=""> from the config.xml.
     */
    "config-file"?: string;
    /**
     * Additional HTTP headers, that will be added to all requests in update download process, including loading configs and new/changed files.
     */
    "request-headers"?: {
        [key: string]: any;
    };
}
/**
 * For description on error codes, please visit https://github.com/nordnet/cordova-hot-code-push/wiki/Error-codes
 */
export declare enum ErrorCode {
    NOTHING_TO_INSTALL = 1,
    NOTHING_TO_UPDATE = 2,
    FAILED_TO_DOWNLOAD_APPLICATION_CONFIG = -1,
    APPLICATION_BUILD_VERSION_TOO_LOW = -2,
    FAILED_TO_DOWNLOAD_CONTENT_MANIFEST = -3,
    FAILED_TO_DOWNLOAD_UPDATE_FILES = -4,
    FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER = -5,
    UPDATE_IS_INVALID = -6,
    FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE = -7,
    FAILED_TO_COPY_NEW_CONTENT_FILES = -8,
    LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND = -9,
    LOCAL_VERSION_OF_MANIFEST_NOT_FOUND = -10,
    LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND = -11,
    LOADED_VERSION_OF_MANIFEST_NOT_FOUND = -12,
    FAILED_TO_INSTALL_ASSETS_ON_EXTERNAL_STORAGE = -13,
    CANT_INSTALL_WHILE_DOWNLOAD_IN_PROGRESS = -14,
    CANT_DOWNLOAD_UPDATE_WHILE_INSTALLATION_IN_PROGRESS = -15,
    INSTALLATION_ALREADY_IN_PROGRESS = -16,
    DOWNLOAD_ALREADY_IN_PROGRESS = -17,
    ASSETS_FOLDER_IS_NOT_YET_INSTALLED = -18,
    NEW_APPLICATION_CONFIG_IS_INVALID = -19,
}
export interface HotCodePushError {
    code: ErrorCode;
    description: string;
}
export interface HotCodePushEventData {
    details?: {
        error?: HotCodePushError;
    };
}
/**
 * @name Hot Code Push
 * @description
 * HotCodePush plugin for Cordova that supports iOS and Android. This plugin allows you to keep your html, css and js files synced with your server.
 *
 * For more info, please see the detailed wiki https://github.com/nordnet/cordova-hot-code-push/wiki
 *
 * @usage
 * ```typescript
 * import { HotCodePush } from '@ionic-native/hot-code-push/ngx';
 *
 * constructor(private hotCodePush: HotCodePush) { }
 *
 * ...
 *
 * hotCodePush.fetchUpdate(options).then(data => { console.log('Update available'); });
 *
 * ```
 */
export interface HotCodePushPlugin extends Plugin {
    initPlugin(options?: any): Promise<void>;
    /**
     * Show dialog with the request to update application through the Store (App Store or Google Play).
     * @param message {string} Message to show in the dialog
     * @returns {Promise<any>} Resolves when the user is redirected to the store, rejects if the user declines.
     */
    requestApplicationUpdate(options?: { message: string }): Promise<any>;
    /**
     * Download updates from the server-side.
     * @param options {HotCodePushRequestOptions} Additional options to the request. If not set - preferences from config.xml are used.
     * @returns {Promise<any>} Resolves if there is an update available, rejects otherwise.
     */
    fetchUpdate(options?: HotCodePushRequestOptions): Promise<any>;
    /**
     * Install update if there is anything to install.
     * @returns {Promise<any>} Resolves when the update is installed.
     */
    installUpdate(): Promise<any>;
    /**
     * Check if update was loaded and ready to be installed.
     * @returns {Promise<HotCodePushUpdate>} Resolves if an update is ready, rejects if there is no update.
     */
    isUpdateAvailableForInstallation(): Promise<HotCodePushUpdate>;
    /**
     * Gets information about the app's versions.
     * @returns {Promise<HotCodePushVersion>} Resolves with the information about the versions.
     */
    getVersionInfo(): Promise<HotCodePushVersion>;
    /**
     * Event sent when new release was successfully loaded and ready to be installed.
     * @returns {Observable<HotCodePushEventData>}
     */

    addListener(
        eventName: "chcp_updateIsReadyToInstall",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;

    // onUpdateIsReadyToInstall(): Observable<HotCodePushEventData>;

    /**
     * Event sent when plugin couldn't load update from the server. Error details are attached to the event.
     * @returns {Observable<HotCodePushEventData>}
     */
    addListener(
        eventName: "chcp_updateLoadFailed",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;
    // onUpdateLoadFailed(): Observable<HotCodePushEventData>;

    /**
     * Event sent when we successfully loaded application config from the server, but there is nothing new is available.
     * @returns {Observable<HotCodePushEventData>}
     */

    addListener(
        eventName: "chcp_nothingToUpdate",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;
    // onNothingToUpdate(): Observable<HotCodePushEventData>;

    /**
     * Event sent when an update is about to be installed.
     * @returns {Observable<HotCodePushEventData>}
     */

    addListener(
        eventName: "chcp_beforeInstall",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;
    // onBeforeInstall(): Observable<HotCodePushEventData>;

    /**
     * Event sent when update was successfully installed.
     * @returns {Observable<HotCodePushEventData>}
     */
    addListener(
        eventName: "chcp_updateInstalled",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;

    // onUpdateInstalled(): Observable<HotCodePushEventData>;

    /**
     * Event sent when update installation failed. Error details are attached to the event.
     * @returns {Observable<HotCodePushEventData>}
     */

    addListener(
        eventName: "chcp_updateInstallFailed",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;
    // onUpdateInstallFailed(): Observable<HotCodePushEventData>;

    /**
     * Event sent when there is nothing to install. Probably, nothing was loaded before that.
     * @returns {Observable<HotCodePushEventData>}
     */
    addListener(
        eventName: "chcp_nothingToInstall",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;
    // onNothingToInstall(): Observable<HotCodePushEventData>;

    /**
     * Event sent when plugin is about to start installing bundle content on the external storage.
     * @returns {Observable<HotCodePushEventData>}
     */

    addListener(
        eventName: "chcp_beforeAssetsInstalledOnExternalStorage",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;
    // onBeforeAssetsInstalledOnExternalStorage(): Observable<HotCodePushEventData>;

    /**
     * Event sent when plugin successfully copied web project files from bundle on the external storage. Most likely you will use it for debug purpose only. Or even never.
     * @returns {Observable<HotCodePushEventData>}
     */

    addListener(
        eventName: "chcp_assetsInstalledOnExternalStorage",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;
    // onAssetsInstalledOnExternalStorage(): Observable<HotCodePushEventData>;
    /**
     * Event sent when plugin couldn't copy files from bundle on the external storage. If this happens - plugin won't work. Can occur when there is not enough free space on the device.
     * @returns {Observable<HotCodePushEventData>}
     */

    addListener(
        eventName: "chcp_assetsInstallationError",
        listenerFunc: (eventData: HotCodePushEventData) => void
    ): PluginListenerHandle;
    // onAssetsInstallationError(): Observable<HotCodePushEventData>;

    removeAllListeners(): void;
}
