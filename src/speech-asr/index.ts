import { registerPlugin } from "@capacitor/core";

import type { SpeechAsrPlugin } from "./definitions";

const SpeechAsr = registerPlugin<SpeechAsrPlugin>("SpeechAsr");

export * from "./definitions";
export { SpeechAsr };
