import { PluginListenerHandle } from "@capacitor/core";

export interface AuthNumberPlugin {
    /**
     * 运营商一键登录
     * 
     * @since 1.0.0
     */
    login(options: LoginOptions): Promise<void>;

    addListener(
        eventName:
            | "changeLogin"
            | "close"
            | "privacy"
            | "error"
            | "success",
        listenerFunc: (...args: any[]) => void
    ): PluginListenerHandle;

    /**
     * Remove all native listeners for this plugin
     *
     * @since 1.0.0
     */
    removeAllListeners(): Promise<void>;
}

export interface LoginOptions {
    /**
     *
     * @since 1.0.0
     */
    appId: string;

    /**
     * @since 1.0.0
     */
    appKey: string;

    /**
     * 显示弹框配置
     *
     * @since 1.0.0
     */
    authUI: UIConfig;
}

export interface UIConfig {

    uiType: AuthUI;

    appPrivacy: string[];
}

export interface CustomViewConfig extends UIConfig {}

export interface DialogBottomConfig extends UIConfig {}

export interface DialogPortConfig extends UIConfig {}

export enum AuthUI {
    /**
     * 底部弹框
     *
     * @since 1.0.0
     */
    DialogBottom,

    /**
     * 中间弹框
     *
     * @since 1.0.0
     */
    DialogPort,

    /**
     * 自定义 View界面 较为复杂
     *
     * @since 1.0.0
     */
    CustomView,
}
