import { PluginListenerHandle } from "@capacitor/core";
import { PluginConfigBuild } from "./config";

export interface ShowOptions {
  /**
   * Whether to auto hide the splash after showDuration
   *
   * @since 1.0.0
   */
  autoHide?: boolean;
  /**
   * How long (in ms) to fade in.
   *
   * @since 1.0.0
   * @default 200
   */
  fadeInDuration?: number;
  /**
   * How long (in ms) to fade out.
   *
   * @since 1.0.0
   * @default 200
   */
  fadeOutDuration?: number;
  /**
   * How long to show the splash screen when autoHide is enabled (in ms)
   *
   * @since 1.0.0
   * @default 3000
   */
  showDuration?: number;
}

export interface HideOptions {
  /**
   * How long (in ms) to fade out.
   *
   * @since 1.0.0
   * @default 200
   */
  fadeOutDuration?: number;
}

export interface GuideOptions {
  /**
   * android 动态配置 几张引导图
   *
   * @since 1.0.0
   *
   */
  androidGuideScreen?: string[];

  /**
   * ios 动态配置 几张引导图
   *
   * @since 1.0.0
   */
  iosGuideScreen?: any;
}

export interface SplashScreenPlugin {
  /**
   * 插件在打包时 参数 配置 提示说明说明作用
   *
   * @since 1.0.0
   */
  pluginConfigBuild?: PluginConfigBuild;

  /**
   * Show the splash screen
   *
   * @since 1.0.0
   */
  show(options?: ShowOptions): Promise<void>;
  /**
   * Hide the splash screen
   *
   * @since 1.0.0
   */
  hide(options?: HideOptions): Promise<void>;

  /**
   * 调用引导图
   *
   * 下载展示时 需要判断
   *
   * @since 1.0.0
   */
  showGuide(options?: GuideOptions): Promise<void>;

  /**
   *  splashScreenResult
   */

  /**
   * 此方法 暂时 无法使用 因为交互 白屏问题
   * Listen for changes in the App's active state (whether the app is in the foreground or background)
   *
   * @since 1.0.0
   */
  addListener(
    eventName: "splashScreenResult",
    listenerFunc: SplashListener
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Remove all native listeners for this plugin
   *
   * @since 1.0.0
   */
  removeAllListeners(): Promise<void>;
}

export type SplashListener = (event: SplashListenerEvent) => void;

export interface SplashListenerEvent {
  /**
   *
   * 给前端设计 广告图 参考
   * 接口返回原始参数
   *
   * none 点击无反应 close 点击 跳过 关闭  page 跳转页面  url 跳转webview 链接
   *
   * data?: any;
   *
   * actionType?: "none" | "close" | "page" | "url";
   *
   * @since 1.0.0
   */
  /**
   *  暂时不用
   *  前端 控制 是否 显示 引导图
   *  返回 true 保存 后 下次启动 不用再 调用 此方法
   *   isShowGuide?: boolean;
   *
   * @since 1.0.0
   */
}

/**
 * @deprecated Use `ShowOptions`.
 * @since 1.0.0
 */
export type SplashScreenShowOptions = ShowOptions;

/**
 * @deprecated Use `HideOptions`.
 * @since 1.0.0
 */
export type SplashScreenHideOptions = HideOptions;
