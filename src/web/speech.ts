import { WebPlugin } from "@capacitor/core";
import {
    SpeechPlugin,
    SpeechProgressCallback
} from "../xview-plugin-definitions";

export class SpeechWeb extends WebPlugin implements SpeechPlugin {
    constructor() {
        super({ name: "Speech" });
    }
    clickMicRecognize(options: { appId: string }): Promise<void> {
        throw new Error("Method not implemented.");
    }

    stopRecognize(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    startRecognize(
        options: { appId: string },
        callback: SpeechProgressCallback
    ): string {
        throw new Error("Method not implemented.");
    }
}
