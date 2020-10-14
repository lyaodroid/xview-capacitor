import { WebPlugin } from "@capacitor/core";
import { WeChatPlugin } from "../xview-plugin-definitions";

export class WeChatWeb extends WebPlugin implements WeChatPlugin {
  constructor() {
    super({
      name: "WeChat",
      platforms: ["web"],
    });
  }

  async login(options: any): Promise<any> {
    console.log("ECHO", options);
    return options;
  }

  async pay(options: any): Promise<any> {
    console.log("ECHO", options);
    return options;
  }

  async share(options: any): Promise<any> {
    console.log("ECHO", options);
    return options;
  }

  async launchMiniProgram(options: any): Promise<any> {
    console.log("ECHO", options);
    return options;
  }
}

const WeChat = new WeChatWeb();

export { WeChat };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(WeChat);
