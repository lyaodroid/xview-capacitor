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
import type { SharePlugin } from './share/definitions';

const Share = registerPlugin<SharePlugin>('Share', {
  web: () => import('./share/web').then(m => new m.ShareWeb()),
});

export * from './share/definitions';
export { Share };

/**
 * -----------------------------------------------------------------------------
 */
import type { StoragePlugin } from './storage/definitions';

const Storage = registerPlugin<StoragePlugin>('Storage', {
  web: () => import('./storage/web').then(m => new m.StorageWeb()),
});

export * from './storage/definitions';
export { Storage };

/**
 * -----------------------------------------------------------------------------
 */
import type { StatusBarPlugin } from './status-bar/definitions';

const StatusBar = registerPlugin<StatusBarPlugin>('StatusBar');

export * from './status-bar/definitions';
export { StatusBar };

/**
 * -----------------------------------------------------------------------------
 */
import type { SplashScreenPlugin } from './splash-screen/definitions';

const SplashScreen = registerPlugin<SplashScreenPlugin>('SplashScreen', {
  web: () => import('./splash-screen/web').then(m => new m.SplashScreenWeb()),
});

export * from './splash-screen/definitions';
export { SplashScreen };

/**
 * -----------------------------------------------------------------------------
 */

import type { FilesystemPlugin } from './filesystem/definitions';

const Filesystem = registerPlugin<FilesystemPlugin>('Filesystem', {
  web: () => import('./filesystem/web').then(m => new m.FilesystemWeb()),
});

export * from './filesystem/definitions';
export { Filesystem };

/**
 * -----------------------------------------------------------------------------
 */
import type { CameraPlugin ,PermissionStatus} from './camera/definitions';

const Camera = registerPlugin<CameraPlugin>('Camera', {
  web: () => import('./camera/web').then(m => new m.CameraWeb()),
});

export * from './camera/definitions';
export { Camera , PermissionStatus };