import { registerPlugin } from "@capacitor/core";

import type { WebPagePlugin } from "./definitions";

const WebPage = registerPlugin<WebPagePlugin>("WebPage");

export * from "./definitions";
export { WebPage };
