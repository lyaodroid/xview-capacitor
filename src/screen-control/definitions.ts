export interface ScreenControlPlugin {
    /**
     * 开启隐私 防止屏幕截图
     *
     * 默认 false
     *
     * @since 1.0.0
     */
    enablePrivacy(): Promise<void>;

    /**
     * 关闭隐私 屏幕可以截屏
     *
     * @since 1.0.0
     */
    disablePrivacy(): Promise<void>;

    /**
     * 保持 屏幕唤醒
     *
     * @since 1.0.0
     */
    keepAwake(): Promise<void>;

    /**
     * 允许休眠
     *
     * @since 1.0.0
     */
    allowSleep(): Promise<void>;
}
