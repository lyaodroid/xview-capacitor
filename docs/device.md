---
title: Device Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/device/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/device/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`getInfo()`](#getinfo)
* [`getBatteryInfo()`](#getbatteryinfo)
* [`getLanguageCode()`](#getlanguagecode)
* [`getScreenRelatedInfo()`](#getscreenrelatedinfo)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getInfo()

```typescript
getInfo() => Promise<DeviceInfo>
```

Return information about the underlying device/os/platform.

**Returns:** <code>Promise&lt;<a href="#deviceinfo">DeviceInfo</a>&gt;</code>

**Since:** 1.0.0

--------------------


### getBatteryInfo()

```typescript
getBatteryInfo() => Promise<BatteryInfo>
```

Return information about the battery.

**Returns:** <code>Promise&lt;<a href="#batteryinfo">BatteryInfo</a>&gt;</code>

**Since:** 1.0.0

--------------------


### getLanguageCode()

```typescript
getLanguageCode() => Promise<GetLanguageCodeResult>
```

Get the device's current language locale code.

**Returns:** <code>Promise&lt;<a href="#getlanguagecoderesult">GetLanguageCodeResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### getScreenRelatedInfo()

```typescript
getScreenRelatedInfo() => Promise<ScreenRelatedInfo>
```

可用（并不是 物理尺寸） 显示大小的绝对宽度（以像素为单位）。可用显示大小的绝对高度（以像素为单位）屏幕密度表示为每英寸点数。显示器的逻辑密度。显示屏上显示的字体缩放系数。

**Returns:** <code>Promise&lt;<a href="#screenrelatedinfo">ScreenRelatedInfo</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### DeviceInfo

| Prop                  | Type                                                        | Description                                                                                                                                  | Since |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`name`**            | <code>string</code>                                         | The name of the device. For example, "John's iPhone". This is only supported on iOS and Android 7.1 or above.                                | 1.0.0 |
| **`model`**           | <code>string</code>                                         | The device model. For example, "iPhone".                                                                                                     | 1.0.0 |
| **`platform`**        | <code>'ios' \| 'android' \| 'web'</code>                    | The device platform (lowercase).                                                                                                             | 1.0.0 |
| **`uuid`**            | <code>string</code>                                         | The UUID of the device as available to the app. This identifier may change on modern mobile platforms that only allow per-app install UUIDs. | 1.0.0 |
| **`operatingSystem`** | <code><a href="#operatingsystem">OperatingSystem</a></code> | The operating system of the device.                                                                                                          | 1.0.0 |
| **`osVersion`**       | <code>string</code>                                         | The version of the device OS.                                                                                                                | 1.0.0 |
| **`manufacturer`**    | <code>string</code>                                         | The manufacturer of the device.                                                                                                              | 1.0.0 |
| **`isVirtual`**       | <code>boolean</code>                                        | Whether the app is running in a simulator/emulator.                                                                                          | 1.0.0 |
| **`memUsed`**         | <code>number</code>                                         | Approximate memory used by the current app, in bytes. Divide by 1048576 to get the number of MBs used.                                       | 1.0.0 |
| **`diskFree`**        | <code>number</code>                                         | How much free disk space is available on the the normal data storage. path for the os, in bytes                                              | 1.0.0 |
| **`diskTotal`**       | <code>number</code>                                         | The total size of the normal data storage path for the OS, in bytes.                                                                         | 1.0.0 |
| **`webViewVersion`**  | <code>string</code>                                         | The web view browser version                                                                                                                 | 1.0.0 |


#### BatteryInfo

| Prop               | Type                 | Description                                                       | Since |
| ------------------ | -------------------- | ----------------------------------------------------------------- | ----- |
| **`batteryLevel`** | <code>number</code>  | A percentage (0 to 1) indicating how much the battery is charged. | 1.0.0 |
| **`isCharging`**   | <code>boolean</code> | Whether the device is charging.                                   | 1.0.0 |


#### GetLanguageCodeResult

| Prop        | Type                | Description                  | Since |
| ----------- | ------------------- | ---------------------------- | ----- |
| **`value`** | <code>string</code> | Two character language code. | 1.0.0 |


#### ScreenRelatedInfo

| Prop               | Type                | Description         | Since |
| ------------------ | ------------------- | ------------------- | ----- |
| **`width`**        | <code>number</code> | 转换后的 可用宽度 前端可以直接使用  | 1.0.0 |
| **`height`**       | <code>number</code> | 转换后的 可用 高度 前端可以直接使用 | 1.0.0 |
| **`widthPixels`**  | <code>number</code> | 可用的宽度 在原生界面上的像素单位   | 1.0.0 |
| **`heightPixels`** | <code>number</code> | 可用的高度 在原生界面上的像素单位   | 1.0.0 |
| **`density`**      | <code>number</code> | 原生密度值               | 1.0.0 |


### Type Aliases


#### OperatingSystem

<code>'ios' | 'android' | 'windows' | 'mac' | 'unknown'</code>

</docgen-api>