import {
    registerWebPlugin,
    WebPlugin,
    PushNotificationDeliveredList,
    PushNotificationToken,
} from "@capacitor/core";
import { PushNotifyPlugin } from "../xview-plugin-definitions";

export class PushNotifyWeb extends WebPlugin implements PushNotifyPlugin {
    constructor() {
        super({
            name: "UPush",
            platforms: ["web"],
        });
    }
    areNotificationsEnabled(): Promise<{ value: boolean; }> {
        throw new Error("Method not implemented.");
    }
    register(options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    removeAllDeliveredNotifications(options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    unRegister(options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getTags(): Promise<{ value: string }> {
        throw new Error("Method not implemented.");
    }
    getPushToken(): Promise<PushNotificationToken> {
        throw new Error("Method not implemented.");
    }

    requestPermission(): Promise<
        import("@capacitor/core").NotificationPermissionResponse
    > {
        throw new Error("Method not implemented.");
    }
    getDeliveredNotifications(): Promise<PushNotificationDeliveredList> {
        throw new Error("Method not implemented.");
    }
    removeDeliveredNotifications(
        delivered: PushNotificationDeliveredList
    ): Promise<void> {
        throw new Error("Method not implemented.");
    }

    bindAlias(options: {
        alias: string;
        aliasType?: string;
    }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    unBindAlias(options: {
        alias: string;
        aliasType?: string;
    }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    addTags(options: { tags: string }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteTags(options: { tags: string }): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

const PushNotify = new PushNotifyWeb();

export { PushNotify };

registerWebPlugin(PushNotify);
