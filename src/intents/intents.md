---
title: Intents Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/intents/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/intents/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`startIntent(...)`](#startintent)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startIntent(...)

```typescript
startIntent<T>(options: IntentOptions) => Promise<T>
```

常用打开一些 设置 和 开关 和 app

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#intentoptions">IntentOptions</a></code> |

**Returns:** <code>Promise&lt;T&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### IntentOptions

callbackCode 必须原生已经定义
如果a action 使用默认值
data or packageName or componentName 必须有值
其它子类 实现 此接口可以实现 不同功能

  eventName 就是监听回调  如果 这个有值 就一定要 从这里获取结果
  先注册监听 再 startIntent 方法

| Prop             | Type                | Description            |
| ---------------- | ------------------- | ---------------------- |
| **`methodName`** | <code>string</code> | 处理回调使用 如果有值 需要 回调 如果没有 |

</docgen-api>