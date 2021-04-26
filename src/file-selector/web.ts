import { WebPlugin } from "@capacitor/core";

import {
    FileSelectorPlugin,
    FileSelectorOptions,
    FileSelectorResult,
} from "./definitions";

export class FileSelectorWeb
    extends WebPlugin
    implements FileSelectorPlugin {
    fileSelector(
        options: FileSelectorOptions
    ): Promise<FileSelectorResult> {
        throw new Error("Method not implemented.");
    }
}
