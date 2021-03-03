import type { PluginListenerHandle } from "@capacitor/core";

import {
  LoginResult,
  ShareMedia,
  ShareResult,
  PayResult,
} from "../common";

export interface WeChatPlugin {
  /**
   * 微信 登录
   *
   * @since 1.0.0
   */
  login(options: WeChatLoginOptions): Promise<LoginResult>;

  /**
   * 微信 分享
   *
   * @since 1.0.0
   */
  share(options: ShareMedia): Promise<ShareResult>;

  /**
   * 微信 支付
   *
   * @since 1.0.0
   */
  pay(options: WeChatPayOptions): Promise<PayResult>;

  /**
   * 微信 拉起小程序
   *
   * @since 1.0.0
   */
  launchMiniProgram(options: MiniProgramOptions): Promise<void>;

  addListener(
    eventName: "app-parameter",
    listenerFunc: (args: any) => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  addListener(
    eventName: "app-parameter-share",
    listenerFunc: (args: any) => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Remove all native listeners for this plugin
   */
  removeAllListeners(): Promise<void>;
}

export interface WeChatLoginOptions {
  /**
   * 应用 appId
   *
   * @since 1.0.0
   */
  appId: string;

  /**
   * 应用 appsecret
   *
   * @since 1.0.0
   */
  appKey: string;
}

export interface WeChatPayOptions {
  /**
   * 微信开放平台审核通过的应用appid ，为二级商户申请的应用appid。
   *
   * @since 1.0.0
   */
  appId: string;

  /**
   * 请填写商户号mchid对应的值。
   *
   * @since 1.0.0
   */
  partnerId: string;

  /**
   * 微信返回的支付交易会话id。
   *
   * @since 1.0.0
   */
  prepayId: string;

  /**
   * 暂填写固定值Sign=WXPay
   *
   * @since 1.0.0
   */
  packageValue: string;

  /**
   * 随机字符串，不长于32位。推荐随机数生成算法。
   */
  nonceStr: string;

  /**
   * 时间戳
   *
   * @since 1.0.0
   */
  timeStamp: string;

  /**
   * 是	签名，使用字段appId、timeStamp、nonceStr、prepayid计算得出的签名值
   * 注意：取值RSA格式
   */
  sign: string;
}


export interface MiniProgramOptions {
  /**
   * 填移动应用(App)的 AppId，非小程序的 AppID
   *
   * @since 1.0.0
   */
  appId: string;

  /**
   * 填小程序原始id (gh_******)
   *
   * @since 1.0.0
   */
  userName: string;
  /**
   * 拉起小程序页面的可带参路径，不填默认拉起小程序首页，
   *
   * @since 1.0.0
   */
  path: string | "";

  /**
   * 小程序 版本0 正式 ， 1 测试 2 预览版 
   *
   * @since 1.0.0
   */
  miniType: 0 | 1 | 2;
}
