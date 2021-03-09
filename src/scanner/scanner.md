---
title: Scanner Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/scanner/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/scanner/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`scan(...)`](#scan)
* [`analyzeImage(...)`](#analyzeimage)
* [`generateScanCode(...)`](#generatescancode)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### scan(...)

```typescript
scan(options?: ScannerOptions) => Promise<ScannerResult>
```

扫一扫 功能

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#scanneroptions">ScannerOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#scannerresult">ScannerResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### analyzeImage(...)

```typescript
analyzeImage(options: AnalyzeOptions) => Promise<ScannerResult>
```

直接解析图片
使用本地获取的路径 或者 网络图片路径 或者 base64

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#analyzeoptions">AnalyzeOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#scannerresult">ScannerResult</a>&gt;</code>

**Since:** 1.0.0

--------------------


### generateScanCode(...)

```typescript
generateScanCode(options: ScanCodeOptions) => Promise<{ value: string; }>
```

创建一个二维码参数必须指定 为了出错容易排查
返回 base64展示 本地图片地址
显示需要前端加 imagePrefix = "data:image/png;base64,"

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#scancodeoptions">ScanCodeOptions</a></code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### ScannerResult

| Prop               | Type                                                                                                                                                                                                             | Description                                                                       | Since |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----- |
| **`format`**       | <code>'QR_CODE' \| 'DATA_MATRIX' \| 'UPC_E' \| 'UPC_A' \| 'EAN_8' \| 'EAN_13' \| 'CODE_128' \| 'CODE_39' \| 'CODE_93' \| 'CODABAR' \| 'ITF' \| 'RSS14' \| 'RSS_EXPANDED' \| 'PDF_417' \| 'AZTEC' \| 'MSI'</code> | 编码方式                                                                              | 1.0.0 |
| **`text`**         | <code>string</code>                                                                                                                                                                                              | 二维码 或 条形码 的值                                                                      | 1.0.0 |
| **`base64String`** | <code>string</code>                                                                                                                                                                                              | 生成 图片base64值 如果需要展示 需要添加 前缀 imagePrefix = "data:image/png;base64," + base64String | 1.0.0 |


#### ScannerOptions

| Prop                 | Type                         | Description                                                                               | Since |
| -------------------- | ---------------------------- | ----------------------------------------------------------------------------------------- | ----- |
| **`title`**          | <code>string</code>          | Prompt text. 默认 扫一扫                                                                       | 1.0.0 |
| **`prompt`**         | <code>string</code>          | Prompt text. 默认 请将二维码 放进 扫描框                                                              | 1.0.0 |
| **`needPhoto`**      | <code>boolean</code>         | 是否开启相册 选择 图片 默认 true                                                                      | 1.0.0 |
| **`formats`**        | <code>BarcodeFormat[]</code> | Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`. | 1.0.0 |
| **`beepEnabled`**    | <code>boolean</code>         | 默认关闭铃声提示                                                                                  | 1.0.0 |
| **`vibrateEnabled`** | <code>boolean</code>         | 默认关闭震动提醒                                                                                  | 1.0.0 |


#### AnalyzeOptions

| Prop               | Type                | Description                                                                                                                                       | Since |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`base64String`** | <code>string</code> | The base64 encoded string representation of the image, if using .Base64.                                                                          | 1.0.0 |
| **`url`**          | <code>string</code> | The url starting with 'http or https`                                                                                                             | 1.0.0 |
| **`path`**         | <code>string</code> | 本地图片解析 从相册中选择 If using Uri, the path will contain a full, platform-specific file URL that can be read later using the Meida API or Filsystem API. | 1.0.0 |


#### ScanCodeOptions

| Prop             | Type                                                    | Description                               | Since |
| ---------------- | ------------------------------------------------------- | ----------------------------------------- | ----- |
| **`text`**       | <code>string</code>                                     | 生成二维码 内容                                  | 1.0.0 |
| **`type`**       | <code><a href="#scancodetype">ScanCodeType</a></code>   | 二维码或者 条形码                                 | 1.0.0 |
| **`format`**     | <code><a href="#barcodeformat">BarcodeFormat</a></code> | 编码格式指定使用                                  | 1.0.0 |
| **`width`**      | <code>number</code>                                     | 生成 图片宽度                                   | 1.0.0 |
| **`height`**     | <code>number</code>                                     | 生成图片高度                                    | 1.0.0 |
| **`logoBase64`** | <code>string</code>                                     | 二维码 中间 添加 logo(不带前缀) 注意大小 为 图片的 四分之一 尺寸以内 | 1.0.0 |


### Enums


#### BarcodeFormat

| Members                 | Value                            | Description                                         |
| ----------------------- | -------------------------------- | --------------------------------------------------- |
| **`AZTEC`**             | <code>"AZTEC"</code>             | Aztec 2D barcode format.                            |
| **`CODABAR`**           | <code>"CODABAR"</code>           | CODABAR 1D format.                                  |
| **`CODE_39`**           | <code>"CODE_39"</code>           | Code 39 1D format.                                  |
| **`CODE_93`**           | <code>"CODE_93"</code>           | Code 93 1D format.                                  |
| **`CODE_128`**          | <code>"CODE_128"</code>          | Code 128 1D format.                                 |
| **`DATA_MATRIX`**       | <code>"DATA_MATRIX"</code>       | Data Matrix 2D barcode format.                      |
| **`EAN_8`**             | <code>"EAN_8"</code>             | EAN-8 1D format.                                    |
| **`EAN_13`**            | <code>"EAN_13"</code>            | EAN-13 1D format.                                   |
| **`ITF`**               | <code>"ITF"</code>               | ITF (Interleaved Two of Five) 1D format.            |
| **`MAXICODE`**          | <code>"MAXICODE"</code>          | MaxiCode 2D barcode format.                         |
| **`PDF_417`**           | <code>"PDF_417"</code>           | PDF417 format.                                      |
| **`QR_CODE`**           | <code>"QR_CODE"</code>           | QR Code 2D barcode format.                          |
| **`RSS_14`**            | <code>"RSS_14"</code>            | RSS 14                                              |
| **`RSS_EXPANDED`**      | <code>"RSS_EXPANDED"</code>      | RSS EXPANDED                                        |
| **`UPC_A`**             | <code>"UPC_A"</code>             | UPC-A 1D format.                                    |
| **`UPC_E`**             | <code>"UPC_E"</code>             | UPC-E 1D format.                                    |
| **`UPC_EAN_EXTENSION`** | <code>"UPC_EAN_EXTENSION"</code> | UPC/EAN extension format. Not a stand-alone format. |


#### ScanCodeType

| Members       | Value                  | Description | Since |
| ------------- | ---------------------- | ----------- | ----- |
| **`BARCODE`** | <code>"barcode"</code> | 条形码 类型      | 1.0.0 |
| **`QRCODE`**  | <code>"qrcode"</code>  | 二维码 类型      | 1.0.0 |

</docgen-api>