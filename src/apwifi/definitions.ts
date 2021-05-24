import { PluginListenerHandle } from "@capacitor/core";
import { LinkedModule } from "../aplink";

export interface ApWifiPlugin {
    /**
     * 打开udp
     *
     * @since 1.0.0
     */
    openUdp(options?: any): Promise<{ value: boolean }>;

    /**
     * 关闭 udp
     *
     * @since 1.0.0
     */
    closeUdp(options?: any): Promise<void>;

    /**
     * 查找 设备
     *
     * @since 1.0.0
     */
    findLinkedModule(options?: any): Promise<void>;

    /**
     * Listen for changes in the aplink connection.
     * 监听设备 发现设备
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "apWifiFindModule",
        listenerFunc: (modules: ApWifiResult) => void
    ): PluginListenerHandle;

    /**
     * 离开页面 移除监听
     * 
     * @since 1.0.0˝
     */
    removeAllListeners(): void;
}

export interface ApWifiResult {
    modules: LinkedModule[];
}
