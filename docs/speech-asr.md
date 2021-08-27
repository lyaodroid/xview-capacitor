---
title: Speech Asr Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/speech-asr/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/speech-asr/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`recognize()`](#recognize)
* [`resetRecognize(...)`](#resetrecognize)
* [`stop()`](#stop)
* [`cancel()`](#cancel)
* [`destroy()`](#destroy)
* [`addListener('recognizeError', ...)`](#addlistenerrecognizeerror-)
* [`addListener('eventSpeechRecognize', ...)`](#addlistenereventspeechrecognize-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

语音听写

### recognize()

```typescript
recognize() => Promise<void>
```

开始识别 可以增加配置

**Since:** 1.0.0

--------------------


### resetRecognize(...)

```typescript
resetRecognize(options?: any) => Promise<void>
```

重新识别

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Since:** 1.0.0

--------------------


### stop()

```typescript
stop() => Promise<void>
```

暂停识别

**Since:** 1.0.0

--------------------


### cancel()

```typescript
cancel() => Promise<void>
```

取消识别

**Since:** 1.0.0

--------------------


### destroy()

```typescript
destroy() => never
```

离开页面时候
释放资源

**Returns:** <code>never</code>

**Since:** 1.0.0

--------------------


### addListener('recognizeError', ...)

```typescript
addListener(eventName: "recognizeError", listenerFunc: (error: SpeechAsrError) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the push notification registration finished with problems.

Provides an error with the registration problem.

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>'recognizeError'</code>                                                 |
| **`listenerFunc`** | <code>(error: <a href="#speechasrerror">SpeechAsrError</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### addListener('eventSpeechRecognize', ...)

```typescript
addListener(eventName: "eventSpeechRecognize", listenerFunc: (recognize: RecognizeStatusChange) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the push notification registration finishes without problems.

Provides the push notification token.

| Param              | Type                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'eventSpeechRecognize'</code>                                                             |
| **`listenerFunc`** | <code>(recognize: <a href="#recognizestatuschange">RecognizeStatusChange</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all native listeners for this plugin

**Since:** 1.0.0

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |


#### SpeechAsrError

| Prop          | Type                |
| ------------- | ------------------- |
| **`code`**    | <code>number</code> |
| **`message`** | <code>string</code> |


#### RecognizeStatusChange

| Prop            | Type                                                      | Description                         | Since |
| --------------- | --------------------------------------------------------- | ----------------------------------- | ----- |
| **`amplitude`** | <code>0</code>                                            | 录音时 振幅 state = start 时有值 0 -&gt; 14 | 1.0.0 |
| **`state`**     | <code><a href="#recognizestate">RecognizeState</a></code> | 识别语音状态                              | 1.0.0 |
| **`data`**      | <code>string</code>                                       | state == end 时 识别结束 data 有值         | 1.0.0 |


### Enums


#### RecognizeState

| Members         | Value                    |
| --------------- | ------------------------ |
| **`START`**     | <code>"start"</code>     |
| **`LISTENING`** | <code>"listening"</code> |
| **`END`**       | <code>"end"</code>       |
| **`COMPLETE`**  | <code>"complete"</code>  |

</docgen-api>