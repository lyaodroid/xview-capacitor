import type { HttpState } from "../http";
import { PluginListenerHandle } from "@capacitor/core";

export interface UpdatePlugin {

  /**
   * 如果想 监听 下载进度 可以 注册此监听
   *
   * @since 1.0.0
   */
  addListener(
    eventName: "updateProgressChange",
    listenerFunc: UpdateProgressChangeListener
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * 版本更新 带 下载进度 回调配合监听方法使用
   *
   * @since 1.0.0
   */
  apkDownloadUpdate(options: UpdateOption): Promise<void>;

  /**
   * 如果前端 提示 下载进度 UI 上面 有  切换到 后台 按钮  可以再 下载 80% 前调用此方法
   * 会以通知栏形式 下载更新
   *
   * @since 1.0.0
   */
  apkBackgroundDownload(): void;

  /**
   * 如果注册了 监听 结束后 一定要 移除 监听
   *
   * @since 1.0.0
   */
  removeAllListeners(): Promise<void>;
}

export interface UpdateProgress {
  /**
   * 当前进度 0 ~ 100 百分比
   *
   * @since 1.0.0
   */
  fraction: number;

  /**
   * apk 下载后安装路径 可以作为手动 安装 使用
   *
   * @since 1.0.0
   */
  path: string;

  /**
   * 更新状态 根据状态 处理 回调
   *
   * @since 1.0.0
   */
  state: HttpState;
}

export type UpdateProgressChangeListener = (
  position: UpdateProgress,
  err?: any
) => void;

export interface UpdateOption {
  /**
   * apk 下载地址 支持 HTTP  HTTPS
   *
   * @since 1.0.0
   */
  apkUrl: string;

  /**
   * 大小主要是进度更新需要
   * 默认后端配置文件大小， 可以在获取不到 文件大小时使用
   *
   * @since 1.0.0
   */
  apkSize?: string;

  /**
   * apk 缓存目录 使用 方便下载完成时 可以看到返回文件路径是否正确
   *
   * @since 1.0.0
   */
  versionName: string;

  /**
   * apk file md5 验证（*.apk 文件md5值  注意不是签名文件md5）
   *
   * @since 1.0.0
   */
  apkMd5: string;
}
