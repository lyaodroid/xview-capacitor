import { registerPlugin } from "@capacitor/core";

import type { UMengPlugin } from "./definitions";

const UMeng = registerPlugin<UMengPlugin>("UMengPlugin");

export * from "./definitions";
export { UMeng };
