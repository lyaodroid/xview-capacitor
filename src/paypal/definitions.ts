
export interface PayPalPlugin {
  /**
   * 
   * 
   * 
   *
   * @since 1.0.0
   */
  auth(options?: any): Promise<any>;

  /**
   *  暂时使用 any
   *
   * @since 1.0.0
   */
  pay(options: { value: string }): Promise<void>;
}
