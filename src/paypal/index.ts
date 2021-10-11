import { registerPlugin } from '@capacitor/core';

import type { PayPalPlugin } from './definitions';

const PayPal = registerPlugin<PayPalPlugin>('PayPal');

export * from './definitions';
export { PayPal };
