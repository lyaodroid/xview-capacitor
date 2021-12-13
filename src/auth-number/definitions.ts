import { PluginListenerHandle } from "@capacitor/core";
import { LoginResult } from "..";

export interface AuthNumberPlugin {
    /**
     * 运营商一键登录
     *
     * @since 1.0.0
     */
    login(options: LoginOptions): Promise<void>;

    addListener(
        eventName: "oneKeyLoginListener",
        listenerFunc: OneKeyLoginListener
    ): PluginListenerHandle;

    /**
     * Remove all native listeners for this plugin
     *
     * @since 1.0.0
     */
    removeAllListeners(): Promise<void>;
}

export type OneKeyLoginListener = (result: OneKeyLoginResult) => void;


export interface OneKeyLoginResult {
    /**
     * Whether there is an active connection or not.
     *
     * @since 1.0.0
     */

    code: string;

    token?: string;

    message?: string;

    vendorName?: string;
  
    /**
     * The type of network connection currently in use.
     *
     * If there is no active network connection, `connectionType` will be `'none'`.
     *
     * @since 1.0.0
     */
    resultType: ResultType;
  }

  export type ResultType = 'cancel' | 'error' | 'success';

export interface LoginOptions {
    /**
     *
     * @since 1.0.0
     */
    authSecret: string;

    /**
     * 显示弹框配置
     *
     * @since 1.0.0
     */
    authUI: UIConfig;
}

export interface UIConfig {
    uiType: AuthUI;

    appPrivacy: AppPrivacy;
}

export interface AppPrivacy {
    /**
     * 多个协议
     *
     * @since 1.0.0
     */
    privacies: Privacy[];
    /**
     * new String[]{",","","和"}
     *
     * @since 1.0.0
     */
    connectTexts?: string[];
}

export interface Privacy {
    /**
     * 协议 标题 《*** 协议 ***》
     *
     * @since 1.0.0
     */
    title: string;

    /**
     * 协议跳转 http or https
     */
    url: string;
    /**
     * 十六进制
     * "#002E00"
     *
     * @since 1.0.0
     */
    color: string;
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
    DialogBottom = "DIALOG_BOTTOM",

    /**
     * 中间弹框
     *
     * @since 1.0.0
     */
    DialogPort = "DIALOG_PORT",

    /**
     * 自定义 View界面 较为复杂
     *
     * @since 1.0.0
     */
    CustomView = "CUSTOM_VIEW",
}
