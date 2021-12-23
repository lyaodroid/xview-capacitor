import { PluginListenerHandle } from "@capacitor/core";

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
     * 使用完要移除插件监听
     *
     * @since 1.0.0
     */
    removeAllListeners(): Promise<void>;
}

export type OneKeyLoginListener = (result: OneKeyLoginResult) => void;

export interface OneKeyLoginResult {
    /**
     *    成功两种状态 处理 loading
     * if(resultType == "success"){
        if("600001" == data.code){
            console.log('唤起授权页成功 隐藏 loading');
        } 
         if ("600000" == data.code){
            console.log('登录成功 token: ' +  data.token);
        }
      }
     *
     * @since 1.0.0
     */

    code: string;

    /**
     *  注意 code 上面注释 处理 token
     *
     * @since 1.0.0
     */
    token?: string;

    message?: string;

    vendorName?: string;

    /**
     *
     * 注意不同状态下 对 code的排查 与使用
     *
     * @since 1.0.0
     */
    resultType: ResultType;
}

export type ResultType = "cancel" | "error" | "success";

export interface LoginOptions {
    /**
     *
     * @since 1.0.0
     */
    authSecret: string;

    /**
     * 超时时间 默认毫秒 5 * 1000
     */
    timeout?: number;

    /**
     * 显示弹框配置
     *
     * @since 1.0.0
     */
    authUI: AuthUIConfig;
}

export interface AuthUIConfig {
    uiType: AuthUIType;

    appPrivacy: AppPrivacy;

    appRegisterView?: AppRegisterView;
}

/**
 * 一键登录 View上面 展示内容 logo 提示信息
 */
export interface AppRegisterView {
    /**
     * 登录号码
     *
     * @since 1.0.0
     */
    numberText: NumberText;
    /**
     * 登录按钮
     *
     * @since 1.0.0
     */
    loginText: LoginText;
    /**
     * 切换方式
     *
     * @since 1.0.0
     */
    switchText: SwitchText;

    /**
     * 品牌展示
     *
     * @since 1.0.0
     */
    sloganText: SloganText;
}
export interface TextView {
    /**
     * 号码没有设置
     */
    text?: string;

    color?: string;

    size?: number;
}

export interface NumberText extends TextView {}

export interface LoginText extends TextView {}

export interface SwitchText extends TextView {}

export interface SloganText extends TextView {}

export interface AppPrivacy {
    /**
     * 协议webView配置
     *
     * @since 1.0.0
     */
    webViewColor?: WebViewColor;
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

export interface WebViewColor {
    /**
     *
     * 导航栏颜色 默认与 statusBarColor 一致
     *
     * @since 1.0.0
     */
    titleBarColor: string;
    /**
     * 标题文字 color
     *
     * @since 1.0.0
     */
    titleTextColor: string;
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
     *
     * 《****》外颜色
     *
     * @since 1.0.0
     */
    colorOut: string;

    /**
     * 《****》颜色
     */
    colorIn: string;
}

export interface CustomViewConfig extends AuthUIConfig {}

export interface DialogBottomConfig extends AuthUIConfig {}

export interface DialogPortConfig extends AuthUIConfig {}

export enum AuthUIType {
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
