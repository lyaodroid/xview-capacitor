---
title: File Selector Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/file-selector/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/file-selector/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`fileSelector(...)`](#fileselector)
* [`addListener('onFilesSelected', ...)`](#addlisteneronfilesselected-)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### fileSelector(...)

```typescript
fileSelector(options: FileSelectorOptions) => Promise<FileSelectorResult>
```

系统文件选择

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#fileselectoroptions">FileSelectorOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#fileselectorresult">FileSelectorResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### addListener('onFilesSelected', ...)

```typescript
addListener(eventName: "onFilesSelected", listenerFunc: (state: any) => void) => PluginListenerHandle
```

web 文件选择

| Param              | Type                                 |
| ------------------ | ------------------------------------ |
| **`eventName`**    | <code>'onFilesSelected'</code>       |
| **`listenerFunc`** | <code>(state: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### Interfaces


#### FileSelectorResult

| Prop                 | Type             | Description                                  | Since |
| -------------------- | ---------------- | -------------------------------------------- | ----- |
| **`paths`**          | <code>any</code> | 文件路径 使用原生上传 要 replace（ _capacitor_file_ ，"") | 1.0.0 |
| **`original_names`** | <code>any</code> |                                              |       |
| **`extensions`**     | <code>any</code> |                                              |       |


#### FileSelectorOptions

| Prop                     | Type                  | Description | Since |
| ------------------------ | --------------------- | ----------- | ----- |
| **`multiple_selection`** | <code>boolean</code>  | 是否多选        | 1.0.0 |
| **`ext`**                | <code>string[]</code> | 选择文件类型扩展    | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |

</docgen-api>