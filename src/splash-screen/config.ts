export interface PluginConfigBuild {
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
}
