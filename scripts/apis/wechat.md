---
title: Wechat Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/wechat/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/wechat/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`login(...)`](#login)
* [`share(...)`](#share)
* [`pay(...)`](#pay)
* [`launchMiniProgram(...)`](#launchminiprogram)
* [`addListener('app-parameter', ...)`](#addlistenerapp-parameter-)
* [`addListener('app-parameter-share', ...)`](#addlistenerapp-parameter-share-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### login(...)

```typescript
login(options: WeChatLoginOptions) => Promise<LoginResult>
```

微信 登录

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#wechatloginoptions">WeChatLoginOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#loginresult">LoginResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### share(...)

```typescript
share(options: ShareMedia) => Promise<ShareResult>
```

微信 分享

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#sharemedia">ShareMedia</a></code> |

**Returns:** <code>Promise&lt;<a href="#shareresult">ShareResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### pay(...)

```typescript
pay(options: WeChatPayOptions) => Promise<PayResult>
```

微信 支付

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#wechatpayoptions">WeChatPayOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#payresult">PayResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### launchMiniProgram(...)

```typescript
launchMiniProgram(options: MiniProgramOptions) => Promise<void>
```

微信 拉起小程序

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#miniprogramoptions">MiniProgramOptions</a></code> |

**Since:** 1.0.0

--------------------


### addListener('app-parameter', ...)

```typescript
addListener(eventName: "app-parameter", listenerFunc: (args: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                |
| ------------------ | ----------------------------------- |
| **`eventName`**    | <code>'app-parameter'</code>        |
| **`listenerFunc`** | <code>(args: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('app-parameter-share', ...)

```typescript
addListener(eventName: "app-parameter-share", listenerFunc: (args: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                |
| ------------------ | ----------------------------------- |
| **`eventName`**    | <code>'app-parameter-share'</code>  |
| **`listenerFunc`** | <code>(args: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all native listeners for this plugin

--------------------


### Interfaces


#### LoginResult

| Prop           | Type                | Description             | Since |
| -------------- | ------------------- | ----------------------- | ----- |
| **`uid`**      | <code>string</code> | 返回 平台用户信息唯一值.           | 1.0.0 |
| **`openid`**   | <code>string</code> | 同 uid 一样使用 兼容 其它第三方登录使用 | 1.0.0 |
| **`name`**     | <code>string</code> | 昵称                      | 1.0.0 |
| **`gender`**   | <code>string</code> | 性别 男 \| 女               | 1.0.0 |
| **`province`** | <code>string</code> | 省份                      | 1.0.0 |
| **`city`**     | <code>string</code> | 城市                      | 1.0.0 |


#### WeChatLoginOptions

| Prop         | Type                | Description  | Since |
| ------------ | ------------------- | ------------ | ----- |
| **`appId`**  | <code>string</code> | 应用 appId     | 1.0.0 |
| **`appKey`** | <code>string</code> | 应用 appsecret | 1.0.0 |


#### ShareResult

| Prop        | Type                 | Description                          | Since |
| ----------- | -------------------- | ------------------------------------ | ----- |
| **`value`** | <code>boolean</code> | 返回成功失败                               | 1.0.0 |
| **`code`**  | <code>string</code>  | 返回状态码 value = false时 使用 -1 是错误 1 是取消 | 1.0.0 |


#### ShareMedia

| Prop            | Type                                                        | Description            | Since |
| --------------- | ----------------------------------------------------------- | ---------------------- | ----- |
| **`appId`**     | <code>string</code>                                         | 应用 appId               | 1.0.0 |
| **`appKey`**    | <code>string</code>                                         | 应用 appKey or appSecret | 1.0.0 |
| **`platform`**  | <code>'QQ' \| 'QZONE' \| 'WEIXIN' \| 'WEIXIN_CIRCLE'</code> | 分享到媒体                  | 1.0.0 |
| **`shareData`** | <code><a href="#sharestyle">ShareStyle</a></code>           | 分享样式 文字 图片 网页 音乐 视频    | 1.0.0 |


#### ShareStyle

| Prop            | Type                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| **`shareType`** | <code>'text' \| 'image' \| 'webPage' \| 'music' \| 'video' \| 'minApp'</code> |


#### PayResult

-----------------------------------------------------------------------------

| Prop        | Type                 | Description             | Since |
| ----------- | -------------------- | ----------------------- | ----- |
| **`value`** | <code>boolean</code> | 返回成功失败                  | 1.0.0 |
| **`code`**  | <code>string</code>  | 返回状态码 value = false时 使用 | 1.0.0 |


#### WeChatPayOptions

| Prop               | Type                | Description                                                   | Since |
| ------------------ | ------------------- | ------------------------------------------------------------- | ----- |
| **`appId`**        | <code>string</code> | 微信开放平台审核通过的应用appid ，为二级商户申请的应用appid。                          | 1.0.0 |
| **`partnerId`**    | <code>string</code> | 请填写商户号mchid对应的值。                                              | 1.0.0 |
| **`prepayId`**     | <code>string</code> | 微信返回的支付交易会话id。                                                | 1.0.0 |
| **`packageValue`** | <code>string</code> | 暂填写固定值Sign=WXPay                                              | 1.0.0 |
| **`nonceStr`**     | <code>string</code> | 随机字符串，不长于32位。推荐随机数生成算法。                                       |       |
| **`timeStamp`**    | <code>string</code> | 时间戳                                                           | 1.0.0 |
| **`sign`**         | <code>string</code> | 是	签名，使用字段appId、timeStamp、nonceStr、prepayid计算得出的签名值 注意：取值RSA格式 |       |


#### MiniProgramOptions

| Prop           | Type                     | Description                   | Since |
| -------------- | ------------------------ | ----------------------------- | ----- |
| **`appId`**    | <code>string</code>      | 填移动应用(App)的 AppId，非小程序的 AppID | 1.0.0 |
| **`userName`** | <code>string</code>      | 填小程序原始id (gh_******)          | 1.0.0 |
| **`path`**     | <code>string</code>      | 拉起小程序页面的可带参路径，不填默认拉起小程序首页，    | 1.0.0 |
| **`miniType`** | <code>0 \| 1 \| 2</code> | 小程序 版本0 正式 ， 1 测试 2 预览版       | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |

</docgen-api>