import { WebPlugin } from "@capacitor/core";
import { AliPayPlugin } from "../xview-plugin-definitions";

export class AliPayWeb extends WebPlugin implements AliPayPlugin {
    constructor() {
        super({ name: "AliPay" });
    }
    login(options: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    pay(options: any): Promise<{ value: boolean; code?: string }> {
        throw new Error("Method not implemented.");
    }
}
