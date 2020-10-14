import { WebPlugin } from '@capacitor/core';
import { UpdatePlugin, UpdateOption, UpdateProgressCallback } from '../xview-plugin-definitions';

export class UpdateWeb extends WebPlugin implements UpdatePlugin {
  constructor() {
    super({
      name: 'Update',
      platforms: ['web']
    });
  }
  hotUpdate( options: UpdateOption): Promise<void> {
    throw new Error("Method not implemented.");
  }
  restartApp(options?: any): void {
    throw new Error("Method not implemented.");
  }
  openAppStore(options?: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
  apkDownloadUpdate(options: UpdateOption, progress: UpdateProgressCallback): string {
    throw new Error("Method not implemented.");
  }
  async backgroundDownload(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async getAppInfo(): Promise<import("../xview-plugin-definitions").UpdateAppInfo> {
    throw new Error("Method not implemented.");
  }
  

}

const Update = new UpdateWeb();

export { Update };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Update);
