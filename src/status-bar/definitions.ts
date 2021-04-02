import { PluginListenerHandle } from "@capacitor/core";

export interface StatusBarStyleOptions {
  /**
   * Style of the text of the status bar.
   *
   * @since 1.0.0
   */
  style: StatusBarStyle;
}

export enum StatusBarStyle {
  /**
   * Light text for dark backgrounds.
   *
   * @since 1.0.0
   */
  Dark = "DARK",

  /**
   * Dark text for light backgrounds.
   *
   * @since 1.0.0
   */
  Light = "LIGHT",

  /**
   * On iOS 13 and newer the style is based on the device appearance.
   * If the device is using Dark mode, the statusbar text will be light.
   * If the device is using Light mode, the statusbar text will be dark.
   * On iOS 12 and older the statusbar text will be dark.
   * On Android the default will be the one the app was launched with.
   *
   * @since 1.0.0
   */
  Default = "DEFAULT",
}

export interface StatusBarAnimationOptions {
  /**
   * The type of status bar animation used when showing or hiding.
   *
   * This option is only supported on iOS.
   *
   * @since 1.0.0
   */
  animation: StatusBarAnimation;
}

export enum StatusBarAnimation {
  /**
   * No animation during show/hide.
   *
   * @since 1.0.0
   */
  None = "NONE",

  /**
   * Slide animation during show/hide.
   *
   * @since 1.0.0
   */
  Slide = "SLIDE",

  /**
   * Fade animation during show/hide.
   *
   * @since 1.0.0
   */
  Fade = "FADE",
}

export interface StatusBarBackgroundColorOptions {
  /**
   * A hex color to which the status bar color is set.
   *
   * This option is only supported on Android.
   *
   * @since 1.0.0
   */
  color: string;
}

export interface StatusBarInfoResult {
  /**
   * Whether the status bar is visible or not.
   *
   * @since 1.0.0
   */
  visible: boolean;

  /**
   * The current status bar style.
   *
   * @since 1.0.0
   */
  style: StatusBarStyle;

  /**
   * The current status bar color.
   *
   * This option is only supported on Android.
   *
   * @since 1.0.0
   */
  color?: string;

  /**
   * Whether the statusbar is overlaid or not.
   *
   * This option is only supported on Android.
   *
   * @since 1.0.0
   */
  overlays?: boolean;

  /**
   * 状态栏高度 由于系统 转换机制 原因会有一定偏差 不可以 计算 位置使用
   *
   * @since 1.0.0
   */
  height: number;

  /**
   * 导航栏 高度 在使用全屏 尺寸 时  高度 应当减去 状态栏 和 导航栏
   *
   * @since 1.0.0
   */
  navBarHeight: number;
}

export interface StatusBarOverlaysWebviewOptions {
  /**
   * Whether to overlay the status bar or not.
   *
   * @since 1.0.0
   */
  overlay: boolean;
}

export interface StatusBarPlugin {
  /**
   * Set the current style of the status bar.
   *
   * @since 1.0.0
   */
  setStyle(options: StatusBarStyleOptions): Promise<void>;

  /**
   * Set the background color of the status bar.
   *
   * This method is only supported on Android.
   *
   * @since 1.0.0
   */
  setBackgroundColor(
    options: StatusBarBackgroundColorOptions
  ): Promise<void>;

  /**
   * Show the status bar.
   *
   * @since 1.0.0
   */
  show(options?: StatusBarAnimationOptions): Promise<void>;

  /**
   * Hide the status bar.
   *
   * @since 1.0.0
   */
  hide(options?: StatusBarAnimationOptions): Promise<void>;

  /**
   * Get info about the current state of the status bar.
   *
   * @since 1.0.0
   */
  getInfo(): Promise<StatusBarInfoResult>;

  /**
   * Set whether or not the status bar should overlay the webview to allow usage
   * of the space underneath it.
   *
   * This method is only supported on Android.
   *
   * @since 1.0.0
   */
  setOverlaysWebView(
    options: StatusBarOverlaysWebviewOptions
  ): Promise<void>;

  /**
   * 暗黑模式是否开启 暂未启用 占坑
   *
   * @since 1.0.0
   */
  addListener(
    eventName: "darkModeStateChanged",
    listenerFunc: (args: { value: boolean }) => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
