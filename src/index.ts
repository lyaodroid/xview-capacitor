import { registerPlugin } from "@capacitor/core";

import type { AppPlugin } from "./app/definitions";
import type { DevicePlugin } from "./device/definitions";

export * from "./app/definitions";
export * from "./device/definitions";

const App = registerPlugin<AppPlugin>("App", {
  web: () => import("./app/web").then((m) => new m.AppWeb()),
});

export { App };

const Device = registerPlugin<DevicePlugin>("Device", {
  web: () => import("./device/web").then((m) => new m.DeviceWeb()),
});

export { Device };

