import { registerPlugin } from "@capacitor/core";

import type { FileSelectorPlugin } from "./definitions";

const FileSelector = registerPlugin<FileSelectorPlugin>("FileSelector", {
    web: () => import("./web").then((m) => new m.FileSelectorWeb()),
});

export * from "./definitions";
export { FileSelector };
