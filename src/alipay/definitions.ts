export interface AliPayPlugin {
  /**
   * Check if an app can be opened with the given URL.
   *
   * On iOS you must declare the URL schemes you pass to this method by adding
   * the `LSApplicationQueriesSchemes` key to your app's `Info.plist` file.
   * Learn more about configuring
   * [`Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist).
   *
   * This method always returns false for undeclared schemes, whether or not an
   * appropriate app is installed. To learn more about the key, see
   * [LSApplicationQueriesSchemes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes).
   *
   * @since 1.0.0
   */
  login(options: any): Promise<LoginResult>;

  /**
   * Open an app with the given URL.
   *
   * @since 1.0.0
   */
  pay(options: any): Promise<PayResult>;
}

export interface LoginResult {
  /**
   * The 返回唯一值.
   *
   * @since 1.0.0
   */
  uid: string;
}

export interface PayResult {
  /**
   * The app version.
   * 返回成功失败
   *
   * @since 1.0.0
   */
  value: boolean;
  /**
   * The app version.
   * 返回状态码 9000成功
   *
   * @since 1.0.0
   */
  code?: string;
}
