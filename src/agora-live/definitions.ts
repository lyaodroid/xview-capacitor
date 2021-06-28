import { PluginListenerHandle } from "@capacitor/core";

export type RoomType =
    | "multi"
    | "single"
    | "pk"
    | "virtual_host"
    | "ecommerce";

export interface ECommerceLivePlayerPlugin {
    /**
     * 测试 插件打开原生界面
     *
     * @since 1.0.0
     */
    play(options: LiveRoomOptions): Promise<void>;

    /**
     * 离开直播列表界面 关闭原生直播界面
     *
     * @param options
     */
    stop(options?: any): Promise<void>;
}
export interface LiveRoomOptions {
    /**
     * 暂时 只能使用 ecommerce 类型
     *
     * @since 1.0.0
     */
    roomType: RoomType;

    /**
     * 直播间名字
     */
    roomName: string;

    /**
     * 直播间 roomId
     */
    roomId: string;
}

/**
 * -----------------------------------------------------------------------------
 * 推流插件
 */

export interface ECommerceLivePusherPlugin {
    /**
     * 带参数进入直播间准备
     *
     * @since 1.0.0
     */
    start(options?: any): Promise<void>;
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
    login(options: LoginLiveOptions): Promise<void>;

    /**
     * 退出登录
     *
     * @since 1.0.0
     */
    logout(options: LoginLiveOptions): Promise<void>;
}
export interface LoginLiveOptions {
    /**
     * 应用 AppId
     *
     * @since 1.0.0
     */
    appId: string;

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
    imageUrl: string;

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
    agoraUid: string;
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
