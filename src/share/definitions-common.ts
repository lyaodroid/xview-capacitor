export interface ShareOptions {
  /**
   * Set a title for any message. This will be the subject
   * if sharing to email
   *
   * @since 1.0.0
   */
  title?: string;

  /**
   * Set some text to share
   *
   * @since 1.0.0
   */
  text?: string;

  /**
   * Set a URL to share, can be http, https or file:// URL
   *
   * @since 1.0.0
   */
  url?: string;

  /**
   * Set a title for the share modal.
   * This option is only supported on Android.
   *
   * @since 1.0.0
   */
  dialogTitle?: string;
}

export interface ShareResult {
  /**
   * Identifier of the app that received the share action.
   * Can be an empty string in some cases.
   *
   * On web it will be undefined.
   *
   * @since 1.0.0
   */
  activityType?: string;
}