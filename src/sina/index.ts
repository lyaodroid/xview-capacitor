import { registerPlugin } from '@capacitor/core';

import type { SinaPlugin } from './definitions';

const Sina = registerPlugin<SinaPlugin>('Sina');

export * from './definitions';
export { Sina };
