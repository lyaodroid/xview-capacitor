import { registerPlugin } from '@capacitor/core';

import type { ECommerceLivePlayerPlugin } from './definitions';

const ECommerceLivePlayer = registerPlugin<ECommerceLivePlayerPlugin>('ECommerceLivePlayer', {
  web: () => import('./web').then(m => new m.ECommerceLivePlayerWeb()),
});

export * from './definitions';
export { ECommerceLivePlayer };
