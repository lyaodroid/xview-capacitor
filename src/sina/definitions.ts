import { LoginResult, ShareMedia } from "../common";

export interface SinaPlugin {
  /**
   * qq 登录 应用 appId 应用 appKey
   *
   * @since 1.0.0
   */
  login(options: { appId: string, appKey: string }): Promise<LoginResult>;

  /**
   * qq 分享 catch (error) error.code == "1" 取消分享
   * 分享失败 状态码 查文档
   *
   * @since 1.0.0
   */

  share(options: ShareMedia): Promise<void>;
}
