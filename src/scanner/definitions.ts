export interface ScannerPlugin {
  /**
   * 扫一扫 功能
   *
   * @since 1.0.0
   */
  scan(options?: ScannerOptions): Promise<ScannerResult>;

  /**
   * 直接解析图片
   * 使用本地获取的路径 或者 网络图片路径 或者 base64
   *
   * @since 1.0.0
   */
  analyzeImage(options: AnalyzeOptions): Promise<ScannerResult>;

  /**
   * 创建一个二维码参数必须指定 为了出错容易排查
   * 返回 base64展示 本地图片地址
   * 显示需要前端加 imagePrefix = "data:image/png;base64,"
   *
   * @since 1.0.0
   */
  generateImageCode(options: ImageCodeOptions): Promise<{ value: string }>;
}

export interface ScannerOptions {
  /**
   * Prompt text. 默认 扫一扫
   *
   * @since 1.0.0
   */
  title?: string;

  /**
   * Prompt text. 默认 请将二维码 放进 扫描框
   *
   * @since 1.0.0
   */
  prompt?: string;

  /**
   * 是否开启相册 选择 图片 默认 true
   *
   * @since 1.0.0
   */
  needPhoto?: boolean;

  /**
   * Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`.
   *
   * @method scan 方法 使用
   *
   * @since 1.0.0
   */
  formats?: BarcodeFormat[];

  /**
   * 默认关闭铃声提示
   *
   * @method scan 方法 使用
   *
   * @since 1.0.0
   */
  beepEnabled?: boolean;

  /**
   * 默认关闭震动提醒
   *
   * @method scan 方法 使用
   *
   * @since 1.0.0
   */
  vibrateEnabled?: boolean;
}

export interface AnalyzeOptions {
  /**
   * The base64 encoded string representation of the image, if using .Base64.
   *
   * @since 1.0.0
   */
  base64String?: string;
  /**
   * The url starting with 'http or https`
   *
   * @since 1.0.0
   */
  url?: string;

  /**
   * 本地图片解析 从相册中选择
   * If using Uri, the path will contain a full,
   * platform-specific file URL that can be read later using the Meida API or Filsystem API.
   *
   * @since 1.0.0
   */
  path?: string;
}

export interface ImageCodeOptions {
  /**
   * 生成二维码 内容
   *
   * @since 1.0.0
   */
  text: string;

  /**
   * 二维码或者 条形码
   *
   * @since 1.0.0
   */
  type?: ScanCodeType;

  /**
   * 编码格式指定使用
   *
   * @since 1.0.0
   */
  format?: BarcodeFormat;

  /**
   * 生成 图片宽度
   *
   * @since 1.0.0
   */
  width?: number;

  /**
   * 生成图片高度
   *
   * @since 1.0.0
   */
  height?: number;

  /**
   * 二维码 中间 添加 logo(不带前缀) 注意大小 为 图片的 四分之一 尺寸以内
   *
   * @since 1.0.0
   */
  logoBase64?: string;
}

export enum ScanCodeType {
  /**
   * 条形码 类型
   *
   * @since 1.0.0
   */
  BARCODE = "barcode",

  /**
   * 二维码 类型
   *
   * @since 1.0.0
   */
  QRCODE = "qrcode",
}

export enum BarcodeFormat {
  /** Aztec 2D barcode format. */
  AZTEC = "AZTEC",

  /** CODABAR 1D format. */
  CODABAR = "CODABAR",

  /** Code 39 1D format. */
  CODE_39 = "CODE_39",

  /** Code 93 1D format. */
  CODE_93 = "CODE_93",

  /** Code 128 1D format. */
  CODE_128 = "CODE_128",

  /** Data Matrix 2D barcode format. */
  DATA_MATRIX = "DATA_MATRIX",

  /** EAN-8 1D format. */
  EAN_8 = "EAN_8",

  /** EAN-13 1D format. */
  EAN_13 = "EAN_13",

  /** ITF (Interleaved Two of Five) 1D format. */
  ITF = "ITF",

  /** MaxiCode 2D barcode format. */
  MAXICODE = "MAXICODE",

  /** PDF417 format. */
  PDF_417 = "PDF_417",

  /** QR Code 2D barcode format. */
  QR_CODE = "QR_CODE",

  /** RSS 14 */
  RSS_14 = "RSS_14",

  /** RSS EXPANDED */
  RSS_EXPANDED = "RSS_EXPANDED",

  /** UPC-A 1D format. */
  UPC_A = "UPC_A",

  /** UPC-E 1D format. */
  UPC_E = "UPC_E",

  /** UPC/EAN extension format. Not a stand-alone format. */
  UPC_EAN_EXTENSION = "UPC_EAN_EXTENSION",
}

export interface ScannerResult {
  /**
   * 编码方式
   *
   * @since 1.0.0
   */
  format?:
    | "QR_CODE"
    | "DATA_MATRIX"
    | "UPC_E"
    | "UPC_A"
    | "EAN_8"
    | "EAN_13"
    | "CODE_128"
    | "CODE_39"
    | "CODE_93"
    | "CODABAR"
    | "ITF"
    | "RSS14"
    | "RSS_EXPANDED"
    | "PDF_417"
    | "AZTEC"
    | "MSI";

  /**
   * 二维码 或 条形码 的值
   *
   * @since 1.0.0
   */
  text?: string;

  /**
   * 生成 图片base64值  如果需要展示 需要添加 前缀
   * imagePrefix = "data:image/png;base64," + base64String
   *
   * @since 1.0.0
   */
  base64String?: string;
}
