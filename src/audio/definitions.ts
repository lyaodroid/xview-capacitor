import { CallbackID } from "@capacitor/core";

export interface AudioPlugin {
  /**
   * 系统录音机 返回录音文件路径
   *
   * @since 1.0.0
   */
  systemRecord(options?: any): Promise<any>;

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
  stopRecord(options: { id: string }): Promise<AudioFileResult>;

  /**
   * 开始播放
   *
   * @since 1.0.0
   */
  startPlay(
    options: { value: string },
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
   *
   * @since 1.0.0
   */
  currentPosition?: number;
  /**
   * 录音时 振幅
   * 1 -> maxLevel
   *
   * @since 1.0.0
   */
  amplitude?: number;
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
