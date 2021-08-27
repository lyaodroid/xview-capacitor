---
title: Audio Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/audio/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/audio/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`startRecord(...)`](#startrecord)
* [`stopRecord(...)`](#stoprecord)
* [`startPlay(...)`](#startplay)
* [`stopPlay(...)`](#stopplay)
* [`release()`](#release)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startRecord(...)

```typescript
startRecord(options: { interval?: number; format?: string; }, callback: AudioStatusChangeCallback) => CallbackID
```

| Param          | Type                                                                            |
| -------------- | ------------------------------------------------------------------------------- |
| **`options`**  | <code>{ interval?: number; format?: string; }</code>                            |
| **`callback`** | <code><a href="#audiostatuschangecallback">AudioStatusChangeCallback</a></code> |

**Returns:** <code>string</code>

--------------------


### stopRecord(...)

```typescript
stopRecord(options: { id: string; }) => Promise<void>
```

暂停时 如果是取消 就 删除录制文件

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: string; }</code> |

--------------------


### startPlay(...)

```typescript
startPlay(options: { path: string; }, callback?: AudioStatusChangeCallback) => CallbackID
```

开始播放

| Param          | Type                                                                            |
| -------------- | ------------------------------------------------------------------------------- |
| **`options`**  | <code>{ path: string; }</code>                                                  |
| **`callback`** | <code><a href="#audiostatuschangecallback">AudioStatusChangeCallback</a></code> |

**Returns:** <code>string</code>

**Since:** 1.0.0

--------------------


### stopPlay(...)

```typescript
stopPlay(options: { id: string; }) => Promise<void>
```

停止播放

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: string; }</code> |

**Since:** 1.0.0

--------------------


### release()

```typescript
release() => never
```

离开页面时候
释放资源

**Returns:** <code>never</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### AudioStatusChange

| Prop                  | Type                                                        | Description                                      | Since |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------------ | ----- |
| **`currentPosition`** | <code>number</code>                                         | 播放当前进度 state = start 时有值                         | 1.0.0 |
| **`amplitude`**       | <code>number</code>                                         | 录音时 振幅 state = start 时有值 0 -&gt; 100             | 1.0.0 |
| **`state`**           | <code><a href="#audiostate">AudioState</a></code>           | 状态暂时开启 两个 recording playing pause \| resume 后面开启 | 1.0.0 |
| **`data`**            | <code><a href="#audiofileresult">AudioFileResult</a></code> | amplitude == -1 时 录音结束 data 有值                   | 1.0.0 |


#### AudioFileResult

| Prop           | Type                | Description | Since |
| -------------- | ------------------- | ----------- | ----- |
| **`path`**     | <code>string</code> | 录音文件的路径     | 1.0.0 |
| **`duration`** | <code>number</code> | 录音文件真实长度    | 1.0.0 |


### Type Aliases


#### AudioStatusChangeCallback

<code>(status: <a href="#audiostatuschange">AudioStatusChange</a>, err?: any): void</code>


#### CallbackID

<code>string</code>


### Enums


#### AudioState

| Members     | Value                |
| ----------- | -------------------- |
| **`START`** | <code>"start"</code> |
| **`STOP`**  | <code>"stop"</code>  |

</docgen-api>