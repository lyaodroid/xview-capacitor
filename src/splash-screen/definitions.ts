/// <reference types="@capacitor/cli" />

import { PluginListenerHandle } from "@capacitor/core";

declare module "@capacitor/cli" {
  export interface PluginsConfig {
    SplashScreen?: {
      /**
       * How long to show the launch splash screen when autoHide is enabled (in ms)
       *
       * @since 1.0.0
       * @default 0
       */
      launchShowDuration?: number;

      /**
       * Whether to auto hide the splash after launchShowDuration
       *
       * @since 1.0.0
       * @default true
       */
      launchAutoHide?: boolean;

      /**
       * Color of the background of the Splash Screen in hex format, #RRGGBB or #RRGGBBAA
       *
       * @since 1.0.0
       */
      backgroundColor?: string;

      /**
       * Name of the resource to be used as Splash Screen
       *
       * Only available on Android
       *
       * @since 1.0.0
       * @default splash
       */
      androidSplashResourceName?: string;

      /**
       * The [ImageView.ScaleType](https://developer.android.com/reference/android/widget/ImageView.ScaleType) used to scale
       * the Splash Screen image
       *
       * Only available on Android
       *
       * @since 1.0.0
       * @default FIT_XY
       */
      androidScaleType?:
        | "CENTER"
        | "CENTER_CROP"
        | "CENTER_INSIDE"
        | "FIT_CENTER"
        | "FIT_END"
        | "FIT_START"
        | "FIT_XY"
        | "MATRIX";

      /**
       * Show a loading spinner on the Splash Screen
       *
       * @since 1.0.0
       */
      showSpinner?: boolean;

      /**
       * Style of the Android spinner
       *
       * @since 1.0.0
       * @default large
       */
      androidSpinnerStyle?:
        | "horizontal"
        | "small"
        | "large"
        | "inverse"
        | "smallInverse"
        | "largeInverse";

      /**
       * Style of the iOS spinner
       *
       * Only available on iOS.
       *
       * @since 1.0.0
       * @default large
       */
      iosSpinnerStyle?: "large" | "small";

      /**
       * Color of the spinner in hex format, #RRGGBB or #RRGGBBAA
       *
       * @since 1.0.0
       */
      spinnerColor?: string;

      /**
       * Hide the status bar on the Splash Screen
       *
       * Only available on Android
       *
       * @since 1.0.0
       */
      splashFullScreen?: boolean;

      /**
       * Hide the status bar and the software navigation buttons on the Splash Screen
       *
       * Only available on Android
       *
       * @since 1.0.0
       */
      splashImmersive?: boolean;
    };
  }
}

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
