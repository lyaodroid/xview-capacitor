import { registerPlugin } from "@capacitor/core";

import type { SpeechTtsPlugin } from "./definitions";

const SpeechTts = registerPlugin<SpeechTtsPlugin>("SpeechTts");

export * from "./definitions";
export { SpeechTts };
