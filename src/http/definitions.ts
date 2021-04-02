import { CallbackID } from "../common";
import { Directory } from "../filesystem";

type HttpResponseType =
  | "arraybuffer"
  | "blob"
  | "json"
  | "text"
  | "document";

export interface HttpPlugin {
  request(options: HttpOptions): Promise<HttpResponse>;

  get(options: HttpOptions): Promise<HttpResponse>;
  post(options: HttpOptions): Promise<HttpResponse>;

  /**
   *  data 中放 file 参数 [filePath(文件路径)] 或者 [{fileKey:"自定义后端解析",filePath:"文件路径"}]
   * @param options
   * @param callback
   * @since 1.0.0
   */
  uploadFiles(
    options: HttpUploadFileOptions,
    callback: HttpProgressCallback
  ): Promise<CallbackID>;

  put(options: HttpOptions): Promise<HttpResponse>;
  patch(options: HttpOptions): Promise<HttpResponse>;
  del(options: HttpOptions): Promise<HttpResponse>;

  setCookie(options: {
    key: string;
    value: any;
    options?: HttpCookieOptions;
  }): Promise<void>;
  getCookie(options: { key: string }): Promise<HttpCookie>;
  getCookies(): Promise<HttpGetCookiesResult>;
  getCookiesMap(): Promise<HttpCookieMap>;
  clearCookies(): Promise<void>;
  deleteCookie(options: { key: string }): Promise<void>;

  uploadFile(options: HttpUploadFileOptions): Promise<HttpResponse>;
  downloadFile(
    options: HttpDownloadFileOptions
  ): Promise<HttpDownloadFileResult>;
}

export type HttpProgressCallback = (
  progress: HttpUploadFileResult,
  err?: any
) => void;

export interface HttpOptions {
  /**
   * 请求接口地址 注意 https 问题
   * 只有 post 和 get uploadFiles 支持
   *
   * @since 1.0.0
   */
  url: string;

  /**
   *
   */
  method?:
    | string
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "HEAD"
    | "DELETE"
    | "OPTIONS";

  params?: HttpParams;

  /**
   * @method uploadFiles 时放 file 参数 [filePath(文件路径)] 或者 [{fileKey:"自定义后端解析",filePath:"文件路径"}]
   *
   * @since 1.0.0
   */
  data?: any;
  headers?: HttpHeaders;
  /**
   * How long to wait to read additional data. Resets each time new
   * data is received
   */
  readTimeout?: number;
  /**
   * How long to wait for the initial connection.
   */
  connectTimeout?: number;
  /**
   * Extra arguments for fetch when running on the web
   */
  webFetchExtra?: RequestInit;
  /**
   * This is used to parse the response appropriately before returning it to
   * the requestee. If the response content-type is "json", this value is ignored.
   */
  responseType?: HttpResponseType;
  /**
   * Use this option if you need to keep the URL unencoded in certain cases
   * (already encoded, azure/firebase testing, etc.). The default is _true_.
   */
  shouldEncodeUrlParams?: boolean;
}

export interface HttpParams {
  [key: string]: string;
}

export interface HttpHeaders {
  [key: string]: string;
}

export interface HttpResponse {
  data: any;
  status: number;
  headers: HttpHeaders;
  url: string;
}

export interface HttpDownloadFileOptions extends HttpOptions {
  /**
   * The path the downloaded file should be moved to
   */
  filePath: string;
  /**
   * Optionally, the directory to put the file in
   *
   * If this option is used, filePath can be a relative path rather than absolute
   */
  fileDirectory?: Directory;
}

export interface HttpUploadFileOptions extends HttpOptions {
  /**
   * The URL to upload the file to
   */
  url: string;
  /**
   * The field name to upload the file with
   */
  name?: string;
  /**
   * For uploading a file on the web, a JavaScript Blob to upload
   */
  blob?: Blob;
  /**
   * For uploading a file natively, the path to the file on disk to upload
   */
  filePath?: string;
  /**
   * Optionally, the directory to look for the file in.
   *
   * If this option is used, filePath can be a relative path rather than absolute
   */
  fileDirectory?: Directory;
}

export interface HttpCookie {
  key: string;
  value: string;
}

export interface HttpCookieMap {
  [key: string]: any;
}

export interface HttpCookieOptions {
  url?: string;
  path?: string;
  expires?: string;
}

export interface HttpGetCookiesResult {
  cookies: HttpCookie[];
}

export interface HttpDownloadFileResult {
  path?: string;
  blob?: Blob;
}

export interface HttpUploadFileResult extends HttpResponse {
  /**
   * 0 ~ 100 百分比
   *
   * @since 1.0.0
   */
  fraction?: number;
  /**
   * 速度
   *
   * @since 1.0.0
   */
  speed?: number;

  /**
   * 文件 总长度 字节
   *
   * @since 1.0.0
   */
  totalSize?: number;

  /**
   * 已经上传 文件 大小 单位 字节
   *
   * @since 1.0.0
   */
  currentSize?: number;

  /**
   * 文件上传 状态
   *
   * @since 1.0.0
   */
  state?: HttpState;
}

export enum HttpState {
  /**
   * 回调 开始 一般 用于 showLoading
   *
   * @since 1.0.0
   */
  START = "start",

  /**
   * 一般 主要 用于 返回当前进度 百分比 fraction
   *
   * @since 1.0.0
   */
  PROGRESS = "progress",

  /**
   * 回调结束  在  success error 之前 用于 结束 loading
   *
   * @since 1.0.0
   */
  FINISH = "finish",

  /**
   * 回调成功 状态 注意处理 其它参数
   *
   * @since 1.0.0
   */
  SUCCESS = "success",

  /**
   * 回调失败 一般 用于错误提示
   *
   * @since 1.0.0
   */
  ERROR = "error",
}
