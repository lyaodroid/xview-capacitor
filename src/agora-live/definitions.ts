import { PluginListenerHandle } from "@capacitor/core";

/**
 * -----------------------------------------------------------------------------
 * 推流插件
 */

export interface LivePusherPlugin {
    /**
     * 带参数进入直播间准备
     *
     * @since 1.0.0
     */
    enterRoomPrepare(options: any): Promise<void>;
}


export interface LivePlayerPlugin {
    /**
     * 带参数进入直播间观看
     *
     * @since 1.0.0
     */
    play(options: any): Promise<void>;
}

export interface LiveChatPlugin {
    /**
     * 登录结果监听
     * 登录之前调用
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "loginListener",
        listenerFunc: LoginListener
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * 带参数进入直播间准备
     *
     * @since 1.0.0
     */
    login(options: LoginRtmOptions): Promise<void>;

    /**
     * 退出登录
     *
     * @since 1.0.0
     */
    logout(options?: any): Promise<void>;
}
export interface LoginRtmOptions {

        /**
     * 用户 id
     *
     * @since 1.0.0
     */
    userId: string;

    /**
     * 用户token
     *
     * @since 1.0.0
     */
    userToken: string;

    /**
     * 用户 名称
     *
     * @since 1.0.0
     */
    userName: string;

    /**
     * 用户头像
     *
     * @since 1.0.0
     */
    avatar: string;


    /**
     * Rtm 聊天 token
     *
     * @since 1.0.0
     */
    rtmToken: string;

    /**
     * 声网 uid
     *
     * @since 1.0.0
     */
    uid: number;
}

export type LoginListener = (result: RtmLoginLiveResult) => void;
export interface RtmLoginLiveResult {
    /**
     * false 时  error 有值
     *
     * @since 1.0.0
     */
    success: boolean;

    /**
     * 错误信息 排查错误时有用
     *
     *
     * @since 1.0.0
     */
    error?: {
        code: number;
        description: string;
    };
}
