
export interface LoginOptions {
  /**
   * 由后端生成 标准版授权参数
   *
   * @since 1.0.0
   */
  aliLogin: string;
}

export interface LoginResult {
  /**
   * 返回支付宝用户信息唯一值.
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
   * 返回授权码 可以换取其它参数使用 具体参考开发文档
   *
   * @since 1.0.0
   */
  authCode: string;
}

export interface PayOptions {
  /**
   * 由后端生成 支付参数
   *
   * @since 1.0.0
   */
  aliPay: string;
}

export interface PayResult {
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
