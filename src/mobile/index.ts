import { registerPlugin } from "@capacitor/core";

import type { MobilePlugin } from "./definitions";

const Mobile = registerPlugin<MobilePlugin>("Mobile");

export * from "./definitions";
export { Mobile };
