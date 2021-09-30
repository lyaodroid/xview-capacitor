import { LoginResult, ShareMedia } from "../common";

export interface FacebookPlugin {
  /**
   * 
   *
   * @since 1.0.0
   */
  login(options: { appId: string; appKey: string }): Promise<LoginResult>;

  /**
   * 
   * 分享失败 状态码 查文档
   *
   * @since 1.0.0
   */

  share(options: ShareMedia): Promise<void>;
}
