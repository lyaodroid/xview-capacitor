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
        listenerFunc: (error: SpeechError) => void
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

export interface SpeechError {
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

/**
 * 语音合成 tts
 */
export interface SpeechTtsPlugin {
    /**
     * Whether a Screen Reader is currently active.
     *
     * This method is not supported on web (it is not possible to detect Screen
     * Readers).
     *
     * @since 1.0.0
     */
    isEnabled(): Promise<{ value: boolean }>;
    /**
     * Text-to-Speech functionality.
     *
     * This function will only work if a Screen Reader is currently active.
     *
     * On web, browsers must support the [SpeechSynthesis
     * API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis), or
     * this method will throw an error.
     *
     * For more text-to-speech capabilities, please see the [Capacitor Community
     * Text-to-Speech
     * plugin](https://github.com/capacitor-community/text-to-speech).
     *
     * @since 1.0.0
     */
    speak(options: SpeakTtsOptions): Promise<void>;

    /**
     * 暂停
     *
     * @since 1.0.0
     */
    pause(): Promise<void>;

    /**
     * 恢复
     * @param options
     */
    resume(): Promise<void>;

    /**
     * 取消
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
        eventName: "speakError",
        listenerFunc: (error: SpeechError) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Called when the push notification registration finishes without problems.
     *
     * Provides the push notification token.
     *
     * @since 1.0.0
     */
    addListener(
        eventName: "eventSpeechSpeak",
        listenerFunc: (speak: SpeakStatusChange) => void
    ): Promise<PluginListenerHandle> & PluginListenerHandle;

    /**
     * Remove all native listeners for this plugin
     *
     * @since 1.0.0
     */
    removeAllListeners(): Promise<void>;
}

export interface SpeakStatusChange {
    /**
     * 百分比
     *
     * @since 1.0.0
     */
    percent: 0;

    /**
     * 语音合成状态
     *
     * @since 1.0.0
     */
    state: SpeakState;
}
export enum SpeakState {
    START = "start",
    PAUSE = "pause",
    RESUME = "resume",
    PROGRESS = "progress",
    COMPLETE = "complete",
}


export interface SpeakTtsOptions {
    /**
     * The text to speak.
     *
     * @since 1.0.0
     */
    value: string;
  
    /**
     * The language to speak the text in, as its [ISO 639-1
     * Code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g.: "en").
     *
     * This option is only supported on Android.
     *
     * @since 1.0.0
     */
    language?: string;
  }
  