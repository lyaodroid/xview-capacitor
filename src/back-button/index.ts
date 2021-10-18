import { registerPlugin } from '@capacitor/core';

import type { BackButtonPlugin } from './definitions';

const BackButton = registerPlugin<BackButtonPlugin>('BackButton');

export * from './definitions';
export { BackButton };
