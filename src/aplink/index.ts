import { registerPlugin } from '@capacitor/core';

import type { ApLinkPlugin } from './definitions';

const ApLink = registerPlugin<ApLinkPlugin>('ApLink');

export * from './definitions';
export { ApLink };
