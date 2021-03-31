import { PluginListenerHandle } from "@capacitor/core";

export interface WebPagePlugin {
  /**
   * Open a webview with the given URL
   */
  open(options: OpenOptions): Promise<void>;

  /**
   * Close an open webview.
   */
  close(): Promise<void>;

  /**
   * Load a url in the webview.
   */
  loadUrl(options: { url: string }): Promise<void>;

  /**
   * Get snapshot image
   */
  getSnapshot(): Promise<{ src: string }>;

  show(): Promise<void>;
  hide(): Promise<void>;

  toggleFullscreen(): Promise<void>;
  canGoBack(): Promise<{ value: boolean }>;
  goBack(): Promise<void>;
  goForward(): Promise<void>;
  reload(): Promise<void>;

  handleNavigationEvent(options: { allow: boolean }): Promise<void>;

  updateDimensions(options: Dimensions): Promise<void>;

  evaluateJavaScript(options: {
    javascript: string;
  }): Promise<{ result: string }>;

  addListener(
    eventName:
      | "title"
      | "pageLoaded"
      | "updateSnapshot"
      | "progress"
      | "navigationHandler",
    listenerFunc: (...args: any[]) => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Remove all native listeners for this plugin
   *
   * @since 1.0.0
   */
  removeAllListeners(): Promise<void>;
}

export interface OpenOptions extends Dimensions {
  /**
   * The URL to open the webview to
   */
  url: string;

  javascript?: string;
  injectionTime?: ScriptInjectionTime;
}

export interface Dimensions {
  width: number;
  height: number;
  x: number;
  y: number;
}

export enum ScriptInjectionTime {
  atDocumentStart,
  atDocumentEnd,
}
