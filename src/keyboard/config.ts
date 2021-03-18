export interface PluginConfigBuild {
  /**
   * Configure the way the app is resized when the Keyboard appears.
   *
   * Only available on iOS.
   *
   * @since 1.0.0
   * @default native
   */
  resize?: "none" | "native" | "body" | "ionic";

  /**
   * Use the dark style keyboard instead of the regular one.
   *
   * Only available on iOS.
   *
   * @since 1.0.0
   */
  style?: "dark";
}
