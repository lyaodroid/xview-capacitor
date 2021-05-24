import { registerPlugin } from "@capacitor/core";
import type { ApWifiPlugin } from "./definitions";


const ApWifi = registerPlugin<ApWifiPlugin>("ApWifi");

export * from "./definitions";
export { ApWifi };

