import { LoginResult, ShareMedia, ShareResult } from "../common";

export interface QQPlugin {
  /**
   * qq 登录
   *
   * @since 1.0.0
   */
  login(options: QQLoginOptions): Promise<LoginResult>;

  /**
   * qq 分享
   *
   * @since 1.0.0
   */
  share(options: ShareMedia): Promise<ShareResult>;
}

export interface QQLoginOptions {
  /**
   * 应用 appId
   *
   * @since 1.0.0
   */
  appId: string;

  /**
   * 应用 appKey
   *
   * @since 1.0.0
   */
  appKey: string;
}
