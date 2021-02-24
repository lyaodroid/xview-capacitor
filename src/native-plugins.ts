import { registerPlugin } from "@capacitor/core";

import type { AppPlugin } from "./definitions";
import type { DevicePlugin } from "./definitions";

const App = registerPlugin<AppPlugin>("App", {
  web: () => import("./web/app").then((m) => new m.AppWeb()),
});

export { App };

const Device = registerPlugin<DevicePlugin>("Device", {
  web: () => import("./web/device").then((m) => new m.DeviceWeb()),
});

export { Device };