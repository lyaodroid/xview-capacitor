---
title: Http Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/http/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/http/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`request(...)`](#request)
* [`get(...)`](#get)
* [`post(...)`](#post)
* [`uploadFiles(...)`](#uploadfiles)
* [`put(...)`](#put)
* [`patch(...)`](#patch)
* [`del(...)`](#del)
* [`setCookie(...)`](#setcookie)
* [`getCookie(...)`](#getcookie)
* [`getCookies()`](#getcookies)
* [`getCookiesMap()`](#getcookiesmap)
* [`clearCookies()`](#clearcookies)
* [`deleteCookie(...)`](#deletecookie)
* [`uploadFile(...)`](#uploadfile)
* [`downloadFile(...)`](#downloadfile)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### request(...)

```typescript
request(options: HttpOptions) => Promise<HttpResponse>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#httpoptions">HttpOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpresponse">HttpResponse</a>&gt;</code>

--------------------


### get(...)

```typescript
get(options: HttpOptions) => Promise<HttpResponse>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#httpoptions">HttpOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpresponse">HttpResponse</a>&gt;</code>

--------------------


### post(...)

```typescript
post(options: HttpOptions) => Promise<HttpResponse>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#httpoptions">HttpOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpresponse">HttpResponse</a>&gt;</code>

--------------------


### uploadFiles(...)

```typescript
uploadFiles(options: HttpUploadFileOptions, callback: HttpProgressCallback) => CallbackID
```

data 中放 file 参数 [filePath(文件路径)] 或者 [{fileKey:"自定义后端解析",filePath:"文件路径"}]

| Param          | Type                                                                    |
| -------------- | ----------------------------------------------------------------------- |
| **`options`**  | <code><a href="#httpuploadfileoptions">HttpUploadFileOptions</a></code> |
| **`callback`** | <code><a href="#httpprogresscallback">HttpProgressCallback</a></code>   |

**Returns:** <code>string</code>

**Since:** 1.0.0

--------------------


### put(...)

```typescript
put(options: HttpOptions) => Promise<HttpResponse>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#httpoptions">HttpOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpresponse">HttpResponse</a>&gt;</code>

--------------------


### patch(...)

```typescript
patch(options: HttpOptions) => Promise<HttpResponse>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#httpoptions">HttpOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpresponse">HttpResponse</a>&gt;</code>

--------------------


### del(...)

```typescript
del(options: HttpOptions) => Promise<HttpResponse>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#httpoptions">HttpOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpresponse">HttpResponse</a>&gt;</code>

--------------------


### setCookie(...)

```typescript
setCookie(options: { key: string; value: any; options?: HttpCookieOptions; }) => Promise<void>
```

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ key: string; value: any; options?: <a href="#httpcookieoptions">HttpCookieOptions</a>; }</code> |

--------------------


### getCookie(...)

```typescript
getCookie(options: { key: string; }) => Promise<HttpCookie>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#httpcookie">HttpCookie</a>&gt;</code>

--------------------


### getCookies()

```typescript
getCookies() => Promise<HttpGetCookiesResult>
```

**Returns:** <code>Promise&lt;<a href="#httpgetcookiesresult">HttpGetCookiesResult</a>&gt;</code>

--------------------


### getCookiesMap()

```typescript
getCookiesMap() => Promise<HttpCookieMap>
```

**Returns:** <code>Promise&lt;<a href="#httpcookiemap">HttpCookieMap</a>&gt;</code>

--------------------


### clearCookies()

```typescript
clearCookies() => Promise<void>
```

--------------------


### deleteCookie(...)

```typescript
deleteCookie(options: { key: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

--------------------


### uploadFile(...)

```typescript
uploadFile(options: HttpUploadFileOptions) => Promise<HttpResponse>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code><a href="#httpuploadfileoptions">HttpUploadFileOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpresponse">HttpResponse</a>&gt;</code>

--------------------


### downloadFile(...)

```typescript
downloadFile(options: HttpDownloadFileOptions) => Promise<HttpDownloadFileResult>
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#httpdownloadfileoptions">HttpDownloadFileOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpdownloadfileresult">HttpDownloadFileResult</a>&gt;</code>

--------------------


### Interfaces


#### HttpResponse

| Prop          | Type                                                |
| ------------- | --------------------------------------------------- |
| **`data`**    | <code>any</code>                                    |
| **`status`**  | <code>number</code>                                 |
| **`headers`** | <code><a href="#httpheaders">HttpHeaders</a></code> |
| **`url`**     | <code>string</code>                                 |


#### HttpHeaders


#### HttpOptions

| Prop                        | Type                                                          | Description                                                                                                                                           | Since |
| --------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`url`**                   | <code>string</code>                                           | 请求接口地址 注意 https 问题 只有 post 和 get uploadFiles 支持                                                                                                       | 1.0.0 |
| **`method`**                | <code>string</code>                                           |                                                                                                                                                       |       |
| **`params`**                | <code><a href="#httpparams">HttpParams</a></code>             |                                                                                                                                                       |       |
| **`data`**                  | <code>any</code>                                              |                                                                                                                                                       | 1.0.0 |
| **`headers`**               | <code><a href="#httpheaders">HttpHeaders</a></code>           |                                                                                                                                                       |       |
| **`readTimeout`**           | <code>number</code>                                           | How long to wait to read additional data. Resets each time new data is received                                                                       |       |
| **`connectTimeout`**        | <code>number</code>                                           | How long to wait for the initial connection.                                                                                                          |       |
| **`webFetchExtra`**         | <code><a href="#requestinit">RequestInit</a></code>           | Extra arguments for fetch when running on the web                                                                                                     |       |
| **`responseType`**          | <code><a href="#httpresponsetype">HttpResponseType</a></code> | This is used to parse the response appropriately before returning it to the requestee. If the response content-type is "json", this value is ignored. |       |
| **`shouldEncodeUrlParams`** | <code>boolean</code>                                          | Use this option if you need to keep the URL unencoded in certain cases (already encoded, azure/firebase testing, etc.). The default is _true_.        |       |


#### HttpParams


#### RequestInit

| Prop           | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| **`body`**     | <code><a href="#bodyinit">BodyInit</a></code>               |
| **`headers`**  | <code><a href="#headersinit">HeadersInit</a></code>         |
| **`method`**   | <code>string</code>                                         |
| **`redirect`** | <code><a href="#requestredirect">RequestRedirect</a></code> |
| **`signal`**   | <code><a href="#abortsignal">AbortSignal</a></code>         |
| **`agent`**    | <code>Agent \| ((parsedUrl: URL) =&gt; Agent)</code>        |
| **`compress`** | <code>boolean</code>                                        |
| **`follow`**   | <code>number</code>                                         |
| **`size`**     | <code>number</code>                                         |
| **`timeout`**  | <code>number</code>                                         |


#### ArrayBuffer

Represents a raw buffer of binary data, which is used to store data for the
different typed arrays. ArrayBuffers cannot be read from or written to directly,
but can be passed to a typed array or DataView Object to interpret the raw
buffer as needed.

| Prop             | Type                | Description                                                                     |
| ---------------- | ------------------- | ------------------------------------------------------------------------------- |
| **`byteLength`** | <code>number</code> | Read-only. The length of the <a href="#arraybuffer">ArrayBuffer</a> (in bytes). |

| Method    | Signature                                                                  | Description                                                     |
| --------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **slice** | (begin: number, end?: number) =&gt; <a href="#arraybuffer">ArrayBuffer</a> | Returns a section of an <a href="#arraybuffer">ArrayBuffer</a>. |


#### ArrayBufferView

| Prop             | Type                                                        | Description                                                                  |
| ---------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **`buffer`**     | <code><a href="#arraybufferlike">ArrayBufferLike</a></code> | The <a href="#arraybuffer">ArrayBuffer</a> instance referenced by the array. |
| **`byteLength`** | <code>number</code>                                         | The length in bytes of the array.                                            |
| **`byteOffset`** | <code>number</code>                                         | The offset in bytes of the array.                                            |


#### ArrayBufferTypes

Allowed <a href="#arraybuffer">ArrayBuffer</a> types for the buffer of an <a href="#arraybufferview">ArrayBufferView</a> and related Typed Arrays.

| Prop              | Type                                                |
| ----------------- | --------------------------------------------------- |
| **`ArrayBuffer`** | <code><a href="#arraybuffer">ArrayBuffer</a></code> |


#### AbortSignal

| Prop                      | Type                                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`aborted`**             | <code>boolean</code>                                                                                                                                                                                    |
| **`addEventListener`**    | <code>(type: 'abort', listener: (this: <a href="#abortsignal">AbortSignal</a>, event: any) =&gt; any, options?: boolean \| { capture?: boolean; once?: boolean; passive?: boolean; }) =&gt; void</code> |
| **`removeEventListener`** | <code>(type: 'abort', listener: (this: <a href="#abortsignal">AbortSignal</a>, event: any) =&gt; any, options?: boolean \| { capture?: boolean; }) =&gt; void</code>                                    |
| **`dispatchEvent`**       | <code>(event: any) =&gt; boolean</code>                                                                                                                                                                 |
| **`onabort`**             | <code>(this: <a href="#abortsignal">AbortSignal</a>, event: any) =&gt; void</code>                                                                                                                      |


#### HttpUploadFileOptions

| Prop                | Type                                            | Description                                                                                                                     |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **`url`**           | <code>string</code>                             | The URL to upload the file to                                                                                                   |
| **`name`**          | <code>string</code>                             | The field name to upload the file with                                                                                          |
| **`blob`**          | <code>Blob</code>                               | For uploading a file on the web, a JavaScript Blob to upload                                                                    |
| **`filePath`**      | <code>string</code>                             | For uploading a file natively, the path to the file on disk to upload                                                           |
| **`fileDirectory`** | <code><a href="#directory">Directory</a></code> | Optionally, the directory to look for the file in. If this option is used, filePath can be a relative path rather than absolute |


#### HttpUploadFileResult

| Prop              | Type                                            | Description      | Since |
| ----------------- | ----------------------------------------------- | ---------------- | ----- |
| **`fraction`**    | <code>number</code>                             | 0 ~ 100 百分比      | 1.0.0 |
| **`speed`**       | <code>number</code>                             | 速度               | 1.0.0 |
| **`totalSize`**   | <code>number</code>                             | 文件 总长度 字节        | 1.0.0 |
| **`currentSize`** | <code>number</code>                             | 已经上传 文件 大小 单位 字节 | 1.0.0 |
| **`state`**       | <code><a href="#httpstate">HttpState</a></code> | 文件上传 状态          | 1.0.0 |


#### HttpCookieOptions

| Prop          | Type                |
| ------------- | ------------------- |
| **`url`**     | <code>string</code> |
| **`path`**    | <code>string</code> |
| **`expires`** | <code>string</code> |


#### HttpCookie

| Prop        | Type                |
| ----------- | ------------------- |
| **`key`**   | <code>string</code> |
| **`value`** | <code>string</code> |


#### HttpGetCookiesResult

| Prop          | Type                      |
| ------------- | ------------------------- |
| **`cookies`** | <code>HttpCookie[]</code> |


#### HttpCookieMap


#### HttpDownloadFileResult

| Prop       | Type                |
| ---------- | ------------------- |
| **`path`** | <code>string</code> |
| **`blob`** | <code>Blob</code>   |


#### HttpDownloadFileOptions

| Prop                | Type                                            | Description                                                                                                               |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **`filePath`**      | <code>string</code>                             | The path the downloaded file should be moved to                                                                           |
| **`fileDirectory`** | <code><a href="#directory">Directory</a></code> | Optionally, the directory to put the file in If this option is used, filePath can be a relative path rather than absolute |


### Type Aliases


#### BodyInit

<code><a href="#arraybuffer">ArrayBuffer</a> | <a href="#arraybufferview">ArrayBufferView</a> | NodeJS.ReadableStream | string | URLSearchParams | FormData</code>


#### ArrayBufferLike

<code>ArrayBufferTypes[keyof ArrayBufferTypes]</code>


#### HeadersInit

<code>Headers | string[][] | { [key: string]: string }</code>


#### RequestRedirect

<code>"error" | "follow" | "manual"</code>


#### HttpResponseType

<code>"arraybuffer" | "blob" | "json" | "text" | "document"</code>


#### HttpProgressCallback

<code>(progress: <a href="#httpuploadfileresult">HttpUploadFileResult</a>, err?: any): void</code>


#### CallbackID

<code>string</code>


### Enums


#### Directory

| Members               | Value                           | Description                                                                                                                                                                                                                                                                                                                                                                                           | Since |
| --------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`Documents`**       | <code>'DOCUMENTS'</code>        | The Documents directory On iOS it's the app's documents directory. Use this directory to store user-generated content. On Android it's the Public Documents folder, so it's accessible from other apps. It's not accesible on Android 10 unless the app enables legacy External Storage by adding `android:requestLegacyExternalStorage="true"` in the `application` tag in the `AndroidManifest.xml` | 1.0.0 |
| **`Data`**            | <code>'DATA'</code>             | The Data directory On iOS it will use the Documents directory On Android it's the directory holding application files. Files will be deleted when the application is uninstalled.                                                                                                                                                                                                                     | 1.0.0 |
| **`Cache`**           | <code>'CACHE'</code>            | The Cache directory Can be deleted in cases of low memory, so use this directory to write app-specific files that your app can re-create easily.                                                                                                                                                                                                                                                      | 1.0.0 |
| **`External`**        | <code>'EXTERNAL'</code>         | The external directory On iOS it will use the Documents directory On Android it's the directory on the primary shared/external storage device where the application can place persistent files it owns. These files are internal to the applications, and not typically visible to the user as media. Files will be deleted when the application is uninstalled.                                      | 1.0.0 |
| **`ExternalStorage`** | <code>'EXTERNAL_STORAGE'</code> | The external storage directory On iOS it will use the Documents directory On Android it's the primary shared/external storage directory. It's not accesible on Android 10 unless the app enables legacy External Storage by adding `android:requestLegacyExternalStorage="true"` in the `application` tag in the `AndroidManifest.xml`                                                                | 1.0.0 |


#### HttpState

| Members        | Value                   | Description                           | Since |
| -------------- | ----------------------- | ------------------------------------- | ----- |
| **`START`**    | <code>"start"</code>    | 回调 开始 一般 用于 showLoading               | 1.0.0 |
| **`PROGRESS`** | <code>"progress"</code> | 一般 主要 用于 返回当前进度 百分比 fraction          | 1.0.0 |
| **`FINISH`**   | <code>"finish"</code>   | 回调结束 在 success error 之前 用于 结束 loading | 1.0.0 |
| **`SUCCESS`**  | <code>"success"</code>  | 回调成功 状态 注意处理 其它参数                     | 1.0.0 |
| **`ERROR`**    | <code>"error"</code>    | 回调失败 一般 用于错误提示                        | 1.0.0 |

</docgen-api>