import { registerPlugin } from '@capacitor/core';

import type { UpdatePlugin } from './definitions';

const Update = registerPlugin<UpdatePlugin>('Update');

export * from './definitions';
export { Update };
