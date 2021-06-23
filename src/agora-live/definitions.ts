export type RoomType =
  | "multi"
  | "single"
  | "pk"
  | "virtual_host"
  | "ecommerce";

export interface ECommerceLivePlayerPlugin {
  /**
   * 测试 插件打开原生界面
   *
   * @since 1.0.0
   */
  play(options?: any): Promise<void>;
}
