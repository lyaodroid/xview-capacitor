import { WebPlugin } from "@capacitor/core";
import {
    HotCodePushPlugin,
    HotCodePushRequestOptions,
    HotCodePushUpdate,
    HotCodePushVersion
} from "../xview-plugin-definitions";

export class HotCodePushWeb
    extends WebPlugin
    implements HotCodePushPlugin {
    constructor() {
        super({ name: "HotCodePush" });
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
