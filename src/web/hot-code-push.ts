import {
    HotCodePushPlugin,
    HotCodePushRequestOptions,
    HotCodePushUpdate,
    HotCodePushVersion,
} from "../xview-plugin-definitions";
import { WebPlugin, registerWebPlugin } from "@capacitor/core";

export class HotCodePushWeb
    extends WebPlugin
    implements HotCodePushPlugin {
    constructor() {
        super({
            name: "HotCodePush",
            platforms: ["web"],
        });
    }

    requestApplicationUpdate(options?: { message: string }): Promise<any> {
        throw new Error("Method not implemented.");
    }

    initPlugin(options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }

    fetchUpdate(options?: HotCodePushRequestOptions): Promise<any> {
        throw new Error("Method not implemented.");
    }
    installUpdate(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    isUpdateAvailableForInstallation(): Promise<HotCodePushUpdate> {
        throw new Error("Method not implemented.");
    }
    getVersionInfo(): Promise<HotCodePushVersion> {
        throw new Error("Method not implemented.");
    }
}

const HotCodePush = new HotCodePushWeb();

export { HotCodePush };

registerWebPlugin(HotCodePush);
