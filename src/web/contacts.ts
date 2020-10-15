import { WebPlugin } from "@capacitor/core";
import { ContactsPlugin } from "../xview-plugin-definitions";

export class ContactsWeb extends WebPlugin implements ContactsPlugin {
    constructor() {
        super({ name: "Contacts" });
    }
    getContacts(): Promise<{
        contacts: import("../xview-plugin-definitions").Contact[];
    }> {
        throw new Error("Method not implemented.");
    }
    chooseContacts(): Promise<
        import("../xview-plugin-definitions").Contact
    > {
        throw new Error("Method not implemented.");
    }
}