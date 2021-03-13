import { WebPlugin, PluginListenerHandle } from '@capacitor/core';

import type {
  HideOptions,
  ShowOptions,
  SplashScreenPlugin,
  SplashListener,
} from './definitions';

export class SplashScreenWeb extends WebPlugin implements SplashScreenPlugin {
  async show(_options?: ShowOptions): Promise<void> {
    return undefined;
  }

  async hide(_options?: HideOptions): Promise<void> {
    return undefined;
  }

  addListener(
    _eventName: string,
    _listenerFunc: SplashListener
  ): Promise<PluginListenerHandle> & PluginListenerHandle {
    throw this.unimplemented("Not implemented on web.");
  }

  async removeAllListeners(): Promise<void> {}
}
