import { WebPlugin } from "@capacitor/core";
import {
    ConfigureOptions,
    NativeAudioPlugin,
    PreloadComplexOptions,
    PreloadSimpleOptions,
} from "../xview-plugin-definitions";

export class NativeAudioWeb
    extends WebPlugin
    implements NativeAudioPlugin {
    constructor() {
        super({ name: "NativeAudio" });
    }
    configure(options: ConfigureOptions): Promise<void> {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    preloadSimple(options: PreloadSimpleOptions): Promise<void> {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    preloadComplex(options: PreloadComplexOptions): Promise<void> {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    play(options: { assetId: string }): Promise<void> {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    loop(options: { assetId: string }): Promise<void> {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    stop(options: { assetId: string }): Promise<void> {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    unload(options: { assetId: string }): Promise<void> {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    setVolume(options: { assetId: string }): Promise<void> {
        console.log(options);
        throw new Error("Method not implemented.");
    }
}
