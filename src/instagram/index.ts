import { registerPlugin } from '@capacitor/core';

import type { InstagramPlugin } from './definitions';

const Instagram = registerPlugin<InstagramPlugin>('Instagram');

export * from './definitions';
export { Instagram };
