import { registerPlugin } from '@capacitor/core';

import type { FacebookPlugin } from './definitions';

const Facebook = registerPlugin<FacebookPlugin>('Facebook');

export * from './definitions';
export { Facebook };
