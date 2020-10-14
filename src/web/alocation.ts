import {
    LocationWatchCallback,
    ALocationPlugin,
} from "./../xview-plugin-definitions";
import { WebPlugin } from "@capacitor/core";

export class ALocationPluginWeb extends WebPlugin
    implements ALocationPlugin {
    constructor() {
        super({
            name: "ALocation",
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
        return ALocation.getCurrentPosition();
    }

    watchPosition(options: any, callback: LocationWatchCallback): string {
        let id = "locaiton";
        return `${id}`;
    }

    clearWatch(options: { id: string }) {
        return Promise.resolve();
    }
}

const ALocation = new ALocationPluginWeb();

export { ALocation };
