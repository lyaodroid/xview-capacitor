---
title: Update Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/update/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/update/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`getAppInfo()`](#getappinfo)
* [`addListener('updateProgressChange', ...)`](#addlistenerupdateprogresschange-)
* [`apkDownloadUpdate(...)`](#apkdownloadupdate)
* [`apkBackgroundDownload()`](#apkbackgrounddownload)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getAppInfo()

```typescript
getAppInfo() => Promise<UpdateAppInfo>
```

获取原生 App版本信息 注意 Android 与 iOS appId 平台区分

**Returns:** <code>Promise&lt;<a href="#updateappinfo">UpdateAppInfo</a>&gt;</code>

**Since:** 1.0.0

--------------------


### addListener('updateProgressChange', ...)

```typescript
addListener(eventName: "updateProgressChange", listenerFunc: UpdateProgressChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

如果想 监听 下载进度 可以 注册此监听

| Param              | Type                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'updateProgressChange'</code>                                                   |
| **`listenerFunc`** | <code><a href="#updateprogresschangelistener">UpdateProgressChangeListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### apkDownloadUpdate(...)

```typescript
apkDownloadUpdate(options: UpdateOption) => Promise<void>
```

版本更新 带 下载进度 回调配合监听方法使用

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#updateoption">UpdateOption</a></code> |

**Since:** 1.0.0

--------------------


### apkBackgroundDownload()

```typescript
apkBackgroundDownload() => void
```

如果前端 提示 下载进度 UI 上面 有  切换到 后台 按钮  可以再 下载 80% 前调用此方法
会以通知栏形式 下载更新

**Since:** 1.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

如果注册了 监听 结束后 一定要 移除 监听

**Since:** 1.0.0

--------------------


### Interfaces


#### UpdateAppInfo

| Prop              | Type                            | Description                                  | Since |
| ----------------- | ------------------------------- | -------------------------------------------- | ----- |
| **`appId`**       | <code>string</code>             | ios 平台 bundleId android 平台 packageName       | 1.0.0 |
| **`platform`**    | <code>'ios' \| 'android'</code> | 设备平台 信息 (lowercase).                         | 1.0.0 |
| **`versionName`** | <code>string</code>             | 平台 版本名称 展示 使用                                | 1.0.0 |
| **`versionCode`** | <code>number</code>             | 苹果平台 build Android 平台是 versionCode 版本更新 判断使用 | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |


#### UpdateProgress

| Prop           | Type                                            | Description              | Since |
| -------------- | ----------------------------------------------- | ------------------------ | ----- |
| **`fraction`** | <code>number</code>                             | 当前进度 0 ~ 100 百分比         | 1.0.0 |
| **`path`**     | <code>string</code>                             | apk 下载后安装路径 可以作为手动 安装 使用 | 1.0.0 |
| **`state`**    | <code><a href="#httpstate">HttpState</a></code> | 更新状态 根据状态 处理 回调          | 1.0.0 |


#### UpdateOption

| Prop              | Type                | Description                               | Since |
| ----------------- | ------------------- | ----------------------------------------- | ----- |
| **`apkUrl`**      | <code>string</code> | apk 下载地址 支持 HTTP HTTPS                    | 1.0.0 |
| **`apkSize`**     | <code>string</code> | 大小主要是进度更新需要 默认后端配置文件大小， 可以在获取不到 文件大小时使用   | 1.0.0 |
| **`versionName`** | <code>string</code> | apk 缓存目录 使用 方便下载完成时 可以看到返回文件路径是否正确        | 1.0.0 |
| **`apkMd5`**      | <code>string</code> | apk file md5 验证（*.apk 文件md5值 注意不是签名文件md5） | 1.0.0 |


### Type Aliases


#### UpdateProgressChangeListener

<code>(position: <a href="#updateprogress">UpdateProgress</a>, err?: any): void</code>


### Enums


#### HttpState

| Members        | Value                   | Description                           | Since |
| -------------- | ----------------------- | ------------------------------------- | ----- |
| **`START`**    | <code>"start"</code>    | 回调 开始 一般 用于 showLoading               | 1.0.0 |
| **`PROGRESS`** | <code>"progress"</code> | 一般 主要 用于 返回当前进度 百分比 fraction          | 1.0.0 |
| **`FINISH`**   | <code>"finish"</code>   | 回调结束 在 success error 之前 用于 结束 loading | 1.0.0 |
| **`SUCCESS`**  | <code>"success"</code>  | 回调成功 状态 注意处理 其它参数                     | 1.0.0 |
| **`ERROR`**    | <code>"error"</code>    | 回调失败 一般 用于错误提示                        | 1.0.0 |

</docgen-api>