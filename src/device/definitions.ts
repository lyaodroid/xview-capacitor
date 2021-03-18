export type OperatingSystem = 'ios' | 'android' | 'windows' | 'mac' | 'unknown';

export interface DeviceInfo {
  /**
   * The name of the device. For example, "John's iPhone".
   *
   * This is only supported on iOS and Android 7.1 or above.
   *
   * @since 1.0.0
   */
  name?: string;

  /**
   * The device model. For example, "iPhone".
   *
   * @since 1.0.0
   */
  model: string;

  /**
   * The device platform (lowercase).
   *
   * @since 1.0.0
   */
  platform: 'ios' | 'android' | 'web';

  /**
   * The UUID of the device as available to the app. This identifier may change
   * on modern mobile platforms that only allow per-app install UUIDs.
   *
   * @since 1.0.0
   */
  uuid: string;

  /**
   * The operating system of the device.
   *
   * @since 1.0.0
   */
  operatingSystem: OperatingSystem;

  /**
   * The version of the device OS.
   *
   * @since 1.0.0
   */
  osVersion: string;

  /**
   * The manufacturer of the device.
   *
   * @since 1.0.0
   */
  manufacturer: string;

  /**
   * Whether the app is running in a simulator/emulator.
   *
   * @since 1.0.0
   */
  isVirtual: boolean;

  /**
   * Approximate memory used by the current app, in bytes. Divide by
   * 1048576 to get the number of MBs used.
   *
   * @since 1.0.0
   */
  memUsed?: number;

  /**
   * How much free disk space is available on the the normal data storage.
   * path for the os, in bytes
   *
   * @since 1.0.0
   */
  diskFree?: number;

  /**
   * The total size of the normal data storage path for the OS, in bytes.
   *
   * @since 1.0.0
   */
  diskTotal?: number;

  /**
   * The web view browser version
   *
   * @since 1.0.0
   */
  webViewVersion: string;
}

export interface BatteryInfo {
  /**
   * A percentage (0 to 1) indicating how much the battery is charged.
   *
   * @since 1.0.0
   */
  batteryLevel?: number;

  /**
   * Whether the device is charging.
   *
   * @since 1.0.0
   */
  isCharging?: boolean;
}

export interface GetLanguageCodeResult {
  /**
   * Two character language code.
   *
   * @since 1.0.0
   */
  value: string;
}

export interface DevicePlugin {
  /**
   * Return information about the underlying device/os/platform.
   *
   * @since 1.0.0
   */
  getInfo(): Promise<DeviceInfo>;

  /**
   * Return information about the battery.
   *
   * @since 1.0.0
   */
  getBatteryInfo(): Promise<BatteryInfo>;

  /**
   *
   * Get the device's current language locale code.
   *
   * @since 1.0.0
   */
  getLanguageCode(): Promise<GetLanguageCodeResult>;

  /**
   *
   * 可用（并不是 物理尺寸） 显示大小的绝对宽度（以像素为单位）。可用显示大小的绝对高度（以像素为单位）屏幕密度表示为每英寸点数。显示器的逻辑密度。显示屏上显示的字体缩放系数。
   *
   * @since 1.0.0
   */
  getScreenRelatedInfo(): Promise<ScreenRelatedInfo>;
}

export interface ScreenRelatedInfo {

  /**
   * 转换后的 可用宽度 前端可以直接使用
   * 
   * @since 1.0.0
   */
  width: number;

  /**
   * 转换后的 可用 高度 前端可以直接使用
   * 
   * @since 1.0.0
   */
  height: number;

  /**
   * 可用的宽度 在原生界面上的像素单位
   *
   * @since 1.0.0
   */
  widthPixels?: number;

  /**
   * 可用的高度 在原生界面上的像素单位
   *
   * @since 1.0.0
   */
  heightPixels?: number;
  /**
   * 原生密度值
   *
   * @since 1.0.0
   */
  density?: number;
}

/**
 * @deprecated Use `BatteryInfo`.
 * @since 1.0.0
 */
export type DeviceBatteryInfo = BatteryInfo;

/**
 * @deprecated Use `GetLanguageCodeResult`.
 * @since 1.0.0
 */
export type DeviceLanguageCodeResult = GetLanguageCodeResult;
