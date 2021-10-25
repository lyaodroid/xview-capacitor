import { KeyboardResize } from "./definitions";

export interface KeyboardPluginConfig {
      /**
       * Configure the way the app is resized when the Keyboard appears.
       *
       * Only available on iOS.
       *
       * @since 1.0.0
       * @default native
       * @example "body"
       */
      resize?: KeyboardResize;

      /**
       * Override the keyboard style if your app doesn't support dark/light theme changes.
       * If not set, the keyboard style will depend on the device appearance.
       *
       * Only available on iOS.
       *
       * @since 1.0.0
       * @example "dark"
       */
      style?: 'dark' | 'light';

      /**
       * There is an Android bug that prevents the keyboard from resizing the WebView
       * when the app is in full screen (i.e. if StatusBar plugin is used to overlay the status bar).
       * This setting, if set to true, add a workaround that resizes the WebView even when the app is in full screen.
       *
       * Only available for Android
       *
       * @since 1.1.0
       * @example true
       */
      resizeOnFullScreen?: boolean;
}
