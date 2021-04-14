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

type Platform = "android" | "ios";
export class IntentFactory {
    private mPlatform: Platform;

    constructor(platform: Platform) {
        this.mPlatform = platform;
    }

    public callPhone = (phoneNumber: string): IntentOptions => {
        let intent = <IntentOptions>{
            methodName: "callPhone",
        };
        if (this.mPlatform === "android") {
            let aIntent = <AndroidIntent>{
                data: "tel:" + phoneNumber,
            };
            Object.assign(intent, aIntent);
        } else if (this.mPlatform === "ios") {
            let iIntent = <IosIntent>{
                data: "tel:" + phoneNumber,
                methodName: "callPhone",
            };
            Object.assign(intent, iIntent);
        }
        return intent;
    };

    public sendSMS = (
        phoneNumber: string,
        smsMessage: string
    ): IntentOptions => {
        let intent = <IntentOptions>{
            methodName: "sendSMS",
        };
        if (this.mPlatform === "android") {
            let aIntent = <AndroidIntent>{
                data: "smsto:" + phoneNumber,
                extras: { sms_body: smsMessage },
            };
            Object.assign(intent, aIntent);
        } else if (this.mPlatform === "ios") {
            let iIntent = <IosIntent>{
                data: "sms://" + phoneNumber + "&" + smsMessage,
            };
            Object.assign(intent, iIntent);
        }
        return intent;
    };

    public sendEmail = (email: string): IntentOptions => {
        let intent = <IntentOptions>{
            methodName: "sendEmail",
        };
        if (this.mPlatform === "android") {
            let aIntent = <AndroidIntent>{
                data: "mailto:" + email,
            };
            Object.assign(intent, aIntent);
        } else if (this.mPlatform === "ios") {
            let iIntent = <IosIntent>{
                data: "mailto:" + email,
            };
            Object.assign(intent, iIntent);
        }
        return intent;
    };

    public talkQQ = (qq: string): IntentOptions => {
        let intent = <IntentOptions>{
            methodName: "talkQQ",
        };
        if (this.mPlatform === "android") {
            let aIntent = <AndroidIntent>{
                data: "mqqwpa://im/chat?chat_type=wpa&uin=" + qq,
            };
            Object.assign(intent, aIntent);
        } else if (this.mPlatform === "ios") {
            let iIntent = <IosIntent>{
                data: "mqqwpa://im/chat?chat_type=wpa&uin=" + qq,
            };
            Object.assign(iIntent);
        }
        return intent;
    };

    public openAmap = (url: string): IntentOptions => {
        let intent = <IntentOptions>{
            methodName: "openAmap",
        };
        if (this.mPlatform === "android") {
            let aIntent = <AndroidIntent>{
                data: url,
                packageName: "com.autonavi.minimap",
            };
            Object.assign(intent, aIntent);
        } else if (this.mPlatform === "ios") {
            let iIntent = <IosIntent>{
                data: url,
            };
            Object.assign(intent, iIntent);
        }
        return intent;
    };

    public openBmap = (url: string): IntentOptions => {
        let intent = <IntentOptions>{
            methodName: "openBmap",
        };
        if (this.mPlatform === "android") {
            let aIntent = <AndroidIntent>{
                data: url,
                packageName: "com.baidu.BaiduMap",
            };
            Object.assign(intent, aIntent);
        } else if (this.mPlatform === "ios") {
            let iIntent = <IosIntent>{
                data: url,
            };
            Object.assign(intent, iIntent);
        }
        return intent;
    };

    public openAppleMap = (url: string): IntentOptions => {
        let iIntent: IosIntent = {
            data: url,
            methodName: "openAppleMap",
        };
        return iIntent;
    };

    public openAppSetting = (
        setting?: string,
        methodName = "openAppSetting"
    ): IntentOptions => {
        let intent = <IntentOptions>{
            methodName: methodName,
        };
        if (this.mPlatform === "android") {
            let aIntent = <AndroidIntent>{
                action: setting || "android.settings.SETTINGS",
            };
            Object.assign(intent, aIntent);
        } else if (this.mPlatform === "ios") {
            let iIntent = <IosIntent>{
                data: setting || "setting",
            };
            Object.assign(intent, iIntent);
        }
        return intent;
    };
}
