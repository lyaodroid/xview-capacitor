import type { PluginListenerHandle } from '@capacitor/core';


export interface BackButtonPlugin {


  /**
   * Remove all native listeners for this plugin
   *
   * @since 1.0.0
   */
  removeAllListeners(): Promise<void>;
}


