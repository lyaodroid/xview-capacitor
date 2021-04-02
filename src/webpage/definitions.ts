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

  /**
   * webview 宽度 = -1 时表示 宽度满屏
   * 
   * @since 1.0.0
   */
  width: number;

  /**
   * webview 高度 
   * 一般主要减去(状态栏 高度 + titleBar高度)
   * 
   * @since 1.0.0
   */
  height: number;
  /**
   * webview 左偏移
   * 
   * @since 1.0.0
   */
  x: number;

  /**
   * webview 上偏移
   * 计算 状态栏高度和titleBar高度
   * 
   * @since 1.0.0
   */
  y: number;
}

export enum ScriptInjectionTime {
  atDocumentStart,
  atDocumentEnd,
}
