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
  launchMiniProgram(options: any): void;

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
