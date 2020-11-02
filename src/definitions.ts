
declare module "@capacitor/core" {
    interface PluginRegistry {
        Wifi: WifiPlugin;
        ApLink: ApLinkPlugin;
        ApWifi: ApWifiPlugin;
        CPPlus: CPPlusPlugin;
    }
}

/**
 * 汉枫 配网 sdk 与 Cpp JNI 插件调用 -----------------------------------------------
 */

export interface ApLinkPlugin {
    getContacts(): Promise<{ value: string }>;

    chooseContacts(): Promise<{ value: string }>;
}

export interface ApWifiPlugin {
    getContacts(): Promise<{ contacts: { value: string } }>;

    chooseContacts(): Promise<{ value: string }>;
}
export interface CPPlusPlugin {
    getContacts(): Promise<{ contacts: { value: string } }>;

    chooseContacts(): Promise<{ value: string }>;
}

/**
 * wifi 支持AndroidQ
 */

export interface WifiPlugin {
    wifiEnabled(): Promise<{ isWifiEnabled: boolean }>;
    wifiOnOff(options: {
        isWifiEnabled: boolean;
    }): Promise<{ isWifiEnabled: boolean }>;
    scan(options?: { timeout: number }): Promise<any>;
    connect(options: {
        ssid: string;
        password?: string;
        authType?: string;
    }): Promise<{ ssid: string }>;
    connectPrefix(options: {
        ssid: string;
        password?: string;
    }): Promise<{ ssid: string }>;
    getWifiIP(): Promise<{ ip: string }>;
    getConnectedSSID(): Promise<{ ssid: string }>;
}
