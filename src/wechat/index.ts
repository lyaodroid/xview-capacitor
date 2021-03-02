import { registerPlugin } from '@capacitor/core';

import type { WeChatPlugin } from './definitions';

const WeChat = registerPlugin<WeChatPlugin>('WeChat');

export * from './definitions';
export { WeChat };
