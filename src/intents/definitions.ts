export interface IntentsPlugin {
  /**
   * 常用打开一些 设置 和 开关 和 app
   *
   * @since 1.0.0
   */
  startIntent<T>(options: IntentOptions): Promise<T>;
}

/**
 * callbackCode 必须原生已经定义
 * 如果a action 使用默认值
 * data or packageName or componentName 必须有值
 * 其它子类 实现 此接口可以实现 不同功能
 *
 *  eventName 就是监听回调  如果 这个有值 就一定要 从这里获取结果
 *  先注册监听 再 startIntent 方法
 *
 */
export interface IntentOptions {
  /**
   * 处理回调使用 如果有值 需要 回调 如果没有
   */
  methodName?: string;
}

export enum IntentFlags {
  FLAG_ACTIVITY_NEW_TASK = 268435456,
  FLAG_ACTIVITY_CLEAR_TASK = 32768,
}
export interface AndroidIntent extends IntentOptions {
  flags?: number;
  action?: string;
  category?: string;
  data?: string;
  type?: string;
  packageName?: string;
  extras?: {};
  componentName?: {
    packageName: string;
    clazzName: string;
  };
}
export interface IosIntent extends IntentOptions {
  flags?: number;
  action?: string;
  category?: string;
  data?: string;
  type?: string;
  packageName?: string;
  extras?: {};
  componentName?: {
    packageName: string;
    clazzName: string;
  };
}

export class IntentFactory {
  private mPlatform: string;

  constructor(platform: string) {
    this.mPlatform = platform;
  }

  public callPhone = (phoneNumber: string): IntentOptions => {
    let intent = <IntentOptions>{};
    if (this.mPlatform === "android") {
      intent = <AndroidIntent>{
        data: "tel:" + phoneNumber,
      };
    } else if (this.mPlatform === "ios") {
      intent = <IosIntent>{
        data: "tel:" + phoneNumber,
      };
    }
    return intent;
  };

  public sendSMS = (
    phoneNumber: string,
    smsMessage: string
  ): IntentOptions => {
    let intent = <IntentOptions>{};
    if (this.mPlatform === "android") {
      intent = <AndroidIntent>{
        data: "smsto:" + phoneNumber,
        extras: { sms_body: smsMessage },
      };
    } else if (this.mPlatform === "ios") {
      intent = <IosIntent>{
        data: "sms://" + phoneNumber + "&" + smsMessage
      };
    }
    return intent;
  };

  public sendEmail = (email: string): IntentOptions => {
    let intent = <IntentOptions>{};
    if (this.mPlatform === "android") {
      intent = <AndroidIntent>{
        data: "mailto:" + email,
      };
    } else if (this.mPlatform === "ios") {
      intent = <IosIntent>{
        data: "mailto:" + email,
      };
    }
    return intent;
  };

  public talkQQ = (qq: string): IntentOptions => {
    let intent = <IntentOptions>{};
    if (this.mPlatform === "android") {
      intent = <AndroidIntent>{
        data: "mqqwpa://im/chat?chat_type=wpa&uin=" + qq,
      };
    } else if (this.mPlatform === "ios") {
      intent = <IosIntent>{
        data: "mqqwpa://im/chat?chat_type=wpa&uin=" + qq,
      };
    }
    return intent;
  };

  public openAmap = (url: string): IntentOptions => {
    let intent = <IntentOptions>{};
    if (this.mPlatform === "android") {
      intent = <AndroidIntent>{
        data: url,
        packageName: "com.autonavi.minimap",
      };
    } else if (this.mPlatform === "ios") {
      intent = <IosIntent>{
        data: url,
      };
    }
    return intent;
  };

  public openBmap = (url: string): IntentOptions => {
    let intent = <IntentOptions>{};
    if (this.mPlatform === "android") {
      intent = <AndroidIntent>{
        data: url,
        packageName: "com.baidu.BaiduMap",
      };
    } else if (this.mPlatform === "ios") {
      intent = <IosIntent>{
        data: url,
      };
    }
    return intent;
  };

  public openAppleMap = (url: string): IntentOptions => {
    let iIntent: IosIntent = {data:url};
    return iIntent;
  };

  public openAppSetting = (setting?: string): IntentOptions => {
    let intent = <IntentOptions>{};
    if (this.mPlatform === "android") {
      intent = <AndroidIntent>{
        action: setting || "android.settings.SETTINGS",
      };
    } else if (this.mPlatform === "ios") {
      intent = <IosIntent>{
        data: setting || "setting"
      };
    }
    return intent;
  };
}