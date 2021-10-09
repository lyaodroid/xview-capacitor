import { ShareMedia } from "../common";

export interface TwitterPlugin {
  /**
   * 必须先授权成功才能分享
   * 
   * @since 1.0.0
   */
  auth(options: { appId: string; appKey: string }): Promise<any>;

  /**
   * 
   * 只能分享 文字 图片  图文
   *
   * @since 1.0.0
   */

  share(options: ShareMedia): Promise<void>;
}
