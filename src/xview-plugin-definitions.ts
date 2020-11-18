import {
    Plugin,
    PluginListenerHandle,
} from "@capacitor/core/dist/esm/definitions";

declare module "@capacitor/core" {
    interface PluginRegistry {
        Device: DevicePlugin;
        XView: XViewPlugin;
        HotCodePush: HotCodePushPlugin;
        Permissions: PermissionsPlugin;
        File: FilePlugin;

    }
}

export interface FilePlugin {
    fileSelector(options:{multiple_selection:boolean,ext:string[]}):Promise<any>;
    addListener(
      eventName: 'onFilesSelected',
      listenerFunc: (state: any) => void,
    ): PluginListenerHandle;
  }

export interface PermissionsPlugin {
    query(options: PermissionsOptions): Promise<PermissionResult>;

    request(
        options: PermissionsOptions
    ): Promise<PermissionsRequestResult>;
}

export interface PermissionsRequestResult {
    results: any[];
}

/**
 * 用Android 的别名
 * 检查权限
 */
export enum PermissionType {
    Camera = "camera",
    Photos = "photos",
    Geolocation = "geolocation",
    Notifications = "notifications",
    ClipboardRead = "clipboard-read",
    ClipboardWrite = "clipboard-write",
    Microphone = "microphone",
}

export interface PermissionsOptions {
    /**
     * ios 单独使用
     */
    name: PermissionType;
    /**
     * Android 权限
     * 可以使用别名 和 插件权限值
     */
    permissions?: string[];
}

export interface PermissionResult {
    state: "granted" | "denied" | "prompt";
}

export type OperatingSystem =
    | "ios"
    | "android"
    | "windows"
    | "mac"
    | "unknown";

export interface DeviceInfo {
    /**
     * The name of the device. For example, "John's iPhone".
     *
     * This is only supported on iOS.
     *
     * @since 1.0.0
     */
    name?: string;

    /**
     * The device model. For example, "iPhone".
     *
     * @since 1.0.0
     */
    model: string;

    /**
     * The device platform (lowercase).
     *
     * @since 1.0.0
     */
    platform: "ios" | "android" | "web";

    /**
     * The UUID of the device as available to the app. This identifier may change
     * on modern mobile platforms that only allow per-app install UUIDs.
     *
     * @since 1.0.0
     */
    uuid: string;

    /**
     * The operating system of the device.
     *
     * @since 1.0.0
     */
    operatingSystem: OperatingSystem;

    /**
     * The version of the device OS.
     *
     * @since 1.0.0
     */
    osVersion: string;

    /**
     * The manufacturer of the device.
     *
     * @since 1.0.0
     */
    manufacturer: string;

    /**
     * Whether the app is running in a simulator/emulator.
     *
     * @since 1.0.0
     */
    isVirtual: boolean;

    /**
     * Approximate memory used by the current app, in bytes. Divide by
     * 1048576 to get the number of MBs used.
     *
     * @since 1.0.0
     */
    memUsed?: number;

    /**
     * How much free disk space is available on the the normal data storage.
     * path for the os, in bytes
     *
     * @since 1.0.0
     */
    diskFree?: number;

    /**
     * The total size of the normal data storage path for the OS, in bytes.
     *
     * @since 1.0.0
     */
    diskTotal?: number;
}

export interface DeviceBatteryInfo {
    /**
     * A percentage (0 to 1) indicating how much the battery is charged.
     *
     * @since 1.0.0
     */
    batteryLevel?: number;

    /**
     * Whether the device is charging.
     *
     * @since 1.0.0
     */
    isCharging?: boolean;
}

export interface DeviceLanguageCodeResult {
    /**
     * Two character language code.
     *
     * @since 1.0.0
     */
    value: string;
}

export interface DevicePlugin {
    /**
     * Return information about the underlying device/os/platform.
     *
     * @since 1.0.0
     */
    getInfo(): Promise<DeviceInfo>;

    /**
     * Return information about the battery.
     *
     * @since 1.0.0
     */
    getBatteryInfo(): Promise<DeviceBatteryInfo>;

    /**
     * Get the device's current language locale code.
     *
     * @since 1.0.0
     */
    getLanguageCode(): Promise<DeviceLanguageCodeResult>;
}

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
