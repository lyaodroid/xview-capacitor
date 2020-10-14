import { PluginListenerHandle, registerWebPlugin, WebPlugin } from '@capacitor/core';
import { Dimensions, WebviewOverlayPlugin, OpenOptions } from '../xview-plugin-definitions';

export class WebviewOverlayWeb  extends WebPlugin implements WebviewOverlayPlugin{

    constructor() {
        super({
          name: "WebviewOverlay",
          platforms: ["web"],
        });
      }

    open(options: OpenOptions): Promise<void> {
        throw new Error("Method not implemented.");
    }
    close(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    loadUrl(options: { url: string; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getSnapshot(): Promise<{ src: string; }> {
        throw new Error("Method not implemented.");
    }
    show(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    hide(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    toggleFullscreen(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    goBack(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    goForward(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    reload(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    handleNavigationEvent(options: { allow: boolean; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateDimensions(options: Dimensions): Promise<void> {
        throw new Error("Method not implemented.");
    }
    evaluateJavaScript(options: { javascript: string; }): Promise<{ result: string; }> {
        throw new Error("Method not implemented.");
    }
    addListener(eventName: "pageLoaded" | "updateSnapshot" | "progress" | "navigationHandler", listenerFunc: (...args: any[]) => void): PluginListenerHandle {
        throw new Error("Method not implemented.");
    }
}

const WebviewOverlay = new WebviewOverlayWeb();

export { WebviewOverlay };

registerWebPlugin(WebviewOverlay);