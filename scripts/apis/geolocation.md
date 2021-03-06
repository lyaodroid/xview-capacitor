---
title: Geolocation Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/geolocation/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/geolocation/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`getCurrentPosition(...)`](#getcurrentposition)
* [`watchPosition(...)`](#watchposition)
* [`clearWatch(...)`](#clearwatch)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getCurrentPosition(...)

```typescript
getCurrentPosition(options?: PositionOptions) => Promise<Position>
```

Get the current GPS location of the device

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#positionoptions">PositionOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#position">Position</a>&gt;</code>

**Since:** 1.0.0

--------------------


### watchPosition(...)

```typescript
watchPosition(options: PositionOptions, callback: WatchPositionCallback) => CallbackID
```

Set up a watch for location changes. Note that watching for location changes
can consume a large amount of energy. Be smart about listening only when you need to.

| Param          | Type                                                                    |
| -------------- | ----------------------------------------------------------------------- |
| **`options`**  | <code><a href="#positionoptions">PositionOptions</a></code>             |
| **`callback`** | <code><a href="#watchpositioncallback">WatchPositionCallback</a></code> |

**Returns:** <code>string</code>

**Since:** 1.0.0

--------------------


### clearWatch(...)

```typescript
clearWatch(options: ClearWatchOptions) => Promise<void>
```

Clear a given watch

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#clearwatchoptions">ClearWatchOptions</a></code> |

**Since:** 1.0.0

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

Check location permissions

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request location permissions

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### Position

| Prop            | Type                                                                                                                                                                                                                                         | Description                                             | Since |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----- |
| **`timestamp`** | <code>number</code>                                                                                                                                                                                                                          | Creation timestamp for coords                           | 1.0.0 |
| **`coords`**    | <code>{ latitude: number; longitude: number; accuracy: number; country?: string; province?: string; city?: string; district?: string; address?: string; altitudeAccuracy: number; altitude: number; speed: number; heading: number; }</code> | The GPS coordinates along with the accuracy of the data | 1.0.0 |


#### PositionOptions

| Prop                     | Type                 | Description                                                                                | Default            | Since |
| ------------------------ | -------------------- | ------------------------------------------------------------------------------------------ | ------------------ | ----- |
| **`enableHighAccuracy`** | <code>boolean</code> | High accuracy mode (such as GPS, if available)                                             | <code>false</code> | 1.0.0 |
| **`timeout`**            | <code>number</code>  | The maximum wait time in milliseconds for location updates                                 | <code>10000</code> | 1.0.0 |
| **`maximumAge`**         | <code>number</code>  | The maximum age in milliseconds of a possible cached position that is acceptable to return | <code>0</code>     | 1.0.0 |


#### ClearWatchOptions

| Prop     | Type                                              |
| -------- | ------------------------------------------------- |
| **`id`** | <code><a href="#callbackid">CallbackID</a></code> |


#### PermissionStatus

| Prop           | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| **`location`** | <code><a href="#permissionstate">PermissionState</a></code> |


### Type Aliases


#### WatchPositionCallback

<code>(position: <a href="#position">Position</a>, err?: any): void</code>


#### CallbackID

<code>string</code>


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>