import { registerPlugin } from "@capacitor/core";

import type {
    ECommerceLivePlayerPlugin,
    ECommerceLivePusherPlugin,
    LiveChatPlugin,
} from "./definitions";

export * from "./definitions";

const ECommerceLivePlayer = registerPlugin<ECommerceLivePlayerPlugin>(
    "ECommerceLivePlayer",
    {
        web: () =>
            import("./web").then((m) => new m.ECommerceLivePlayerWeb()),
    }
);

export { ECommerceLivePlayer };

const ECommerceLivePusher = registerPlugin<ECommerceLivePusherPlugin>(
    "ECommerceLivePusher"
);
export { ECommerceLivePusher };

const LiveChat = registerPlugin<LiveChatPlugin>("LiveChat");

export { LiveChat };
