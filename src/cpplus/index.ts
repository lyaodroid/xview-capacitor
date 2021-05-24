import { registerPlugin } from '@capacitor/core';

import type { CPPlusPlugin } from './definitions';

const CPPlus = registerPlugin<CPPlusPlugin>('CPPlus');

export * from './definitions';
export { CPPlus };
