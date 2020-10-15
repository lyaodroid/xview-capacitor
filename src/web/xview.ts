import { PluginListenerHandle, WebPlugin } from "@capacitor/core";
import {
  XViewDataOptions,
  XViewPlugin, XViewResult
} from "../xview-plugin-definitions";

export class XViewWeb extends WebPlugin implements XViewPlugin {
    constructor() {
        super({ name: "XView" });
    }

    callNativeXView(options: XViewDataOptions): Promise<XViewResult> {
        console.log("XviewWeb");

        return new Promise((resolve, reject) => {});
    }

    addListener(
        eventName: string,
        listenerFunc: (status: XViewResult) => void
    ): PluginListenerHandle {
        return {
            remove: () => {},
        };
    }

    removeAllListeners(): void {
        console.log("XviewWeb removeAllListeners");
    }

    /**
     * https://github.com/Ad-Scientiam/capacitor-google-fit/blob/master/src/web.ts
     */
    async connectToGoogleFit(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
