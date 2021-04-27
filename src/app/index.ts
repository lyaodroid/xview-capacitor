import { registerPlugin } from '@capacitor/core';

import type { AppPlugin } from './definitions';

const App = registerPlugin<AppPlugin>('App');

export * from './definitions';
export { App };
