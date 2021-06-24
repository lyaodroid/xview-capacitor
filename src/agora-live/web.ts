import { WebPlugin } from "@capacitor/core";

import type { ECommerceLivePlayerPlugin } from "./definitions";

export class ECommerceLivePlayerWeb
    extends WebPlugin
    implements ECommerceLivePlayerPlugin {
    stop(_options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    play(_options?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
