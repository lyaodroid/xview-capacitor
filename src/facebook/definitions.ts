import { LoginResult, ShareMedia } from "../common";

export interface FacebookPlugin {
  /**
   * 用户id：uid（6.2以前用id）
   *first_name：first_name
   *last_name：last_name
   *middle_name：middle_name
   *name：name
   *linkUri：linkUri
   *头像：iconurl（6.2以前用profilePictureUri）
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
