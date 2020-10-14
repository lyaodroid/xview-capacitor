
/**
 * callbackCode 必须原生已经定义
 * 如果a action 使用默认值
 * data or packageName or componentName 必须有值
 * 其它子类 实现 此接口可以实现 不同功能
 *
 *  eventName 就是监听回调  如果 这个有值 就一定要 从这里获取结果
 *  先注册监听 再 startIntent 方法
 */

export interface Intent {
    /**
     * 处理回调使用
     */
    methodName?: string;
}

/**
 * 默认 action: "android.intent.action.VIEW",
 *     category:"android.intent.category.DEFAULT"

 */
export enum IntentFlags {
    FLAG_ACTIVITY_NEW_TASK = 0x10000000,
    FLAG_ACTIVITY_CLEAR_TASK = 0x00008000,
}
export interface AndroidIntent extends Intent {
    flags?: number;
    action?: string;
    category?: string;
    data?: string;
    type?: string;
    packageName?: string;
    extras?: {};
    componentName?: { packageName: string; clazzName: string };
}

export interface IosIntent extends Intent {
    flags?: number;
    action?: string;
    category?: string;
    data?: string;
    type?: string;
    packageName?: string;
    extras?: {};
    componentName?: { packageName: string; clazzName: string };
}

export class IntentFactory {
    private mPlatform: string;

    constructor(platform: string) {
        this.mPlatform = platform;
    }

    public callPhone = (phoneNumber: string): Intent => {
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

    public sendSMS = (phoneNumber: string, smsMessage: string): Intent => {
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

    public sendEmail = (email: string): Intent => {
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

    public talkQQ = (qq: string): Intent => {
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

    public openAmap = (url: string): Intent => {
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

    public openBmap = (url: string): Intent => {
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

    public openAppleMap = (url: string): Intent => {
        if (this.mPlatform === "ios") {
            let iIntent: IosIntent = {};
            return iIntent;
        }
    };

    public openAppSetting = (setting?: string): Intent => {
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
/**