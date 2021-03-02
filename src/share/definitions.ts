
import type { ShareOptions ,ShareResult} from "./definitions-common"
export interface SharePlugin {
  /**
   * Show a Share modal for sharing content with other apps
   *
   * @since 1.0.0
   */
  share(options: ShareOptions): Promise<ShareResult>;
}
