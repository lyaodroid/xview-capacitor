---
title: Qq Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/qq/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/qq/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`login(...)`](#login)
* [`share(...)`](#share)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### login(...)

```typescript
login(options: { appId: string; appKey: string; }) => Promise<LoginResult>
```

qq 登录 应用 appId 应用 appKey

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`options`** | <code>{ appId: string; appKey: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#loginresult">LoginResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### share(...)

```typescript
share(options: ShareMedia) => Promise<void>
```

qq 分享 catch (error) error.code == "1" 取消分享
分享失败 状态码 查文档

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#sharemedia">ShareMedia</a></code> |

**Since:** 1.0.0

--------------------


### Interfaces


#### LoginResult

| Prop           | Type                | Description             | Since |
| -------------- | ------------------- | ----------------------- | ----- |
| **`uid`**      | <code>string</code> | 返回 平台用户信息唯一值.           | 1.0.0 |
| **`openid`**   | <code>string</code> | 同 uid 一样使用 兼容 其它第三方登录使用 | 1.0.0 |
| **`name`**     | <code>string</code> | 昵称 支付宝没有                | 1.0.0 |
| **`gender`**   | <code>string</code> | 性别 男 \| 女 支付宝没有         | 1.0.0 |
| **`province`** | <code>string</code> | 省份 支付宝没有                | 1.0.0 |
| **`city`**     | <code>string</code> | 城市 支付宝没有                | 1.0.0 |


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

</docgen-api>