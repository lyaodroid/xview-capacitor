import type { LoginOptions , ShareOptions , LoginResult, ShareResult } from "./definitions-common";

export interface QQPlugin {
  /**
   * qq 登录
   *   
   * @since 1.0.0
   */
  login(options: LoginOptions): Promise<LoginResult>;

  /**
   * qq 分享
   *   
   * @since 1.0.0
   */
  share(options: ShareOptions): Promise<ShareResult>;
}
