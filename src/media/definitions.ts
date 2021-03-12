export interface MediaPlugin {
  /**
   * 选择图片 多图选择
   *
   * @since 1.0.0
   */
  selectImage(
    options?: MediaImageOptions
  ): Promise<{ images: MediaResult[] }>;

  /**
   * 拍照 可以 选择是否裁剪
   *
   * @since 1.0.0
   */
  openCamera(options?: MediaImageOptions): Promise<MediaResult>;

  /**
   * 预览图片 也可以预览一组图片 选择的图片 和网络图片
   *
   * @since 1.0.0
   */
  previewImage(options: any): Promise<void>;

  /**
   * 保存图片
   *
   * @since 1.0.0
   */
  saveImage(options?: any): Promise<any>;

  /**
   * 选择视频
   *
   * @since 1.0.0
   */
  selectVideo(
    options?: MediaVideoOptions
  ): Promise<{ videos: MediaResult[] }>;

  /**
   * 录制视频
   *
   * @since 1.0.0
   */
  recordVideo(options?: MediaVideoOptions): Promise<MediaResult>;

  /**
   * 视频预览（本地视频选择后使用版本路径）
   *
   * @since 1.0.0
   */
  previewVideo(options: any): Promise<void>;
}

export interface MediaImageOptions {
  /**
   * 主题样式 根据 APP 主题来
   *
   * @since 1.0.0
   */
  style?: "WHITE" | "WECHAT";

  /**
   * 想要返回结果类型
   *
   * @since 1.0.0
   */
  resultType: MediaResultType;

  /**
   * The quality of image to return as JPEG, from 0-100
   * 图片压缩 质量
   *
   * @since 1.0.0
   */
  quality?: number;

  /**
   * 语言显示 0 中文 1 英文
   *
   * @since 1.0.0
   */
  language?: number;
  /**
   * 最大选择数量
   *
   * @since 1.0.0
   */
  maxSelectNum?: number;
  /**
   * 是否显示原图
   *
   * @since 1.0.0
   */
  originalImage?: boolean;

  /**
   * 是否压缩
   *
   * @since 1.0.0
   */
  compress?: boolean;

  /**
   * 最小压缩尺寸 单位 kb 默认 150kb 不压缩
   *
   * @since 1.0.0
   */
  minimumCompressSize?: number;

  /**
   * 是否开启裁剪
   *
   * @since 1.0.0
   */
  enableCrop?: boolean;
  /**
   * 选择头像时 或者其它使用裁剪
   *
   * @since 1.0.0
   */
  enableCropOptions?: EnableCropOptions;
  /**
   * Whether to save the photo to the gallery.
   * If the photo was picked from the gallery, it will only be saved if edited.
   * Default: false 预览 网络图片 是否开启 保存
   *
   * @since 1.0.0
   */
  saveToGallery?: boolean;
  /**
   * The width of the saved image
   *
   * @since 1.0.0
   */
  width?: number;
  /**
   * The height of the saved image
   *
   * @since 1.0.0
   */
  height?: number;
  /**
   * Whether to automatically rotate the image "up" to correct for orientation
   * in portrait mode
   * Default: true
   *
   * @since 1.0.0
   */
  correctOrientation?: boolean;

  /**
   * iOS and Web only: The camera direction.
   * Default: CameraDirection.Rear
   *
   * @since 1.0.0
   */
  direction?: MediaDirection;

  /**
   * iOS only: The presentation style of the Camera. Defaults to fullscreen.
   *
   * @since 1.0.0
   */
  presentationStyle?: "fullscreen" | "popover";

  /**
   * Web only: Whether to use the PWA Element experience or file input. The
   * default is to use PWA Elements if installed and fall back to file input.
   * To always use file input, set this to `true`.
   *
   * Learn more about PWA Elements: https://capacitorjs.com/docs/pwa-elements
   *
   * @since 1.0.0
   */
  webUseInput?: boolean;
}

export enum MediaDirection {
  Rear = "REAR",
  Front = "FRONT",
}

export enum MediaResultType {
  /**
   * 原生 文件地址 给 原生 使用 一般用于 使用 原生 http 上传
   *
   * @since 1.0.0
   */
  Uri = "uri",
  /**
   * base64 值 直接 可以 前端保存到服务器
   *  不带前缀
   *
   * @since 1.0.0
   */
  Base64 = "base64",

  /**
   * 带前缀的 base64值  可以用于前端直接展示 使用
   *
   * @since 1.0.0
   */
  DataUrl = "dataUrl",
}

/**
 * 裁剪属性
 * 是否圆形裁剪
 * 宽高尺寸
 * 宽高比例
 */
export interface EnableCropOptions {
  circleCrop?: boolean;
  cropWidth: number;
  cropHeight: number;
  aspect_ratio_x: number;
  aspect_ratio_y: number;
}

export interface MediaResult {
  /**
   * The base64 encoded string representation of the image, if using CameraResultType.Base64.
   *
   * @since 1.0.0
   */
  base64String?: string;
  /**
   * The url starting with 'data:image/jpeg;base64,' and the base64 encoded string representation of the image, if using CameraResultType.DataUrl.
   *
   * @since 1.0.0
   */
  dataUrl?: string;
  /**
   * 如果类型 为 uri 则不需要base64展示  否则 若只使用 base64String
   * dataUrl 展示 与 path 原生上传 结合使用
   *
   * @since 1.0.0
   */
  path: string;

  /**
   * 视频缩略图 地址 base64 使用dataUrl png 展示
   *
   * @since 1.0.0
   */
  thumbnailPath?: number;
  /**
   * 只有开启原图 才会有值
   *
   * @since 1.0.0
   */
  originalImagePath?: string;
  /**
   * webPath returns a path that can be used to set the src attribute of an image for efficient
   * loading and rendering.
   *
   * @since 1.0.0
   */
  webPath?: string;
  /**
   * Exif data, if any, retrieved from the image or video
   *
   * @since 1.0.0
   */
  exif?: any;
  /**
   * The format of the image, ex: jpeg, png, gif.
   *
   * iOS and Android only support jpeg.
   * Web supports jpeg and png. gif is only supported if using file input.
   *
   * @since 1.0.0
   */
  format: string;
}

export interface MediaVideoOptions {
  style?: "WHITE" | "WECHAT";

  /**
   * 最大选择数量
   *
   * @since 1.0.0
   */
  maxSelectNum?: number;

  /**
   *  选择视频 使用 //default 30
   *
   * @since 1.0.0
   */
  videoMaxSecond?: number;

  /**
   * 选择视频 使用  //default 5
   *
   * @since 1.0.0
   */
  videoMinSecond?: number;
  /**
   * 视频 返回缩略图的 大小
   * 默认使用 DataUrl
   * 
   * @since 1.0.0
   */
  thumbnailWidth?: number;
  /**
   * Height of thumbnail preview
   * 
   * @since 1.0.0
   */
  thumbnailHeight?: number;

  /**
   * 录制使用 最大时长//default 30
   * 
   * @since 1.0.0
   */
  recordVideoMaxSecond?: number;

  /**
   * 录制视频 最短时长 //default 5
   * 
   * @since 1.0.0
   */
  recordVideoMinSecond?: number;
  
  /**
   * 视频质量 // 0 or 1 default 1
   * 
   * @since 1.0.0
   */
  videoQuality?: number;
}
