import { registerPlugin } from "@capacitor/core";
import type { NettyTcpPlugin } from "./definitions";

const NettyTcp = registerPlugin<NettyTcpPlugin>("NettyTcp");

export * from "./definitions";
export { NettyTcp };
