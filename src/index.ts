import { registerPlugin, Plugins } from "@capacitor/core";
import { DeviceWeb } from "./web/device";
import { NetworkWeb } from "./web/network";
import { ClipboardWeb } from "./web/clipboard";
import { StorageWeb } from "./web/storage";
import { XViewWeb } from "./web/xview";
import { AliPayWeb } from "./web/aliPay";
import { WeChatWeb } from "./web/wechat";
import { QQWeb } from "./web/qq";
import { PushNotifyWeb } from "./web/push-notify";
import { SpeechWeb } from "./web/speech";

import { HttpWeb } from "./web/http";
import { CapacitorVideoPlayerWeb } from "./web/video-player";
import { ALocationWeb } from "./web/alocation";
import { BLocationWeb } from "./web/blocation";
import { NativeAudioWeb } from "./web/native-audio";
import { WebviewOverlayWeb } from "./web/webview-overlay";
import { WifiWeb } from "./web/wifi";
import { ScannerWeb } from "./web/scanner";
import { MediaWeb } from "./web/media";
import { MobileWeb } from "./web/mobile";
import { ContactsWeb } from "./web/contacts";
import { AudioWeb } from "./web/audio";
import { HotCodePushWeb } from "./web/hot-code-push";

export * from "./xview-plugin-definitions";

/**
 * 官方维护 插件
 */
const Device = registerPlugin("Device", {
    android: Plugins.Device,
    ios: Plugins.Device,
    web: new DeviceWeb(),
}).getImplementation();

export { Device };

const StatusBar = registerPlugin("StatusBar", {
    android: Plugins.StatusBar,
    ios: Plugins.StatusBar,
}).getImplementation();

export { StatusBar };

const Keyboard = registerPlugin("Keyboard", {
    android: Plugins.Keyboard,
    ios: Plugins.Keyboard,
}).getImplementation();

export { Keyboard };

const Network = registerPlugin("Network", {
    android: Plugins.Network,
    ios: Plugins.Network,
    web: new NetworkWeb(),
}).getImplementation();

export { Network };

const Clipboard = registerPlugin("Clipboard", {
    android: Plugins.Clipboard,
    ios: Plugins.Clipboard,
    web: new ClipboardWeb(),
}).getImplementation();

export { Clipboard };

const Storage = registerPlugin("Storage", {
    android: Plugins.Storage,
    ios: Plugins.Storage,
    web: new StorageWeb(),
}).getImplementation();

export { Storage };

/**
 * 临时扩展小功能插件
 */

const XView = registerPlugin("Storage", {
    android: Plugins.XView,
    ios: Plugins.XView,
    web: new XViewWeb(),
}).getImplementation();

export { XView };

/**
 * 第三方sdk 插件
 */

const AliPay = registerPlugin("AliPay", {
    android: Plugins.AliPay,
    ios: Plugins.AliPay,
    web: new AliPayWeb(),
}).getImplementation();

export { AliPay };

const WeChat = registerPlugin("WeChat", {
    android: Plugins.WeChat,
    ios: Plugins.WeChat,
    web: new WeChatWeb(),
}).getImplementation();

export { WeChat };

const QQ = registerPlugin("WeChat", {
    android: Plugins.QQ,
    ios: Plugins.QQ,
    web: new QQWeb(),
}).getImplementation();

export { QQ };

const PushNotify = registerPlugin("PushNotify", {
    android: Plugins.PushNotify,
    ios: Plugins.PushNotify,
    web: new PushNotifyWeb(),
}).getImplementation();

export { PushNotify };

const ALocation = registerPlugin("ALocation", {
    android: Plugins.ALocation,
    ios: Plugins.ALocation,
    web: new ALocationWeb(),
}).getImplementation();

export { ALocation };

const BLocation = registerPlugin("BLocation", {
    android: Plugins.BLocation,
    ios: Plugins.BLocation,
    web: new BLocationWeb(),
}).getImplementation();

export { BLocation };

const Speech = registerPlugin("Speech", {
    android: Plugins.Speech,
    ios: Plugins.Speech,
    web: new SpeechWeb(),
}).getImplementation();

export { Speech };

/**
 * 扩展 插件
 */

const Http = registerPlugin("Http", {
    android: Plugins.Http,
    ios: Plugins.Http,
    web: new HttpWeb(),
}).getImplementation();

export { Http };

const Scanner = registerPlugin("Scanner", {
    android: Plugins.Scanner,
    ios: Plugins.Scanner,
    web: new ScannerWeb(),
}).getImplementation();

export { Scanner };

const Media = registerPlugin("Media", {
    android: Plugins.Media,
    ios: Plugins.Media,
    web: new MediaWeb(),
}).getImplementation();

export { Media };

const Mobile = registerPlugin("Mobile", {
    android: Plugins.Mobile,
    ios: Plugins.Mobile,
    web: new MobileWeb(),
}).getImplementation();

export { Mobile };

const NativeAudio = registerPlugin("NativeAudio", {
    android: Plugins.NativeAudio,
    ios: Plugins.NativeAudio,
    web: new NativeAudioWeb(),
}).getImplementation();

export { NativeAudio };

const CapacitorVideoPlayer = registerPlugin("CapacitorVideoPlayer", {
    android: Plugins.CapacitorVideoPlayer,
    ios: Plugins.CapacitorVideoPlayer,
    web: new CapacitorVideoPlayerWeb(),
}).getImplementation();

export { CapacitorVideoPlayer };

const WebviewOverlay = registerPlugin("WebviewOverlay", {
    android: Plugins.WebviewOverlay,
    ios: Plugins.WebviewOverlay,
    web: new WebviewOverlayWeb(),
}).getImplementation();

export { WebviewOverlay };

const Wifi = registerPlugin("Wifi", {
    android: Plugins.Wifi,
    ios: Plugins.Wifi,
    web: new WifiWeb(),
}).getImplementation();

export { Wifi };

const Contacts = registerPlugin("Contacts", {
    android: Plugins.Contacts,
    ios: Plugins.Contacts,
    web: new ContactsWeb(),
}).getImplementation();

export { Contacts };

const Audio = registerPlugin("Audio", {
    android: Plugins.Audio,
    ios: Plugins.Audio,
    web: new AudioWeb(),
}).getImplementation();

export { Audio };

const HotCodePush = registerPlugin("HotCodePush", {
    android: Plugins.HotCodePush,
    ios: Plugins.HotCodePush,
    web: new HotCodePushWeb(),
}).getImplementation();

export { HotCodePush };
