import { registerPlugin } from "@capacitor/core";

import type {
    LiveChatPlugin, LivePusherPlugin,
} from "./definitions";

export * from "./definitions";


const LivePusher = registerPlugin<LivePusherPlugin>(
    "LivePusher"
);
export { LivePusher };

const LiveChat = registerPlugin<LiveChatPlugin>("LiveChat");

export { LiveChat };
