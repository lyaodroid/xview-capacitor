---
title: Mobile Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/mobile/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/mobile/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`areNotificationsEnabled(...)`](#arenotificationsenabled)
* [`openNotification(...)`](#opennotification)
* [`isLocationServiceEnabled(...)`](#islocationserviceenabled)
* [`openLocationService(...)`](#openlocationservice)
* [`requestPermissions(...)`](#requestpermissions)
* [`toPermissionSetting(...)`](#topermissionsetting)
* [`getAppsInfo(...)`](#getappsinfo)
* [`isAppInstalled(...)`](#isappinstalled)
* [`cleanCache(...)`](#cleancache)
* [`getCacheSize(...)`](#getcachesize)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### areNotificationsEnabled(...)

```typescript
areNotificationsEnabled(options?: any) => Promise<{ value: boolean; }>
```

检查通知是否 打开 推送使用

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### openNotification(...)

```typescript
openNotification(options?: any) => void
```

跳转打开通知 返回false 因为Android 跳转适配 失败， 提示需要手动去打开 提供打开方案链接

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Since:** 1.0.0

--------------------


### isLocationServiceEnabled(...)

```typescript
isLocationServiceEnabled(options?: any) => Promise<{ value: boolean; }>
```

检查位置是否打开

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### openLocationService(...)

```typescript
openLocationService(options?: any) => void
```

打开定位总开关

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Since:** 1.0.0

--------------------


### requestPermissions(...)

```typescript
requestPermissions(permissions: any[]) => Promise<PermissionState>
```

为了兼容老项目中 请求权限方法
为了兼容 Android 和 iOS 逻辑不相同时
执行相同的逻辑
检查权限 通过代码动态检查

| Param             | Type               |
| ----------------- | ------------------ |
| **`permissions`** | <code>any[]</code> |

**Returns:** <code>Promise&lt;<a href="#permissionstate">PermissionState</a>&gt;</code>

**Since:** 1.0.0

--------------------


### toPermissionSetting(...)

```typescript
toPermissionSetting(options?: any) => Promise<void>
```

如果权限被拒绝不再询问 提示 必须跳转系统设置去开启，检查同 通知一样
配合 @method requestPermissions 使用

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Since:** 1.0.0

--------------------


### getAppsInfo(...)

```typescript
getAppsInfo(options?: any) => Promise<{ values: any[]; }>
```

获取手机上所有APP 是否过滤掉系统APP
暂未使用 可能需要iOS 统一

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;{ values: any[]; }&gt;</code>

**Since:** 1.0.0

--------------------


### isAppInstalled(...)

```typescript
isAppInstalled(options?: any) => Promise<{ value: boolean; }>
```

判断 应用是否安装
Android {包名 appID / packageName}
ios { bundleId 可能需要 提前配置 到 plist文件 中}

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### cleanCache(...)

```typescript
cleanCache(options?: any) => Promise<void>
```

清除缓存

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Since:** 1.0.0

--------------------


### getCacheSize(...)

```typescript
getCacheSize(options?: any) => Promise<{ value: string; }>
```

获取缓存 1 MB以内 kb 显示

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

**Since:** 1.0.0

--------------------


### Type Aliases


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>