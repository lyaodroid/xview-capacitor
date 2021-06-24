import { registerPlugin } from "@capacitor/core";

import type {
    ECommerceLivePlayerPlugin,
    ECommerceLivePusherPlugin,
    RtmClientPlugin,
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

const RtmClient = registerPlugin<RtmClientPlugin>("RtmClient");

export { RtmClient };
