import { PluginListenerHandle } from "@capacitor/core";

declare module "@capacitor/core" {
    interface PluginRegistry {
        Wifi: WifiPlugin;
        ApLink: ApLinkPlugin;
        ApWifi: ApWifiPlugin;
        CPPlus: CPPlusPlugin;
    }
}

/**
 * 汉枫 配网 sdk 与 Cpp JNI 插件调用 -----------------------------------------------
 */

export interface ApLinkPlugin {
    /**
     * 获取当前连接的WiFi名字
     */
    getConnectedSSID(): Promise<void>;

    /**
     * 手动兼容老设备
     * 走 WiFisdk udp
     */
    manualApLinkerStart(options:any): Promise<void>;

    /**
     * 新设备走服务器
     */
    smartApLinkerStart(): Promise<void>;

    /**
     * 关闭配网
     */
    apLinkerStop(): Promise<void>;

    /**
     * 手动 去打开WiFi 连接
     */
    manualConnectWifi(): Promise<void>;

    /**
     * Listen for changes in the aplink connection.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "apLinkStatusChange",
        listenerFunc: (status: ApLinkStatusProgress) => void
    ): PluginListenerHandle;

    removeAllListeners(): void;
}

export interface ApLinkStatusProgress {
    /**
     * Whether there is an active connection or not.
     *
     * @since 1.0.0
     */
    status: ApLinkStatus;

    ssid: string;

    /**
     * linking 中才会有进度回调
     */
    progress: LinkingProgress;

    error: LinkingError;

    module: LinkedModule;

    /**
     * The type of network connection currently in use.
     *
     * If there is no active network connection, `connectionType` will be `'none'`.
     *
     * @since 1.0.0
     */
    linkType: ApLinkStatusLinkType;
}

/**
 * 配网两种类型  server 后面会启用
 */
export type ApLinkStatusLinkType = "wifi" | "server";

export enum ApLinkStatus {
    WIFILINK = "WIFILINK",
    LINKING = "LINKING",
    LINKED = "LINKED",
    FINISHED = "FINISHED",
    TIMEOUT = "TIMEOUT",
    ERROR = "ERROR",
}

export enum LinkingProgress {
    SCAN_AP = "SCAN_AP",
    CONNECT_AP = "CONNECT_AP",
    CONFIG_AP = "CONFIG_AP",
    /**
     * @deprecated the progress 'RESTART_AP' will be not invoked by {@link OnLinkListener#onProgress(LinkingProgress)}
     */
    RESTART_AP = "RESTART_AP",
    CONNECT_ORIGINAL_AP = "CONNECT_ORIGINAL_AP",
    FIND_DEVICE = "FIND_DEVICE",
}

export enum LinkingError {
    NO_VALID_WIFI_CONNECTION = "NO_VALID_WIFI_CONNECTION",
    AP_NOT_FOUND = "AP_NOT_FOUND",
    AP_CONNECT_FAILED = "AP_CONNECT_FAILED",
    AP_CONFIG_FAILED = "AP_CONFIG_FAILED",
    AP_RESTART_FAILED = "AP_RESTART_FAILED",
    CONNECT_ORIGINAL_AP_FAILED = "CONNECT_ORIGINAL_AP_FAILED",
    FIND_DEVICE_FAILED = "FIND_DEVICE_FAILED",
}

export interface LinkedModule {
    mac: string;
    ip: string;
    id: string;
}

export interface ApWifiPlugin {

    openUdp(options?:any): Promise<void>;

    closeUdp(options?:any): Promise<void>;

    findLinkedModule(options?:any): Promise<void>;

        /**
     * Listen for changes in the aplink connection.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "apWifiFindModule",
        listenerFunc: (modules: ApWifiResult) => void
    ): PluginListenerHandle;

    removeAllListeners(): void;
}

export interface ApWifiResult {
    modules: LinkedModule[];
}

export interface CPPlusPlugin {
    nativeStart(options:any): Promise<void>;

    nativeSend(options:any): Promise<void>;

    nativeStop(options?:any): Promise<void>;

    /**
     * Listen for changes in the cpp connection.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "cppTcpReceived",
        listenerFunc: (data: { value: string }) => void
    ): PluginListenerHandle;

    /**
     * Remove all listeners (including the network status changes) for this plugin.
     *
     * @since 1.0.0
     */
    removeAllListeners(): void;
}

/**
 * wifi 支持AndroidQ
 */

export interface WifiPlugin {
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
