import { WebPlugin } from "@capacitor/core";
import {
    BLocationPlugin,
    LocationWatchCallback
} from "./../xview-plugin-definitions";

export class BLocationWeb extends WebPlugin implements BLocationPlugin {
    constructor() {
        super({
            name: "BLocation",
            platforms: ["web"],
        });
    }
    setLocationServiceSetting(options?: any): void {
        throw new Error("Method not implemented.");
    }
    clearAllWatches(options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getCurrentPosition(options?: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    watchPosition(options: any, callback: LocationWatchCallback): string {
        let id = "locaiton";
        return `${id}`;
    }

    clearWatch(options: { id: string }) {
        return Promise.resolve();
    }
}
