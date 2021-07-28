import { WebPlugin, PluginListenerHandle } from "@capacitor/core";

import {
    LiveChatPlugin,
    LoginListener,
    LoginRtmOptions,
} from "./definitions";

export class LiveChatWeb extends WebPlugin implements LiveChatPlugin {
    constructor() {
        super();
    }

    login(options: LoginRtmOptions): Promise<void> {
        throw new Error("Method not implemented.");
    }
    logout(options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 登录结果监听
     * 登录之前调用
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "loginListener",
        listenerFunc: LoginListener
    ): Promise<PluginListenerHandle> & PluginListenerHandle {
        throw this.unimplemented("Not implemented on web.");
    }
}

1;
