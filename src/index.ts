import { registerPlugin } from "@capacitor/core";

/**
 * -----------------------------------------------------------------------------
 */
import type { AppPlugin } from "./app/definitions";

const App = registerPlugin<AppPlugin>("App", {
  web: () => import("./app/web").then((m) => new m.AppWeb()),
});

export * from "./app/definitions";
export { App };

/**
 * -----------------------------------------------------------------------------
 */
import type { DevicePlugin } from "./device/definitions";

const Device = registerPlugin<DevicePlugin>("Device", {
  web: () => import("./device/web").then((m) => new m.DeviceWeb()),
});

export * from "./device/definitions";
export { Device };

/**
 * -----------------------------------------------------------------------------
 */
import type { AppLauncherPlugin } from './app-launcher/definitions';

const AppLauncher = registerPlugin<AppLauncherPlugin>('AppLauncher', {
  web: () => import('./app-launcher/web').then(m => new m.AppLauncherWeb()),
});

export * from "./app-launcher/definitions";
export { AppLauncher };

/**
 * -----------------------------------------------------------------------------
 */
import type { ClipboardPlugin } from './clipboard/definitions';

const Clipboard = registerPlugin<ClipboardPlugin>('Clipboard', {
  web: () => import('./clipboard/web').then(m => new m.ClipboardWeb()),
});

export * from './clipboard/definitions';
export { Clipboard };

/**
 * -----------------------------------------------------------------------------
 */
import type { KeyboardPlugin } from './keyboard/definitions';

const Keyboard = registerPlugin<KeyboardPlugin>('Keyboard');

export * from './keyboard/definitions';
export { Keyboard };

/**
 * -----------------------------------------------------------------------------
 */
import type { NetworkPlugin } from './network/definitions';

const Network = registerPlugin<NetworkPlugin>('Network', {
  web: () => import('./network/web').then(m => new m.NetworkWeb()),
});

export * from './network/definitions';
export { Network };

/**
 * -----------------------------------------------------------------------------
 */