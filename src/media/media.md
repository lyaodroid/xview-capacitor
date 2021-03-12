---
title: Media Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/media/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/media/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`selectImage(...)`](#selectimage)
* [`openCamera(...)`](#opencamera)
* [`previewImage(...)`](#previewimage)
* [`saveImage(...)`](#saveimage)
* [`selectVideo(...)`](#selectvideo)
* [`recordVideo(...)`](#recordvideo)
* [`previewVideo(...)`](#previewvideo)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### selectImage(...)

```typescript
selectImage(options?: MediaImageOptions) => Promise<{ images: MediaResult[]; }>
```

选择图片 多图选择

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#mediaimageoptions">MediaImageOptions</a></code> |

**Returns:** <code>Promise&lt;{ images: MediaResult[]; }&gt;</code>

**Since:** 1.0.0

--------------------


### openCamera(...)

```typescript
openCamera(options?: MediaImageOptions) => Promise<MediaResult>
```

拍照 可以 选择是否裁剪

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#mediaimageoptions">MediaImageOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#mediaresult">MediaResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### previewImage(...)

```typescript
previewImage(options: any) => Promise<void>
```

预览图片 也可以预览一组图片 选择的图片 和网络图片

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Since:** 1.0.0

--------------------


### saveImage(...)

```typescript
saveImage(options?: any) => Promise<any>
```

保存图片

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

**Since:** 1.0.0

--------------------


### selectVideo(...)

```typescript
selectVideo(options?: MediaVideoOptions) => Promise<{ videos: MediaResult[]; }>
```

选择视频

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#mediavideooptions">MediaVideoOptions</a></code> |

**Returns:** <code>Promise&lt;{ videos: MediaResult[]; }&gt;</code>

**Since:** 1.0.0

--------------------


### recordVideo(...)

```typescript
recordVideo(options?: MediaVideoOptions) => Promise<MediaResult>
```

录制视频

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#mediavideooptions">MediaVideoOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#mediaresult">MediaResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### previewVideo(...)

```typescript
previewVideo(options: any) => Promise<void>
```

视频预览（本地视频选择后使用版本路径）

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Since:** 1.0.0

--------------------


### Interfaces


#### MediaResult

| Prop                    | Type                | Description                                                                                                                                           | Since |
| ----------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`base64String`**      | <code>string</code> | The base64 encoded string representation of the image, if using CameraResultType.Base64.                                                              | 1.0.0 |
| **`dataUrl`**           | <code>string</code> | The url starting with 'data:image/jpeg;base64,' and the base64 encoded string representation of the image, if using CameraResultType.DataUrl.         | 1.0.0 |
| **`path`**              | <code>string</code> | 如果类型 为 uri 则不需要base64展示 否则 若只使用 base64String dataUrl 展示 与 path 原生上传 结合使用                                                                              | 1.0.0 |
| **`thumbnailPath`**     | <code>number</code> | 视频缩略图 地址 base64 使用dataUrl png 展示                                                                                                                      | 1.0.0 |
| **`originalImagePath`** | <code>string</code> | 只有开启原图 才会有值                                                                                                                                           | 1.0.0 |
| **`webPath`**           | <code>string</code> | webPath returns a path that can be used to set the src attribute of an image for efficient loading and rendering.                                     | 1.0.0 |
| **`exif`**              | <code>any</code>    | Exif data, if any, retrieved from the image or video                                                                                                  | 1.0.0 |
| **`format`**            | <code>string</code> | The format of the image, ex: jpeg, png, gif. iOS and Android only support jpeg. Web supports jpeg and png. gif is only supported if using file input. | 1.0.0 |


#### MediaImageOptions

| Prop                      | Type                                                            | Description                                                                                                                                                                                                                                                            | Since |
| ------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`style`**               | <code>'WHITE' \| 'WECHAT'</code>                                | 主题样式 根据 APP 主题来                                                                                                                                                                                                                                                        | 1.0.0 |
| **`resultType`**          | <code><a href="#mediaresulttype">MediaResultType</a></code>     | 想要返回结果类型                                                                                                                                                                                                                                                               | 1.0.0 |
| **`quality`**             | <code>number</code>                                             | The quality of image to return as JPEG, from 0-100 图片压缩 质量                                                                                                                                                                                                             | 1.0.0 |
| **`language`**            | <code>number</code>                                             | 语言显示 0 中文 1 英文                                                                                                                                                                                                                                                         | 1.0.0 |
| **`maxSelectNum`**        | <code>number</code>                                             | 最大选择数量                                                                                                                                                                                                                                                                 | 1.0.0 |
| **`originalImage`**       | <code>boolean</code>                                            | 是否显示原图                                                                                                                                                                                                                                                                 | 1.0.0 |
| **`compress`**            | <code>boolean</code>                                            | 是否压缩                                                                                                                                                                                                                                                                   | 1.0.0 |
| **`minimumCompressSize`** | <code>number</code>                                             | 最小压缩尺寸 单位 kb 默认 150kb 不压缩                                                                                                                                                                                                                                              | 1.0.0 |
| **`enableCrop`**          | <code>boolean</code>                                            | 是否开启裁剪                                                                                                                                                                                                                                                                 | 1.0.0 |
| **`enableCropOptions`**   | <code><a href="#enablecropoptions">EnableCropOptions</a></code> | 选择头像时 或者其它使用裁剪                                                                                                                                                                                                                                                         | 1.0.0 |
| **`saveToGallery`**       | <code>boolean</code>                                            | Whether to save the photo to the gallery. If the photo was picked from the gallery, it will only be saved if edited. Default: false 预览 网络图片 是否开启 保存                                                                                                                    | 1.0.0 |
| **`width`**               | <code>number</code>                                             | The width of the saved image                                                                                                                                                                                                                                           | 1.0.0 |
| **`height`**              | <code>number</code>                                             | The height of the saved image                                                                                                                                                                                                                                          | 1.0.0 |
| **`correctOrientation`**  | <code>boolean</code>                                            | Whether to automatically rotate the image "up" to correct for orientation in portrait mode Default: true                                                                                                                                                               | 1.0.0 |
| **`direction`**           | <code><a href="#mediadirection">MediaDirection</a></code>       | iOS and Web only: The camera direction. Default: CameraDirection.Rear                                                                                                                                                                                                  | 1.0.0 |
| **`presentationStyle`**   | <code>'fullscreen' \| 'popover'</code>                          | iOS only: The presentation style of the Camera. Defaults to fullscreen.                                                                                                                                                                                                | 1.0.0 |
| **`webUseInput`**         | <code>boolean</code>                                            | Web only: Whether to use the PWA Element experience or file input. The default is to use PWA Elements if installed and fall back to file input. To always use file input, set this to `true`. Learn more about PWA Elements: https://capacitorjs.com/docs/pwa-elements | 1.0.0 |


#### EnableCropOptions

裁剪属性
是否圆形裁剪
宽高尺寸
宽高比例

| Prop                 | Type                 |
| -------------------- | -------------------- |
| **`circleCrop`**     | <code>boolean</code> |
| **`cropWidth`**      | <code>number</code>  |
| **`cropHeight`**     | <code>number</code>  |
| **`aspect_ratio_x`** | <code>number</code>  |
| **`aspect_ratio_y`** | <code>number</code>  |


#### MediaVideoOptions

| Prop                       | Type                             | Description                 | Since |
| -------------------------- | -------------------------------- | --------------------------- | ----- |
| **`style`**                | <code>'WHITE' \| 'WECHAT'</code> |                             |       |
| **`maxSelectNum`**         | <code>number</code>              | 最大选择数量                      | 1.0.0 |
| **`videoMaxSecond`**       | <code>number</code>              | 选择视频 使用 //default 30        | 1.0.0 |
| **`videoMinSecond`**       | <code>number</code>              | 选择视频 使用 //default 5         | 1.0.0 |
| **`thumbnailWidth`**       | <code>number</code>              | 视频 返回缩略图的 大小 默认使用 DataUrl   | 1.0.0 |
| **`thumbnailHeight`**      | <code>number</code>              | Height of thumbnail preview | 1.0.0 |
| **`recordVideoMaxSecond`** | <code>number</code>              | 录制使用 最大时长//default 30       | 1.0.0 |
| **`recordVideoMinSecond`** | <code>number</code>              | 录制视频 最短时长 //default 5       | 1.0.0 |
| **`videoQuality`**         | <code>number</code>              | 视频质量 // 0 or 1 default 1    | 1.0.0 |


### Enums


#### MediaResultType

| Members       | Value                  | Description                        | Since |
| ------------- | ---------------------- | ---------------------------------- | ----- |
| **`Uri`**     | <code>"uri"</code>     | 原生 文件地址 给 原生 使用 一般用于 使用 原生 http 上传 | 1.0.0 |
| **`Base64`**  | <code>"base64"</code>  | base64 值 直接 可以 前端保存到服务器 不带前缀       | 1.0.0 |
| **`DataUrl`** | <code>"dataUrl"</code> | 带前缀的 base64值 可以用于前端直接展示 使用         | 1.0.0 |


#### MediaDirection

| Members     | Value                |
| ----------- | -------------------- |
| **`Rear`**  | <code>"REAR"</code>  |
| **`Front`** | <code>"FRONT"</code> |

</docgen-api>