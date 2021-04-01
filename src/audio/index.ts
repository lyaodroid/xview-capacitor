import { registerPlugin } from '@capacitor/core';

import type { AudioPlugin } from './definitions';

const Audio = registerPlugin<AudioPlugin>('Audio');

export * from './definitions';
export { Audio };
