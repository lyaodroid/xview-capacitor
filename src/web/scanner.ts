import { registerWebPlugin, WebPlugin } from "@capacitor/core";
import { ImageCodeOption, ScannerOption, ScannerPlugin } from "../xview-plugin-definitions";

export class ScannerWeb extends WebPlugin implements ScannerPlugin {
    constructor() {
        super({
            name: "Scanner",
            platforms: ["web"],
        });
    }
    generateImageCode(options: ImageCodeOption): Promise<{ value: string}> {
        throw new Error("Method not implemented.");
    }
    analyzeImage(options?: ScannerOption): Promise<import("../xview-plugin-definitions").ScannerResult> {
        throw new Error("Method not implemented.");
    }
    async scan(options?: ScannerOption): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

const Scanner = new ScannerWeb();

export { Scanner };
registerWebPlugin(Scanner);
