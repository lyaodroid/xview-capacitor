---
title: Alipay Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/alipay/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/alipay/src/definitions.ts
---

## [**`opendocs.alipay`**](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

- [**`opendocs.alipay`**](#opendocsalipay)
- [API](#api)
  - [login(...)](#login)
  - [pay(...)](#pay)
  - [Interfaces](#interfaces)
    - [LoginResult](#loginresult)
    - [PayResult](#payresult)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### login(...)

```typescript
login(options: any) => Promise<LoginResult>
```

Check if an app can be opened with the given URL.

On iOS you must declare the URL schemes you pass to this method by adding
the `LSApplicationQueriesSchemes` key to your app's `Info.plist` file.
Learn more about configuring
[`Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist).

This method always returns false for undeclared schemes, whether or not an
appropriate app is installed. To learn more about the key, see
[LSApplicationQueriesSchemes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes).

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;<a href="#loginresult">LoginResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### pay(...)

```typescript
pay(options: any) => Promise<PayResult>
```

Open an app with the given URL.

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;<a href="#payresult">PayResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### LoginResult

| Prop      | Type                | Description | Since |
| --------- | ------------------- | ----------- | ----- |
| **`uid`** | <code>string</code> | The 返回唯一值.  | 1.0.0 |


#### PayResult

| Prop        | Type                 | Description                   | Since |
| ----------- | -------------------- | ----------------------------- | ----- |
| **`value`** | <code>boolean</code> | The app version. 返回成功失败       | 1.0.0 |
| **`code`**  | <code>string</code>  | The app version. 返回状态码 9000成功 | 1.0.0 |

</docgen-api>