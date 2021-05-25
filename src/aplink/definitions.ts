import { PluginListenerHandle } from "@capacitor/core";

import type { PermissionStatus } from "./definitions-common";

export type ApLinkPermissionState = PermissionState | "limited";

export type APLinkPermissionType = "wifi" | "location";

export interface ApLinkPluginPermissions {
    permissions: APLinkPermissionType[];
}

export interface ApLinkPlugin {
    /**
     * 获取当前连接的WiFi名字
     *
     * @since 1.0.0
     */
    getConnectedSSID(): Promise<void>;

    /**
     * 手动兼容老设备
     * 走 WiFisdk udp
     *
     * @since 1.0.0
     */
    manualApLinkerStart(options: any): Promise<void>;

    /**
     * 新设备走服务器
     *
     * @since 1.0.0
     */
    smartApLinkerStart(options?: any): Promise<any>;

    /**
     * 关闭配网
     *
     * @since 1.0.0.
     */
    apLinkerStop(): Promise<void>;

    /**
     * 手动 去打开WiFi 连接
     *
     * @since 1.0.0
     */
    manualConnectWifi(options?: any): Promise<void>;

    /**
     * Listen for changes in the aplink connection.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "apLinkStatusChange",
        listenerFunc: (status: ApLinkStatusProgress) => void
    ): PluginListenerHandle;

    /**
     * Check wifi/location permissions.
     *
     * @since 1.0.0
     */
    checkPermissions(): Promise<PermissionStatus>;

    /**
     * Request location permissions wifiInfo
     *
     * @since 1.0.0
     */
    requestPermissions(
        permissions?: ApLinkPluginPermissions
    ): Promise<PermissionStatus>;

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
     * wifi 频段 大概判断
     *
     * @since 1.0.0
     */
    hertz: "2.4" | "5";

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
 *
 * @since 1.0.0
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
