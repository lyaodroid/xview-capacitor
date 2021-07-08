import { PermissionState } from "@capacitor/core";

export interface MobilePlugin {
  /**
   * zh(简体) cn(繁体) en(英语) auto(跟随系统)
   *
   * @since 1.0.0
   */
  switchLanguage(options: { value: "zh" | "cn" | "en" | "auto"}): never;

  /**
   * 检查通知是否 打开 推送使用
   *
   * @since 1.0.0
   */
  areNotificationsEnabled(options?: any): Promise<{ value: boolean }>;

  /**
   * 跳转打开通知 返回false 因为Android 跳转适配 失败， 提示需要手动去打开 提供打开方案链接
   *
   * @since 1.0.0
   */
  openNotification(options?: any): void;
  /**
   * 检查位置是否打开 定位使用
   *
   * @since 1.0.0
   */
  isLocationServiceEnabled(options?: any): Promise<{ value: boolean }>;

  /**
   * 打开定位总开关
   *
   * @since 1.0.0
   */
  openLocationService(options?: any): Promise<void>;

  /**
   * 为了兼容老项目中 请求权限方法
   * 为了兼容 Android 和 iOS 逻辑不相同时
   * 执行相同的逻辑
   * 检查权限 通过代码动态检查
   *
   * @since 1.0.0
   */
  requestPermissions(permissions: any): Promise<PermissionState>;

  /**
   * 如果权限被拒绝不再询问 提示 必须跳转系统设置去开启，检查同 通知一样
   * 配合 @method requestPermissions 使用
   *
   * @since 1.0.0
   */
  toPermissionSetting(options?: any): Promise<void>;

  /**
   * 获取手机上所有APP 是否过滤掉系统APP
   * 暂未使用 可能需要iOS 统一
   *
   * @since 1.0.0
   */
  getAppsInfo(options?: any): Promise<{ values: any[] }>;

  /**
   * 判断 应用是否安装
   * Android {包名 appID / packageName}
   * ios { bundleId 可能需要 提前配置 到 plist文件 中}
   * 
   * @since 1.0.0
   */
  isAppInstalled(options?: any): Promise<{ value: boolean }>;

  /**
   * 清除缓存
   *
   * @since 1.0.0
   */
  cleanCache(options?: any): Promise<void>;

  /**
   * 获取缓存 1 MB以内 kb 显示
   *
   * @since 1.0.0
   */
  getCacheSize(options?: any): Promise<{ value: string }>;
}
