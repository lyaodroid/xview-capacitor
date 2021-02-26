
export interface AliPayPlugin {
  /**
   *
   * @param options = {aliLogin:"登录参数"}
   * @param result = {openid: '<value>',uid: '<value>','authCode': '<value>'}
   */
  login(options: any): Promise<any>;

  /**
   *
   * @param {aliPay:"接口返回的参数"}
   * @code = "9000" 为支付成功
   */
  pay(options: any): Promise<{ value: boolean; code?: string }>;
}
