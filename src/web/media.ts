import { registerWebPlugin, WebPlugin } from "@capacitor/core";
import {MediaPlugin } from "../xview-plugin-definitions";

export class MediaWeb extends WebPlugin implements MediaPlugin {
    constructor() {
        super({
            name: "Media",
            platforms: ["web"],
        });
    }
    previewImage(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    previewVideo(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    saveImage(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    selectImage(options?: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    selectVideo(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    openCamera(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    recordVideo(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

const Media= new MediaWeb();

export { Media };
registerWebPlugin(Media);
