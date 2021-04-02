import { CallbackID } from "@capacitor/core";

export interface AudioPlugin {
  /**
   * @param options
   * @param callback
   */
  startRecord(
    options: {
      interval?: number;
      format?: string;
    },
    callback: AudioStatusChangeCallback
  ): CallbackID;

  /**
   * 暂停时 如果是取消 就 删除录制文件
   * @param options
   */
  stopRecord(options: { id: string }): Promise<void>;

  /**
   * 开始播放
   *
   * @since 1.0.0
   */
  startPlay(
    options: { path: string },
    callback?: AudioStatusChangeCallback
  ): CallbackID;

  /**
   * 停止播放
   *
   * @since 1.0.0
   */
  stopPlay(options: { id: string }): Promise<void>;

  /**
   * 离开页面时候
   * 释放资源
   *
   * @since 1.0.0
   */
  release(): never;
}

export interface AudioStatusChange {
  /**
   * 播放当前进度
   * state = start 时有值
   *
   *
   * @since 1.0.0
   */
  currentPosition?: number;
  /**
   * 录音时 振幅 state = start 时有值
   * 0 -> 100
   *
   * @since 1.0.0
   */
  amplitude?: number;

  /**
   * 状态暂时开启 两个
   * recording playing  pause | resume 后面开启
   *
   * @since 1.0.0
   */
  state: AudioState;

  /**
   * amplitude == -1 时 录音结束
   * data 有值
   *
   * @since 1.0.0
   */
  data?: AudioFileResult;
}

export type AudioStatusChangeCallback = (
  status: AudioStatusChange,
  err?: any
) => void;

export interface AudioFileResult {
  /**
   * 录音文件的路径
   *
   * @since 1.0.0
   */
  path: string;

  /**
   * 录音文件真实长度
   *
   * @since 1.0.0
   */
  duration: number;
}

export enum AudioState {
  START = "start",
  STOP = "stop",
}
