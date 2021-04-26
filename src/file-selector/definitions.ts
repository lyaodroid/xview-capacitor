export interface FileSelectorPlugin {
    /**
     * 系统选择文件
     * 多选默认 false
     *
     * @since 1.0.0
     */
    fileSelector(
        options: FileSelectorOptions
    ): Promise<FileSelectorResult>;
}

export interface FileSelectorOptions {
    multiple_selection: false;
    ext: string[];
}

export interface FileSelectorResult {
    /**
     * 文件路径
     * 
     * @since 1.0.0
     */
    paths: string[];

    original_names: string[];
    
    extensions: string[];
}
