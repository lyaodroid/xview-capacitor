import { PluginListenerHandle } from "@capacitor/core";

export interface NettyTcpPlugin {
    /**
     * 打开 tcp time  30s
     *
     * @since 1.0.0
     */
    open(options: TcpOptions): Promise<{ value: boolean }>;

    /**
     * 关闭 tcp
     *
     * @since 1.0.0
     */
    close(options?: any): Promise<void>;

    /**
     * 发送数据
     *
     * @since 1.0.0
     */
    send(options: any): Promise<{ value: boolean }>;

    /**
     * Listen for changes in the network connection.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "tcpReceived",
        listenerFunc: ( data: TcpResponse) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Listen for changes in the network connection.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "tcpStatusChange",
        listenerFunc: TcpStatusChangeListener
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * 离开页面 移除监听
     *
     * @since 1.0.0˝
     */
    removeAllListeners(): void;
}

export interface TcpResponse {
    /**
     * 标识 连接到 哪个 服务端
     *
     * @since 1.0.0
     */
    tcpTag: string;

    /**
     * 服务端发送过来的数据
     *
     * @since 1.0.0
     */
    data: string;
}

export type TcpStatusChangeListener = (status: TcpConnectionStatus) => void;

export interface TcpConnectionStatus {
    /**
     * 标识 连接到 哪个 服务端
     *
     * @since 1.0.0
     */
    tcpTag: string;

    /**
     * STATUS_CONNECT_ERROR = -1
     *
     * STATUS_CONNECT_CLOSED = 0
     *
     * STATUS_CONNECT_SUCCESS = 1
     *
     * @since 1.0.0
     */
    status: -1 | 0 | 1;
}

export interface TcpOptions {
    host: string;

    port: string;

    tcpTag?: string;

    heartBeat?: boolean;

    /**
     * 心跳间隔时间
     * 默认3 秒
     * 
     * @since 1.0.0
     */
    heartBeatInterval?: number;

    heartBeatData?: string;
}