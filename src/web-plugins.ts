import { Plugins, registerPlugin } from "@capacitor/core";
import { AliPayWeb } from "./web/aliPay";
import { ALocationWeb } from "./web/alocation";
import { AudioWeb } from "./web/audio";
import { BLocationWeb } from "./web/blocation";
import { ClipboardWeb } from "./web/clipboard";
import { ContactsWeb } from "./web/contacts";
import { DeviceWeb } from "./web/device";
import { HotCodePushWeb } from "./web/hot-code-push";
import { HttpWeb } from "./web/http";
import { MediaWeb } from "./web/media";
import { MobileWeb } from "./web/mobile";
import { NativeAudioWeb } from "./web/native-audio";
import { NetworkWeb } from "./web/network";
import { PushNotifyWeb } from "./web/push-notify";
import { QQWeb } from "./web/qq";
import { ScannerWeb } from "./web/scanner";
import { SpeechWeb } from "./web/speech";
import { StorageWeb } from "./web/storage";
import { CapacitorVideoPlayerWeb } from "./web/video-player";
import { WebviewOverlayWeb } from "./web/webview-overlay";
import { WeChatWeb } from "./web/wechat";
import { WifiWeb } from "./web/wifi";
import { XViewWeb } from "./web/xview";

export { Device };
export { StatusBar };
export { Keyboard };
export { Network };
export { Clipboard };
export { Storage };
export { XView };
export { AliPay };
export { WeChat };
export { QQ };
export { PushNotify };
export { ALocation };
export { BLocation };
export { Speech };
export { Http };
export { Scanner };
export { Media };
export { Mobile };
export { NativeAudio };
export { CapacitorVideoPlayer };
export { WebviewOverlay };
export { Wifi };
export { Contacts };
export { Audio };
export { HotCodePush };

/**
 * 官方维护 插件
 */
const Device = registerPlugin("Device", {
    android: Plugins.Device,
    ios: Plugins.Device,
    web: new DeviceWeb(),
}).getImplementation();


const StatusBar = registerPlugin("StatusBar", {
    android: Plugins.StatusBar,
    ios: Plugins.StatusBar,
}).getImplementation();


const Keyboard = registerPlugin("Keyboard", {
    android: Plugins.Keyboard,
    ios: Plugins.Keyboard,
}).getImplementation();


const Network = registerPlugin("Network", {
    android: Plugins.Network,
    ios: Plugins.Network,
    web: new NetworkWeb(),
}).getImplementation();


const Clipboard = registerPlugin("Clipboard", {
    android: Plugins.Clipboard,
    ios: Plugins.Clipboard,
    web: new ClipboardWeb(),
}).getImplementation();


const Storage = registerPlugin("Storage", {
    android: Plugins.Storage,
    ios: Plugins.Storage,
    web: new StorageWeb(),
}).getImplementation();


/**
 * 临时扩展小功能插件
 */

const XView = registerPlugin("Storage", {
    android: Plugins.XView,
    ios: Plugins.XView,
    web: new XViewWeb(),
}).getImplementation();


/**
 * 第三方sdk 插件
 */

const AliPay = registerPlugin("AliPay", {
    android: Plugins.AliPay,
    ios: Plugins.AliPay,
    web: new AliPayWeb(),
}).getImplementation();


const WeChat = registerPlugin("WeChat", {
    android: Plugins.WeChat,
    ios: Plugins.WeChat,
    web: new WeChatWeb(),
}).getImplementation();


const QQ = registerPlugin("WeChat", {
    android: Plugins.QQ,
    ios: Plugins.QQ,
    web: new QQWeb(),
}).getImplementation();


const PushNotify = registerPlugin("PushNotify", {
    android: Plugins.PushNotify,
    ios: Plugins.PushNotify,
    web: new PushNotifyWeb(),
}).getImplementation();


const ALocation = registerPlugin("ALocation", {
    android: Plugins.ALocation,
    ios: Plugins.ALocation,
    web: new ALocationWeb(),
}).getImplementation();


const BLocation = registerPlugin("BLocation", {
    android: Plugins.BLocation,
    ios: Plugins.BLocation,
    web: new BLocationWeb(),
}).getImplementation();


const Speech = registerPlugin("Speech", {
    android: Plugins.Speech,
    ios: Plugins.Speech,
    web: new SpeechWeb(),
}).getImplementation();


/**
 * 扩展 插件
 */

const Http = registerPlugin("Http", {
    android: Plugins.Http,
    ios: Plugins.Http,
    web: new HttpWeb(),
}).getImplementation();


const Scanner = registerPlugin("Scanner", {
    android: Plugins.Scanner,
    ios: Plugins.Scanner,
    web: new ScannerWeb(),
}).getImplementation();


const Media = registerPlugin("Media", {
    android: Plugins.Media,
    ios: Plugins.Media,
    web: new MediaWeb(),
}).getImplementation();


const Mobile = registerPlugin("Mobile", {
    android: Plugins.Mobile,
    ios: Plugins.Mobile,
    web: new MobileWeb(),
}).getImplementation();


const NativeAudio = registerPlugin("NativeAudio", {
    android: Plugins.NativeAudio,
    ios: Plugins.NativeAudio,
    web: new NativeAudioWeb(),
}).getImplementation();


const CapacitorVideoPlayer = registerPlugin("CapacitorVideoPlayer", {
    android: Plugins.CapacitorVideoPlayer,
    ios: Plugins.CapacitorVideoPlayer,
    web: new CapacitorVideoPlayerWeb(),
}).getImplementation();


const WebviewOverlay = registerPlugin("WebviewOverlay", {
    android: Plugins.WebviewOverlay,
    ios: Plugins.WebviewOverlay,
    web: new WebviewOverlayWeb(),
}).getImplementation();


const Wifi = registerPlugin("Wifi", {
    android: Plugins.Wifi,
    ios: Plugins.Wifi,
    web: new WifiWeb(),
}).getImplementation();


const Contacts = registerPlugin("Contacts", {
    android: Plugins.Contacts,
    ios: Plugins.Contacts,
    web: new ContactsWeb(),
}).getImplementation();


const Audio = registerPlugin("Audio", {
    android: Plugins.Audio,
    ios: Plugins.Audio,
    web: new AudioWeb(),
}).getImplementation();


const HotCodePush = registerPlugin("HotCodePush", {
    android: Plugins.HotCodePush,
    ios: Plugins.HotCodePush,
    web: new HotCodePushWeb(),
}).getImplementation();


