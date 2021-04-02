---
title: Webpage Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/webpage/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/webpage/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`open(...)`](#open)
* [`close()`](#close)
* [`loadUrl(...)`](#loadurl)
* [`getSnapshot()`](#getsnapshot)
* [`show()`](#show)
* [`hide()`](#hide)
* [`toggleFullscreen()`](#togglefullscreen)
* [`canGoBack()`](#cangoback)
* [`goBack()`](#goback)
* [`goForward()`](#goforward)
* [`reload()`](#reload)
* [`handleNavigationEvent(...)`](#handlenavigationevent)
* [`updateDimensions(...)`](#updatedimensions)
* [`evaluateJavaScript(...)`](#evaluatejavascript)
* [`addListener('title' | 'pageLoaded' | 'updateSnapshot' | 'progress' | 'navigationHandler', ...)`](#addlistenertitle--pageloaded--updatesnapshot--progress--navigationhandler-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(options: OpenOptions) => Promise<void>
```

Open a webview with the given URL

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#openoptions">OpenOptions</a></code> |

--------------------


### close()

```typescript
close() => Promise<void>
```

Close an open webview.

--------------------


### loadUrl(...)

```typescript
loadUrl(options: { url: string; }) => Promise<void>
```

Load a url in the webview.

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

--------------------


### getSnapshot()

```typescript
getSnapshot() => Promise<{ src: string; }>
```

Get snapshot image

**Returns:** <code>Promise&lt;{ src: string; }&gt;</code>

--------------------


### show()

```typescript
show() => Promise<void>
```

--------------------


### hide()

```typescript
hide() => Promise<void>
```

--------------------


### toggleFullscreen()

```typescript
toggleFullscreen() => Promise<void>
```

--------------------


### canGoBack()

```typescript
canGoBack() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### goBack()

```typescript
goBack() => Promise<void>
```

--------------------


### goForward()

```typescript
goForward() => Promise<void>
```

--------------------


### reload()

```typescript
reload() => Promise<void>
```

--------------------


### handleNavigationEvent(...)

```typescript
handleNavigationEvent(options: { allow: boolean; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ allow: boolean; }</code> |

--------------------


### updateDimensions(...)

```typescript
updateDimensions(options: Dimensions) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#dimensions">Dimensions</a></code> |

--------------------


### evaluateJavaScript(...)

```typescript
evaluateJavaScript(options: { javascript: string; }) => Promise<{ result: string; }>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ javascript: string; }</code> |

**Returns:** <code>Promise&lt;{ result: string; }&gt;</code>

--------------------


### addListener('title' | 'pageLoaded' | 'updateSnapshot' | 'progress' | 'navigationHandler', ...)

```typescript
addListener(eventName: "title" | "pageLoaded" | "updateSnapshot" | "progress" | "navigationHandler", listenerFunc: (...args: any[]) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'title' \| 'pageLoaded' \| 'updateSnapshot' \| 'progress' \| 'navigationHandler'</code> |
| **`listenerFunc`** | <code>(...args: any[]) =&gt; void</code>                                                      |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all native listeners for this plugin

**Since:** 1.0.0

--------------------


### Interfaces


#### OpenOptions

| Prop                | Type                                                                | Description                    |
| ------------------- | ------------------------------------------------------------------- | ------------------------------ |
| **`url`**           | <code>string</code>                                                 | The URL to open the webview to |
| **`javascript`**    | <code>string</code>                                                 |                                |
| **`injectionTime`** | <code><a href="#scriptinjectiontime">ScriptInjectionTime</a></code> |                                |


#### Dimensions

| Prop         | Type                | Description                            | Since |
| ------------ | ------------------- | -------------------------------------- | ----- |
| **`width`**  | <code>number</code> | webview 宽度 = -1 时表示 宽度满屏               | 1.0.0 |
| **`height`** | <code>number</code> | webview 高度 一般主要减去(状态栏 高度 + titleBar高度) | 1.0.0 |
| **`x`**      | <code>number</code> | webview 左偏移                            | 1.0.0 |
| **`y`**      | <code>number</code> | webview 上偏移 计算 状态栏高度和titleBar高度        | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |


### Enums


#### ScriptInjectionTime

| Members               |
| --------------------- |
| **`atDocumentStart`** |
| **`atDocumentEnd`**   |

</docgen-api>