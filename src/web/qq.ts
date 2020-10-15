import { WebPlugin } from "@capacitor/core";
import { QQPlugin } from "../xview-plugin-definitions";

export class QQWeb extends WebPlugin implements QQPlugin {
    constructor() {
        super({ name: "QQ" });
    }

    async login(options: any): Promise<any> {
        console.log("ECHO", options);
        return options;
    }

    async share(options: any): Promise<any> {
        console.log("ECHO", options);
        return options;
    }
}
