export interface LoginOptions {
  /**
   * QQ 互联 应用 appId
   *
   * @since 1.0.0
   */
  appId: string;
  /**
   * QQ 互联 应用 appKey
   *
   * @since 1.0.0
   */
  appKey: string;
}

export interface LoginResult {
  /**
   * 返回 QQ 用户信息唯一值.
   *
   * @since 1.0.0
   */
  uid: string;

  /**
   * 同 uid 一样使用 兼容 其它第三方登录使用
   *
   * @since 1.0.0
   */
  openid: string;

  /**
   * 昵称
   *
   * @since 1.0.0
   */
  name: string;

  /**
   * 性别 男 | 女
   *
   * @since 1.0.0
   */
  gender: string;

  /**
   * 省份
   *
   * @since 1.0.0
   */
  province: string;

  /**
   * 城市
   *
   * @since 1.0.0
   */
  city: string;
}

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
   * 返回成功失败
   *
   * @since 1.0.0
   */
  value: boolean;
  /**
   * 返回状态码  value = false时 使用
   *
   * @since 1.0.0
   */
  code?: string;
}
