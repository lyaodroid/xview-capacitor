declare module '@capacitor/core' {
  interface PluginRegistry {
    XView: XViewPlugin;
  }
}

export interface XViewPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
