---
title: Speech Tts Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/speech-tts/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/speech-tts/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`isEnabled()`](#isenabled)
* [`speak(...)`](#speak)
* [`pause()`](#pause)
* [`resume()`](#resume)
* [`cancel()`](#cancel)
* [`destroy()`](#destroy)
* [`addListener('speakError', ...)`](#addlistenerspeakerror-)
* [`addListener('eventSpeechSpeak', ...)`](#addlistenereventspeechspeak-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

语音合成 tts

### isEnabled()

```typescript
isEnabled() => Promise<{ value: boolean; }>
```

Whether a Screen Reader is currently active.

This method is not supported on web (it is not possible to detect Screen
Readers).

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------


### speak(...)

```typescript
speak(options: SpeakTtsOptions) => Promise<void>
```

Text-to-Speech functionality.

This function will only work if a Screen Reader is currently active.

On web, browsers must support the [SpeechSynthesis
API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis), or
this method will throw an error.

For more text-to-speech capabilities, please see the [Capacitor Community
Text-to-Speech
plugin](https://github.com/capacitor-community/text-to-speech).

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#speakttsoptions">SpeakTtsOptions</a></code> |

**Since:** 1.0.0

--------------------


### pause()

```typescript
pause() => Promise<void>
```

暂停

**Since:** 1.0.0

--------------------


### resume()

```typescript
resume() => Promise<void>
```

恢复

--------------------


### cancel()

```typescript
cancel() => Promise<void>
```

取消

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


### addListener('speakError', ...)

```typescript
addListener(eventName: "speakError", listenerFunc: (error: SpeechTtsError) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the push notification registration finished with problems.

Provides an error with the registration problem.

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>'speakError'</code>                                                     |
| **`listenerFunc`** | <code>(error: <a href="#speechttserror">SpeechTtsError</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### addListener('eventSpeechSpeak', ...)

```typescript
addListener(eventName: "eventSpeechSpeak", listenerFunc: (speak: SpeakStatusChange) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the push notification registration finishes without problems.

Provides the push notification token.

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'eventSpeechSpeak'</code>                                                     |
| **`listenerFunc`** | <code>(speak: <a href="#speakstatuschange">SpeakStatusChange</a>) =&gt; void</code> |

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


#### SpeakTtsOptions

| Prop           | Type                | Description                                                                                                                                                               | Since |
| -------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`value`**    | <code>string</code> | The text to speak.                                                                                                                                                        | 1.0.0 |
| **`language`** | <code>string</code> | The language to speak the text in, as its [ISO 639-1 Code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g.: "en"). This option is only supported on Android. | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |


#### SpeechTtsError

| Prop          | Type                |
| ------------- | ------------------- |
| **`code`**    | <code>number</code> |
| **`message`** | <code>string</code> |


#### SpeakStatusChange

| Prop          | Type                                              | Description | Since |
| ------------- | ------------------------------------------------- | ----------- | ----- |
| **`percent`** | <code>0</code>                                    | 百分比         | 1.0.0 |
| **`state`**   | <code><a href="#speakstate">SpeakState</a></code> | 语音合成状态      | 1.0.0 |


### Enums


#### SpeakState

| Members        | Value                   |
| -------------- | ----------------------- |
| **`START`**    | <code>"start"</code>    |
| **`PAUSE`**    | <code>"pause"</code>    |
| **`RESUME`**   | <code>"resume"</code>   |
| **`PROGRESS`** | <code>"progress"</code> |
| **`COMPLETE`** | <code>"complete"</code> |

</docgen-api>