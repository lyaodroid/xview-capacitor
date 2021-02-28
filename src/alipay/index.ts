import { registerPlugin } from '@capacitor/core';

import type { AliPayPlugin } from './definitions';

const AliPayPlugin = registerPlugin<AliPayPlugin>('AliPayPlugin');

export * from './definitions';
export { AliPayPlugin };
