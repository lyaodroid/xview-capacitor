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
    recognize(): Promise<void>;

    /**
     * 重新识别
     *
     * @since 1.0.0
     */
    resetRecognize(options?: any): Promise<void>;

    /**
     * 暂停识别
     *
     * @since 1.0.0
     */
    stop(): Promise<void>;

    /**
     * 取消识别
     *
     * @since 1.0.0
     */
    cancel(): Promise<void>;

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
        listenerFunc: (error: SpeechAsrError) => void
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

export interface SpeechAsrError {
    code: number;
    message: string;
}

export interface RecognizeStatusChange {
    /**
     * 录音时 振幅 state = start 时有值
     * 0 -> 14
     *
     * @since 1.0.0
     */
    amplitude: 0;

    /**
     * 识别语音状态
     *
     * @since 1.0.0
     */
    state: RecognizeState;

    /**
     * state == end 时 识别结束
     * data 有值
     *
     * @since 1.0.0
     */
    data?: string;
}

export enum RecognizeState {
    START = "start",
    LISTENING = "listening",
    END = "end",
    COMPLETE = "complete",
}
