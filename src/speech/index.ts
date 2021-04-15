import { registerPlugin } from "@capacitor/core";

import type { SpeechAsrPlugin, SpeechTtsPlugin } from "./definitions";

const SpeechAsr = registerPlugin<SpeechAsrPlugin>("SpeechAsr");

const SpeechTts = registerPlugin<SpeechTtsPlugin>("SpeechTts");

export * from "./definitions";
export { SpeechAsr, SpeechTts };
