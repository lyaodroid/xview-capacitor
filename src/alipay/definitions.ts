import type { LoginOptions , PayOptions , LoginResult, PayResult } from "./definitions-common";

export interface AliPayPlugin {
  /**
   * 支付宝登录
   *   
   * @since 1.0.0
   */
  login(options: LoginOptions): Promise<LoginResult>;

  /**
   * 支付宝支付
   *   
   * @since 1.0.0
   */
  pay(options: PayOptions): Promise<PayResult>;
}
