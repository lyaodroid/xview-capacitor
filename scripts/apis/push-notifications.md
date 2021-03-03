---
title: Push Notifications Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/push-notifications/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/push-notifications/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`register()`](#register)
* [`getDeliveredNotifications()`](#getdeliverednotifications)
* [`removeDeliveredNotifications(...)`](#removedeliverednotifications)
* [`removeAllDeliveredNotifications()`](#removealldeliverednotifications)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [`addListener('registration', ...)`](#addlistenerregistration-)
* [`addListener('registrationError', ...)`](#addlistenerregistrationerror-)
* [`addListener('pushNotificationReceived', ...)`](#addlistenerpushnotificationreceived-)
* [`addListener('pushNotificationActionPerformed', ...)`](#addlistenerpushnotificationactionperformed-)
* [`removeAllListeners()`](#removealllisteners)
* [`unRegister()`](#unregister)
* [`bindAlias(...)`](#bindalias)
* [`unBindAlias(...)`](#unbindalias)
* [`addTags(...)`](#addtags)
* [`getTags()`](#gettags)
* [`deleteTags(...)`](#deletetags)
* [`getPushToken()`](#getpushtoken)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### register()

```typescript
register() => Promise<void>
```

Register the app to receive push notifications.

This method will trigger the `'registration'` event with the push token or
`'registrationError'` if there was a problem. It does prompt the user for
notification permissions, use `requestPermissions()` first.

**Since:** 1.0.0

--------------------


### getDeliveredNotifications()

```typescript
getDeliveredNotifications() => Promise<PushNotificationDeliveredList>
```

Get a list of notifications that are visible on the notifications screen.

**Returns:** <code>Promise&lt;<a href="#pushnotificationdeliveredlist">PushNotificationDeliveredList</a>&gt;</code>

**Since:** 1.0.0

--------------------


### removeDeliveredNotifications(...)

```typescript
removeDeliveredNotifications(delivered: PushNotificationDeliveredList) => Promise<void>
```

Remove the specified notifications from the notifications screen.

| Param           | Type                                                                                    |
| --------------- | --------------------------------------------------------------------------------------- |
| **`delivered`** | <code><a href="#pushnotificationdeliveredlist">PushNotificationDeliveredList</a></code> |

**Since:** 1.0.0

--------------------


### removeAllDeliveredNotifications()

```typescript
removeAllDeliveredNotifications() => Promise<void>
```

Remove all the notifications from the notifications screen.

**Since:** 1.0.0

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

Check permission to receive push notifications.

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request permission to receive push notifications.

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

--------------------


### addListener('registration', ...)

```typescript
addListener(eventName: "registration", listenerFunc: (token: PushNotificationToken) => void) => PluginListenerHandle
```

Called when the push notification registration finishes without problems.

Provides the push notification token.

| Param              | Type                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'registration'</code>                                                                 |
| **`listenerFunc`** | <code>(token: <a href="#pushnotificationtoken">PushNotificationToken</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### addListener('registrationError', ...)

```typescript
addListener(eventName: "registrationError", listenerFunc: (error: any) => void) => PluginListenerHandle
```

Called when the push notification registration finished with problems.

Provides an error with the registration problem.

| Param              | Type                                 |
| ------------------ | ------------------------------------ |
| **`eventName`**    | <code>'registrationError'</code>     |
| **`listenerFunc`** | <code>(error: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### addListener('pushNotificationReceived', ...)

```typescript
addListener(eventName: "pushNotificationReceived", listenerFunc: (notification: PushNotificationSchema) => void) => PluginListenerHandle
```

Called when the device receives a push notification.

| Param              | Type                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pushNotificationReceived'</code>                                                              |
| **`listenerFunc`** | <code>(notification: <a href="#pushnotificationschema">PushNotificationSchema</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### addListener('pushNotificationActionPerformed', ...)

```typescript
addListener(eventName: "pushNotificationActionPerformed", listenerFunc: (notification: PushNotificationActionPerformed) => void) => PluginListenerHandle
```

Called when an action is performed on a push notification.

| Param              | Type                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pushNotificationActionPerformed'</code>                                                                         |
| **`listenerFunc`** | <code>(notification: <a href="#pushnotificationactionperformed">PushNotificationActionPerformed</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => void
```

Remove all native listeners for this plugin.

**Since:** 1.0.0

--------------------


### unRegister()

```typescript
unRegister() => Promise<void>
```

应用退出账号时

**Since:** 1.0.0

--------------------


### bindAlias(...)

```typescript
bindAlias(options: { alias: string; aliasType?: string; }) => Promise<void>
```

绑定 别名 umeng 会用到 aliasType 注意老项目迁移

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ alias: string; aliasType?: string; }</code> |

**Since:** 1.0.0

--------------------


### unBindAlias(...)

```typescript
unBindAlias(options: { alias: string; aliasType?: string; }) => Promise<void>
```

退出账号时使用
解绑 别名 umeng 会用到 aliasType 注意老项目迁移

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ alias: string; aliasType?: string; }</code> |

**Since:** 1.0.0

--------------------


### addTags(...)

```typescript
addTags(options: { value: string; }) => Promise<void>
```

获取标签 value = "tag1,tag2....tags"
添加标签 用 “,”  分割

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Since:** 1.0.0

--------------------


### getTags()

```typescript
getTags() => Promise<{ value: string; }>
```

获取标签 tags = "tag1,tag2....tags"

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

**Since:** 1.0.0

--------------------


### deleteTags(...)

```typescript
deleteTags(options: { value: string; }) => Promise<void>
```

删除 标签 value = "tag1,tag2....tags"

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Since:** 1.0.0

--------------------


### getPushToken()

```typescript
getPushToken() => Promise<PushNotificationToken>
```

获取推送token 同时 监听注册 token 也被改变

**Returns:** <code>Promise&lt;<a href="#pushnotificationtoken">PushNotificationToken</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### PushNotificationDeliveredList

| Prop                | Type                                  | Since |
| ------------------- | ------------------------------------- | ----- |
| **`notifications`** | <code>PushNotificationSchema[]</code> | 1.0.0 |


#### PushNotificationSchema

| Prop               | Type                 | Description                                                                                                         | Since |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------- | ----- |
| **`title`**        | <code>string</code>  | The notification title.                                                                                             | 1.0.0 |
| **`subtitle`**     | <code>string</code>  | The notification subtitle.                                                                                          | 1.0.0 |
| **`body`**         | <code>string</code>  | The main text payload for the notification.                                                                         | 1.0.0 |
| **`id`**           | <code>string</code>  | The notification identifier.                                                                                        | 1.0.0 |
| **`badge`**        | <code>number</code>  | The number to display for the app icon badge.                                                                       | 1.0.0 |
| **`notification`** | <code>any</code>     |                                                                                                                     | 1.0.0 |
| **`data`**         | <code>any</code>     |                                                                                                                     | 1.0.0 |
| **`click_action`** | <code>string</code>  |                                                                                                                     | 1.0.0 |
| **`link`**         | <code>string</code>  |                                                                                                                     | 1.0.0 |
| **`group`**        | <code>string</code>  | Set the group identifier for notification grouping Only available on Android. Works like `threadIdentifier` on iOS. | 1.0.0 |
| **`groupSummary`** | <code>boolean</code> | Designate this notification as the summary for an associated `group`. Only available on Android.                    | 1.0.0 |


#### PermissionStatus

| Prop          | Type                                                        | Since |
| ------------- | ----------------------------------------------------------- | ----- |
| **`receive`** | <code><a href="#permissionstate">PermissionState</a></code> | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |


#### PushNotificationToken

| Prop        | Type                | Since |
| ----------- | ------------------- | ----- |
| **`value`** | <code>string</code> | 1.0.0 |


#### PushNotificationActionPerformed

| Prop               | Type                                                                      | Since |
| ------------------ | ------------------------------------------------------------------------- | ----- |
| **`actionId`**     | <code>string</code>                                                       | 1.0.0 |
| **`inputValue`**   | <code>string</code>                                                       | 1.0.0 |
| **`notification`** | <code><a href="#pushnotificationschema">PushNotificationSchema</a></code> | 1.0.0 |


### Type Aliases


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>