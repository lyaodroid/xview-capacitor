import { Intents } from ".";

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
   * 处理回调使用
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
    if (this.mPlatform === "android") {
      let aIntent: AndroidIntent = {
        data: "tel:" + phoneNumber,
      };
      return aIntent;
    } else if (this.mPlatform === "ios") {
      let iIntent: IosIntent = {};
      return iIntent;
    }
  };

  public sendSMS = (
    phoneNumber: string,
    smsMessage: string
  ): IntentOptions => {
    if (this.mPlatform === "android") {
      let aIntent: AndroidIntent = {
        data: "smsto:" + phoneNumber,
        extras: { sms_body: smsMessage },
      };
      return aIntent;
    } else if (this.mPlatform === "ios") {
      let iIntent: IosIntent = {};
      return iIntent;
    }
  };

  public sendEmail = (email: string): IntentOptions => {
    if (this.mPlatform === "android") {
      let aIntent: AndroidIntent = {
        data: "mailto:" + email,
      };
      return aIntent;
    } else if (this.mPlatform === "ios") {
      let iIntent: IosIntent = {};
      return iIntent;
    }
  };

  public talkQQ = (qq: string): IntentOptions => {
    if (this.mPlatform === "android") {
      let aIntent: AndroidIntent = {
        data: "mqqwpa://im/chat?chat_type=wpa&uin=" + qq,
      };
      return aIntent;
    } else if (this.mPlatform === "ios") {
      let iIntent: IosIntent = {};
      return iIntent;
    }
  };

  public openAmap = (url: string): IntentOptions => {
    if (this.mPlatform === "android") {
      let aIntent: AndroidIntent = {
        data: url,
        packageName: "com.autonavi.minimap",
      };
      return aIntent;
    } else if (this.mPlatform === "ios") {
      let iIntent: IosIntent = {};
      return iIntent;
    }
  };

  public openBmap = (url: string): IntentOptions => {
    if (this.mPlatform === "android") {
      let aIntent: AndroidIntent = {
        data: url,
        packageName: "com.baidu.BaiduMap",
      };
      return aIntent;
    } else if (this.mPlatform === "ios") {
      let iIntent: IosIntent = {};
      return iIntent;
    }
  };

  public openAppleMap = (url: string): IntentOptions => {
    if (this.mPlatform === "ios") {
      let iIntent: IosIntent = {};
      return iIntent;
    }
  };

  public openAppSetting = (setting?: string): IntentOptions => {
    if (this.mPlatform === "android") {
      let aIntent: AndroidIntent = {
        action: setting || "android.settings.SETTINGS",
      };
      return aIntent;
    } else if (this.mPlatform === "ios") {
      let iIntent: IosIntent = {};
      return iIntent;
    }
  };
}

export class Test {
  async main() {
    let intent = new IntentFactory("android");
    let result = await Intents.startIntent<CallPhoneResult>(intent.callPhone("123123123"));
    console.log(result.hello);
  }
}

export class CallPhoneResult {
  hello: string;
}
