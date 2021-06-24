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

  /**
   * 离开直播列表界面 关闭原生直播界面
   * 
   * @param options 
   */
  stop(options?: any): Promise<void>;
}

/**
 * 推流插件
 */


export interface ECommerceLivePusherPlugin {
  /**
   * 带参数进入直播间准备
   *
   * @since 1.0.0
   */
  prepare(options?: any): Promise<void>;
}