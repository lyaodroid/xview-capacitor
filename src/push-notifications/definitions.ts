import type { PluginListenerHandle } from "@capacitor/core";
import { PermissionStatus } from "./definitions-common";

export interface PushNotificationsPlugin {
    /**
     * Register the app to receive push notifications.
     *
     * This method will trigger the `'registration'` event with the push token or
     * `'registrationError'` if there was a problem. It does prompt the user for
     * notification permissions, use `requestPermissions()` first.
     *
     * @since 1.0.0
     */
    register(): Promise<void>;

    /**
     * Get a list of notifications that are visible on the notifications screen.
     *
     * @since 1.0.0
     */
    getDeliveredNotifications(): Promise<PushNotificationDeliveredList>;

    /**
     * Remove the specified notifications from the notifications screen.
     *
     * @since 1.0.0
     */
    removeDeliveredNotifications(
        delivered: PushNotificationDeliveredList
    ): Promise<void>;

    /**
     * Remove all the notifications from the notifications screen.
     *
     * @since 1.0.0
     */
    removeAllDeliveredNotifications(): Promise<void>;

    /**
     * Check permission to receive push notifications.
     *
     * @since 1.0.0
     */
    checkPermissions(): Promise<PermissionStatus>;

    /**
     * Request permission to receive push notifications.
     *
     * @since 1.0.0
     */
    requestPermissions(): Promise<PermissionStatus>;

    /**
     * Called when the push notification registration finishes without problems.
     *
     * Provides the push notification token.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "registration",
        listenerFunc: (token: PushNotificationToken) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Called when the push notification registration finished with problems.
     *
     * Provides an error with the registration problem.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "registrationError",
        listenerFunc: (error: any) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Called when the device receives a push notification.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "pushNotificationReceived",
        listenerFunc: (notification: PushNotificationSchema) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Called when an action is performed on a push notification.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "pushNotificationActionPerformed",
        listenerFunc: (
            notification: PushNotificationActionPerformed
        ) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Remove all native listeners for this plugin.
     *
     * @since 1.0.0
     */
    removeAllListeners(): void;

    /**
     * 应用退出账号时
     *
     * @since 1.0.0
     */

    unRegister(): Promise<void>;

    /**
     * 绑定 别名 umeng 会用到 aliasType 注意老项目迁移
     *
     * @since 1.0.0
     */
    bindAlias(options: {
        alias: string;
        aliasType?: string;
    }): Promise<void>;

    /**
     * 退出账号时使用
     * 解绑 别名 umeng 会用到 aliasType 注意老项目迁移
     *
     * @since 1.0.0
     */
    unBindAlias(options: {
        alias: string;
        aliasType?: string;
    }): Promise<void>;

    /**
     * 获取标签 value = "tag1,tag2....tags"
     * 添加标签 用 “,”  分割
     *
     * @since 1.0.0
     */
    addTags(options: { value: string }): Promise<void>;

    /**
     * 获取标签 tags = "tag1,tag2....tags"
     *
     * @since 1.0.0
     */
    getTags(): Promise<{ value: string }>;

    /**
     * 删除 标签 value = "tag1,tag2....tags"
     *
     * @since 1.0.0
     */
    deleteTags(options: { value: string }): Promise<void>;

    /**
     * 获取推送token 同时 监听注册 token 也被改变
     *
     * @since 1.0.0
     */
    getPushToken(): Promise<PushNotificationToken>;
}

export interface PushNotificationSchema {
    /**
     * The notification title.
     *
     * @since 1.0.0
     */
    title?: string;

    /**
     * The notification subtitle.
     *
     * @since 1.0.0
     */
    subtitle?: string;

    /**
     * The main text payload for the notification.
     *
     * @since 1.0.0
     */
    body?: string;

    /**
     * The notification identifier.
     *
     * @since 1.0.0
     */
    id: string;

    /**
     * The number to display for the app icon badge.
     *
     * @since 1.0.0
     */
    badge?: number;

    /**
     * @since 1.0.0
     */
    notification?: any;

    /**
     * @since 1.0.0
     */
    data: any;

    /**
     * @since 1.0.0
     */
    click_action?: string;

    /**
     * @since 1.0.0
     */
    link?: string;

    /**
     * Set the group identifier for notification grouping
     *
     * Only available on Android. Works like `threadIdentifier` on iOS.
     *
     * @since 1.0.0
     */
    group?: string;

    /**
     * Designate this notification as the summary for an associated `group`.
     *
     * Only available on Android.
     *
     * @since 1.0.0
     */
    groupSummary?: boolean;
}

export interface PushNotificationActionPerformed {
    /**
     * @since 1.0.0
     */
    actionId: string;

    /**
     * @since 1.0.0
     */
    inputValue?: string;

    /**
     * @since 1.0.0
     */
    notification: PushNotificationSchema;
}

export interface PushNotificationToken {
    /**
     * @since 1.0.0
     */
    value: string;
}

export interface PushNotificationDeliveredList {
    /**
     * @since 1.0.0
     */
    notifications: PushNotificationSchema[];
}
