export type CallbackID = string;

export interface ClearWatchOptions {
  id: CallbackID;
}

export interface LoginResult {
  /**
   * 返回 平台用户信息唯一值.
   *
   * @since 1.0.0
   */
  uid: string;

  /**
   * 同 uid 一样使用 兼容 其它第三方登录使用
   *
   * @since 1.0.0
   */
  openid: string;

  /**
   * 昵称 支付宝没有
   *
   * @since 1.0.0
   */
  name?: string;

  /**
   * 性别 男 | 女 支付宝没有
   *
   * @since 1.0.0
   */
  gender?: string;

  /**
   * 省份 支付宝没有
   *
   * @since 1.0.0
   */
  province?: string;

  /**
   * 城市 支付宝没有
   *
   * @since 1.0.0
   */
  city?: string;
}

export interface ShareMedia {
  /**
   * 应用 appId
   *
   * @since 1.0.0
   */
  appId: string;
  /**
   * 应用 appKey or appSecret
   *
   * @since 1.0.0
   */
  appKey: string;

  /**
   * 分享到媒体
   *
   * @since 1.0.0
   */
  platform: "QQ" | "QZONE" | "WEIXIN" | "WEIXIN_CIRCLE";

  /**
   * 分享样式 文字 图片 网页 音乐 视频
   *
   *
   * @since 1.0.0
   */
  shareData: ShareStyle;
}

export interface ShareStyle {
  shareType: "text" | "image" | "webPage" | "music" | "video" | "minApp";
}

export interface WebStyle extends ShareStyle {
  shareType: "webPage";

  /**
   * 分享网页链接
   *
   * @since 1.0.0
   */
  webUrl: string;

  /**
   * 标题
   *
   * @since 1.0.0
   */
  title?: string;

  /**
   * 缩略图
   *
   * @since 1.0.0
   */
  thumb?: string;

  /**
   * 描述
   *
   * @since 1.0.0
   */
  description?: string;
}

export interface TextStyle extends ShareStyle {
  shareType: "text";

  /**
   * 注：QQ不支持纯文本方式的分享，但QQ空间支持
   *
   * @since 1.0.0
   */
  text: string;
}

export interface ImageStyle extends ShareStyle {
  shareType: "image";

  /**
   * 实际分享的图片大小最好不要超过250k，
   *
   * @since 1.0.0
   */
  image: string;

  /**
   * 缩略图不要超过18k，仅 contentType 为 url 时使用
   *
   * @since 1.0.0
   */
  thumb?: string;

  /**
   *  url:图片为网络路径  , file:图片为本地路径 , base64: 图片没有前缀的 base64值
   *
   * @since 1.0.0
   */
  contentType: "url" | "file" | "base64";
}

export interface MusicStyle extends ShareStyle {
  shareType: "music";

  /**
   * 音乐的播放链接
   *
   * @since 1.0.0
   */
  musicurl: string;

  /**
   * 音乐的标题
   *
   * @since 1.0.0
   */
  title?: string;

  /**
   * 音乐的标题
   *
   * @since 1.0.0
   */
  thumb?: string;

  /**
   * 音乐的描述
   *
   * @since 1.0.0
   */
  description?: string;

  /**
   * 音乐的跳转链接
   *
   * @since 1.0.0
   */
  targetUrl: string;
}

export interface VideoStyle extends ShareStyle {
  shareType: "video";

  /**
   * 视频的播放链接
   *
   * @since 1.0.0
   */
  videoUrl: string;

  /**
   * 音乐的标题
   *
   * @since 1.0.0
   */
  title?: string;

  /**
   * 音乐的标题
   *
   * @since 1.0.0
   */
  thumb?: string;

  /**
   * 音乐的描述
   *
   * @since 1.0.0
   */
  description?: string;
}