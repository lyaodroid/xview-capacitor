import { registerPlugin } from '@capacitor/core';

import type { TwitterPlugin } from './definitions';

const Twitter = registerPlugin<TwitterPlugin>('Twitter');

export * from './definitions';
export { Twitter };
