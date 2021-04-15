import { PluginListenerHandle } from "@capacitor/core";

/**
 * 语音听写
 */
export interface SpeechAsrPlugin {
    /**
     * 开始识别 可以增加配置
     *
     * @since 1.0.0
     */
    start(options?: {}): Promise<void>;

    /**
     * 重新识别
     *
     * @since 1.0.0
     */
    restart(options?: any): Promise<void>;

    /**
     * 暂停识别
     * @param options
     */
    stop(options?: any): Promise<void>;

    /**
     * 取消识别
     *
     * @since 1.0.0
     */
    cancel(options?: any): Promise<void>;

    /**
     * 离开页面时候
     * 释放资源
     *
     * @since 1.0.0
     */
    destroy(): never;

    /**
     * Called when the push notification registration finished with problems.
     *
     * Provides an error with the registration problem.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "recognizeError",
        listenerFunc: (error: any) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Called when the push notification registration finishes without problems.
     *
     * Provides the push notification token.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "eventSpeechRecognize",
        listenerFunc: (recognize: RecognizeStatusChange) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Remove all native listeners for this plugin
     *
     * @since 1.0.0
     */
    removeAllListeners(): Promise<void>;
}

export interface RecognizeStatusChange {
    /**
     * 录音时 振幅 state = start 时有值
     * 0 -> 12
     *
     * @since 1.0.0
     */
    amplitude: 0;

    /**
     * 识别语音状态
     *
     * @since 1.0.0
     */
    state: SpeechState;

    /**
     * state == end 时 识别结束
     * data 有值
     *
     * @since 1.0.0
     */
    data?: string;
}

export enum SpeechState {
    START = "start",
    LISTENING = "listening",
    END = "end",
}

/**
 * 语音合成 tts
 */
export interface SpeechTtsPlugin {}
