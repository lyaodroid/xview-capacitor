
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
  style?: "WHITE" | "WECHAT";

  resultType: MediaResultType;

  /**
   * The quality of image to return as JPEG, from 0-100
   */
  quality?: number;

  /**
   * 语言显示 0 中文 1 英文
   */
  language?: number;
  /**
   * 最大选择数量
   */
  maxSelectNum?: number;
  /**
   * 是否显示原图
   */
  originalImage?: boolean;

  /**
   * 是否压缩
   */
  compress?: boolean;

  /**
   * 最小压缩尺寸
   */
  minimumCompressSize?: number;

  /**
   * 是否开启裁剪
   */
  enableCrop?: boolean;
  /**
   * 选择头像时 或者其它使用裁剪
   */
  enableCropOptions?: EnableCropOptions;
  /**
   * Whether to save the photo to the gallery.
   * If the photo was picked from the gallery, it will only be saved if edited.
   * Default: false
   */
  saveToGallery?: boolean;
  /**
   * The width of the saved image
   */
  width?: number;
  /**
   * The height of the saved image
   */
  height?: number;
  /**
   * Whether to automatically rotate the image "up" to correct for orientation
   * in portrait mode
   * Default: true
   */
  correctOrientation?: boolean;

  /**
   * iOS and Web only: The camera direction.
   * Default: CameraDirection.Rear
   */
  direction?: MediaDirection;

  /**
   * iOS only: The presentation style of the Camera. Defaults to fullscreen.
   */
  presentationStyle?: "fullscreen" | "popover";

  /**
   * Web only: Whether to use the PWA Element experience or file input. The
   * default is to use PWA Elements if installed and fall back to file input.
   * To always use file input, set this to `true`.
   *
   * Learn more about PWA Elements: https://capacitorjs.com/docs/pwa-elements
   */
  webUseInput?: boolean;
}

export enum MediaDirection {
  Rear = "REAR",
  Front = "FRONT",
}

export enum MediaResultType {
  Uri = "uri",
  Base64 = "base64",
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
   */
  base64String?: string;
  /**
   * The url starting with 'data:image/jpeg;base64,' and the base64 encoded string representation of the image, if using CameraResultType.DataUrl.
   */
  dataUrl?: string;
  /**
   * 如果类型 为 uri 则不需要base64展示  否则 若只使用 base64String
   * dataUrl 展示 与 path 原生上传 结合使用
   */
  path: string;

  /**
   * 视频缩略图 地址 base64 使用dataUrl png 展示
   */
  thumbnailPath?: number;
  /**
   * 只有开启原图 才会有值
   */
  originalImagePath?: string;
  /**
   * webPath returns a path that can be used to set the src attribute of an image for efficient
   * loading and rendering.
   */
  webPath?: string;
  /**
   * Exif data, if any, retrieved from the image or video
   */
  exif?: any;
  /**
   * The format of the image, ex: jpeg, png, gif.
   *
   * iOS and Android only support jpeg.
   * Web supports jpeg and png. gif is only supported if using file input.
   */
  format: string;
}

export interface MediaVideoOptions {
  style?: "WHITE" | "WECHAT";

  /**
   * 最大选择数量
   */
  maxSelectNum?: number;

  /**
   * 选择使用
   */
  //default 30
  videoMaxSecond?: number;
  //default 5
  videoMinSecond?: number;
  /**
   * 视频 返回缩略图的 大小
   * 默认使用 DataUrl
   */
  thumbnailWidth?: number;
  /**
   * Height of thumbnail preview
   */
  thumbnailHeight?: number;

  /**
   * 录制使用
   */
  //default 30
  recordVideoMaxSecond?: number;
  //default 5
  recordVideoMinSecond?: number;
  // 0 or 1 default 1
  videoQuality?: number;
}
