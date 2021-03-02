import type { LoginResult, PayResult } from "../common";

export interface AliPayPlugin {
  /**
   * 支付宝登录
   *
   * @since 1.0.0
   */
  login(options: AliPayOptions): Promise<LoginResult>;

  /**
   * 支付宝支付
   *
   * @since 1.0.0
   */
  pay(options: AliPayOptions): Promise<PayResult>;
}

export interface AliPayOptions {
  /**
   * 支付 使用 由后端生成支付参数
   *
   * @since 1.0.0
   */
  aliPay?: string;

  /**
   * 登录 使用 标准版授权参数
   *
   * @since 1.0.0
   */
  aliLogin?: string;
}
