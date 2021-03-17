---
title: Alipay Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/alipay/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/alipay/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`login(...)`](#login)
* [`pay(...)`](#pay)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### login(...)

```typescript
login(options: { value: string; }) => Promise<LoginResult>
```

支付宝 登录 value = 使用 标准版授权参数
catch (error) error.code == "6001" 登录失败
支付失败 状态码 查文档

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#loginresult">LoginResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### pay(...)

```typescript
pay(options: { value: string; }) => Promise<void>
```

支付宝 支付 value = 使用 由后端生成支付参数
catch (error) error.code == "6001" 支付失败
支付失败 状态码 查文档

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

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

</docgen-api>