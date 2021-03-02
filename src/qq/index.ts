import { registerPlugin } from '@capacitor/core';

import type { QQPlugin } from './definitions';

const QQ = registerPlugin<QQPlugin>('QQ');

export * from './definitions';
export { QQ };
