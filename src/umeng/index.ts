import { registerPlugin } from '@capacitor/core';

import type { UMCommonPlugin } from './definitions';

const UMCommon = registerPlugin<UMCommonPlugin>('UMCommon');

export * from './definitions';
export { UMCommon };
