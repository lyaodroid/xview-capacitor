import {
    registerWebPlugin,
     WebPlugin
} from "@capacitor/core";
import { Intent, MobilePlugin, ShareOptions } from "../xview-plugin-definitions";

export class MobileWeb extends WebPlugin implements MobilePlugin {
    constructor() {
        super({
            name: "Mobile",
            platforms: ["web"],
        });
    }
    getAppsInfo(options?: any): Promise<{ values: any[]}> {
        throw new Error("Method not implemented.");
    }
    hideApp(): never {
        throw new Error("Method not implemented.");
    }
    exitApp(): never {
        throw new Error("Method not implemented.");
    }
    areNotificationsEnabled(options?: any): Promise<{ value: boolean; }> {
        throw new Error("Method not implemented.");
    }
    openNotification(options?: any): Promise<{ value?: boolean; }> {
        throw new Error("Method not implemented.");
    }
    isLocationServiceEnabled(options?: any): Promise<{ value: boolean; }> {
        throw new Error("Method not implemented.");
    }
    openLocationService(options?: any): Promise<{ value?: boolean; }> {
        throw new Error("Method not implemented.");
    }
    toPermissionSetting(options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    checkPermission(options: { permissions: any[]; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    isAppInstalled(options?: any): Promise<{ value: boolean; }> {
        throw new Error("Method not implemented.");
    }
    cleanCache(options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getCacheSize(options?: any): Promise<{ value: string; }> {
        throw new Error("Method not implemented.");
    }
    flashlightStatus(options: { status?: "GET" | "SET"; isOn?: boolean; }): Promise<{ value: boolean; }> {
        throw new Error("Method not implemented.");
    }
    screenShot(options?: { isDeleteStatusBar: boolean; }): Promise<{ value: string; }> {
        throw new Error("Method not implemented.");
    }
    share(options: ShareOptions): Promise<any> {
        throw new Error("Method not implemented.");
    }
    startIntent<T>(options: Intent): Promise<T> {
        throw new Error("Method not implemented.");
    }
 
}

const Mobile = new MobileWeb();

export { Mobile };
registerWebPlugin(Mobile);
