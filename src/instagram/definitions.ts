import { LoginResult, ShareMedia } from "../common";

export interface InstagramPlugin {
  /**
   * 
   *
   * @since 1.0.0
   */
  login(options: { appId: string; appKey: string }): Promise<LoginResult>;

  /**
   * 
   * 
   *
   * @since 1.0.0
   */

  share(options: ShareMedia): Promise<void>;
}
