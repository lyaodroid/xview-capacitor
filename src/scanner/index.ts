import { registerPlugin } from '@capacitor/core';

import type { ScannerPlugin } from './definitions';

const Scanner = registerPlugin<ScannerPlugin>('Scanner');

export * from './definitions';
export { Scanner };
