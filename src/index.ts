import { Plugins, registerPlugin } from "@capacitor/core";
import { WifiWeb } from "./web/wifi";

const Wifi = registerPlugin("Wifi", {
    android: Plugins.Wifi,
    ios: Plugins.Wifi,
    web: new WifiWeb(),
}).getImplementation();

export { Wifi };

const ApLink = registerPlugin("ApLink", {
    android: Plugins.ApLink,
    ios: Plugins.ApLink,
}).getImplementation();

export { ApLink };

const ApWifi = registerPlugin("ApWifi", {
    android: Plugins.ApWifi,
    ios: Plugins.ApWifi,
}).getImplementation();

export { ApWifi };

const CPPlus = registerPlugin("CPPlus", {
    android: Plugins.CPPlus,
    ios: Plugins.CPPlus,
}).getImplementation();

export { CPPlus };