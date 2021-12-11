import { registerPlugin } from "@capacitor/core";

import type { AuthNumberPlugin } from "./definitions";

const AuthNumber = registerPlugin<AuthNumberPlugin>("AuthNumber");

export * from "./definitions";
export { AuthNumber };
