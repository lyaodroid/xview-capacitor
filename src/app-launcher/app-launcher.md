---
title: App Launcher Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/app-launcher/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/app-launcher/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`canOpenUrl(...)`](#canopenurl)
* [`openUrl(...)`](#openurl)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### canOpenUrl(...)

```typescript
canOpenUrl(options: CanOpenURLOptions) => Promise<CanOpenURLResult>
```

Check if an app can be opened with the given URL.

On iOS you must declare the URL schemes you pass to this method by adding
the `LSApplicationQueriesSchemes` key to your app's `Info.plist` file.
Learn more about configuring
[`Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist).

This method always returns false for undeclared schemes, whether or not an
appropriate app is installed. To learn more about the key, see
[LSApplicationQueriesSchemes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes).

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#canopenurloptions">CanOpenURLOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#canopenurlresult">CanOpenURLResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### openUrl(...)

```typescript
openUrl(options: OpenURLOptions) => Promise<OpenURLResult>
```

Open an app with the given URL.

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#openurloptions">OpenURLOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#openurlresult">OpenURLResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### CanOpenURLResult

| Prop        | Type                 |
| ----------- | -------------------- |
| **`value`** | <code>boolean</code> |


#### CanOpenURLOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |


#### OpenURLResult

| Prop            | Type                 |
| --------------- | -------------------- |
| **`completed`** | <code>boolean</code> |


#### OpenURLOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

</docgen-api>