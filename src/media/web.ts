import { WebPlugin } from "@capacitor/core";
import {
  MediaPlugin,
  MediaImageOptions,
  MediaVideoOptions,
  MediaResult,
} from "./definitions";

export class MediaWeb extends WebPlugin implements MediaPlugin {
  constructor() {
    super();
  }
  selectImage(
    options?: MediaImageOptions
  ): Promise<{ images: MediaResult[] }> {
    throw new Error("Method not implemented.");
  }
  openCamera(options?: MediaImageOptions): Promise<MediaResult> {
    throw new Error("Method not implemented.");
  }
  previewImage(options: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
  saveImage(options?: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  selectVideo(
    options?: MediaVideoOptions
  ): Promise<{ videos: MediaResult[] }> {
    throw new Error("Method not implemented.");
  }
  recordVideo(options?: MediaVideoOptions): Promise<MediaResult> {
    throw new Error("Method not implemented.");
  }
  previewVideo(options: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
