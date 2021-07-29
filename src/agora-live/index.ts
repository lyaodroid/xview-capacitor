import { registerPlugin } from "@capacitor/core";

import type {
    LiveChatPlugin, LivePusherPlugin, LivePlayerPlugin,
} from "./definitions";

export * from "./definitions";


const LivePusher = registerPlugin<LivePusherPlugin>(
    "LivePusher"
);
export { LivePusher };

const LiveChat = registerPlugin<LiveChatPlugin>("LiveChat");

export { LiveChat };

// 测试 
const LivePlayer = registerPlugin<LivePlayerPlugin>(
    "LivePlayer"
);
export { LivePlayer };