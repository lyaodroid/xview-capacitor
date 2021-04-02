import { registerPlugin } from '@capacitor/core';

import type { MediaPlugin } from './definitions';

const Media = registerPlugin<MediaPlugin>('Media');

export * from './definitions';
export { Media };
