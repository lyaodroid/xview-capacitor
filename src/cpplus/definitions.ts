import { PluginListenerHandle } from "@capacitor/core";

export interface CPPlusPlugin {
  
    nativeStart(options: any): Promise<any>;

    nativeSend(options: any): Promise<any>;

    nativeStop(options?: any): void;

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
