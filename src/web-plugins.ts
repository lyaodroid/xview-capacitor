import { Plugins, registerPlugin } from "@capacitor/core";
import { DeviceWeb } from "./web/device";
import { XViewWeb } from "./web/xview";

export { Device };
export { XView };
export { HotCodePush };
export { Permissions };
export { File };


const File = registerPlugin("File", {
    android: Plugins.File,
    ios: Plugins.File,
}).getImplementation();
/**
 * 官方维护 插件
 */
const Device = registerPlugin("Device", {
    android: Plugins.Device,
    ios: Plugins.Device,
    web: new DeviceWeb(),
}).getImplementation();

/**
 * 官方维护 插件
 */
const Permissions = registerPlugin("Permissions", {
    android: Plugins.Permissions,
    ios: Plugins.Permissions
}).getImplementation();
/**
 * 临时扩展小功能插件
 */

const XView = registerPlugin("XView", {
    android: Plugins.XView,
    ios: Plugins.XView,
    web: new XViewWeb(),
}).getImplementation();

const HotCodePush = registerPlugin("HotCodePush", {
    android: Plugins.HotCodePush,
    ios: Plugins.HotCodePush,
}).getImplementation();
