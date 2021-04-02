import { registerPlugin } from '@capacitor/core';

import type { AliPayPlugin } from './definitions';

const AliPay = registerPlugin<AliPayPlugin>('AliPay');

export * from './definitions';
export { AliPay };
