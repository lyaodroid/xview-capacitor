import { registerPlugin } from '@capacitor/core';

import type { ScreenControlPlugin } from './definitions';

const ScreenControl = registerPlugin<ScreenControlPlugin>('ScreenControl');

export * from './definitions';
export { ScreenControl };
