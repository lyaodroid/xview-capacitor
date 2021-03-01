import type { LoginResult, PayResult } from "./definitions-common";

export interface AliPayPlugin {
  /**
   * @param options options = { aliLogin: "后端生成 string"}
   *
   * @description 授权参数
   *
   * @since 1.0.0
   */
  login(options: any): Promise<LoginResult>;

  /**
   * @param options options = { aliPay: "后端生成 string" }
   *
   * @description 支付参数
   *
   * @since 1.0.0
   */
  pay(options: any): Promise<PayResult>;
}
