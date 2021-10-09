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
   * 图片 链接 视频
   * 
   * Instagram 图片
   *
   * @since 1.0.0
   */

  share(options: ShareMedia): Promise<void>;
}
