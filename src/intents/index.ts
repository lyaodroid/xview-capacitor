import { registerPlugin } from '@capacitor/core';

import type { IntentsPlugin } from './definitions';

const Intents = registerPlugin<IntentsPlugin>('Intents');

export * from './definitions';
export { Intents };
