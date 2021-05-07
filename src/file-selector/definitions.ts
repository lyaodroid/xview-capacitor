import { PluginListenerHandle } from "@capacitor/core";

export interface FileSelectorPlugin {
    /**
     * 系统文件选择
     *
     * @since 1.0.0
     */
    fileSelector(
        options: FileSelectorOptions
    ): Promise<FileSelectorResult>;

    /**
     *  web 文件选择
     *
     *@since 1.0.0
     */
    addListener(
        eventName: "onFilesSelected",
        listenerFunc: (state: FileList) => void
    ): PluginListenerHandle;
}

export interface FileSelectorOptions {
    /**
     * 是否多选
     *
     * @since 1.0.0
     */
    multiple_selection: boolean;

    /**
     * 选择文件类型扩展
     *
     * @since 1.0.0
     */
    ext: string[];
}

export interface FileSelectorResult {
    /**
     * 文件路径 使用原生上传 要
     * replace（ _capacitor_file_ ，"")
     *
     * @since 1.0.0
     */
    paths: any;

    original_names: any;

    extensions: any;
}
