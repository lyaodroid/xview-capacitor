export interface UMCommonPlugin {
    /**
     *
     * 采用 预初始化  这里合规方式 才真正初始化
     *
     * @since 1.0.0
     */
    init(options?: any): Promise<{ value: boolean }>;
}
