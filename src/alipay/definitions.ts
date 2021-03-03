import type { LoginResult } from "../common";

export interface AliPayPlugin {
  /**
   * 支付宝 登录 value = 使用 标准版授权参数
   *
   * @since 1.0.0
   */
  login(options: { value: string }): Promise<LoginResult>;

  /**
   * 支付宝 支付 value = 使用 由后端生成支付参数
   * catch (error) error.code == "1" 取消支付 
   * 支付失败 状态码 查文档
   *
   * @since 1.0.0
   */
  pay(options: { value: string }): Promise<void>;
}
