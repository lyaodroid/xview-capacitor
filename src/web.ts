import { WebPlugin } from '@capacitor/core';
import { XViewPlugin } from './definitions';

export class XViewWeb extends WebPlugin implements XViewPlugin {
  constructor() {
    super({
      name: 'XView',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const XView = new XViewWeb();

export { XView };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(XView);
