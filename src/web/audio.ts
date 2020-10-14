import { registerWebPlugin, WebPlugin } from "@capacitor/core";
import { AudioPlugin, AudioProgressCallback } from "../xview-plugin-definitions";

export class AudioWeb extends WebPlugin implements AudioPlugin {
    constructor() {
        super({
            name: "Audio",
            platforms: ["web"],
        });
    }
    startRecord(options: { format?: string; }, callback: AudioProgressCallback): string {
        throw new Error("Method not implemented.");
    }
    stopRecord(options: { id: string; cancel?: boolean; }): Promise<import("../xview-plugin-definitions").AudioFileResult> {
        throw new Error("Method not implemented.");
    }
    startPlay(options: { filePath: string; }, callback: AudioProgressCallback): string {
        throw new Error("Method not implemented.");
    }
    stopPlay(options: { id: string; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    onReset(options?: any): never {
        throw new Error("Method not implemented.");
    }

}

const Audio = new AudioWeb();

export { Audio };
registerWebPlugin(Audio);
