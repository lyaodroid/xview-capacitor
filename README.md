# @nativecap

 集合 ionic 官方插件 , 开源插件 , 自定义插件

## Install

```bash
npm install nativecap
```

## Example

```typescript
import { ApWifi } from 'nativecap';

    /**
     * 监听 WiFi 下的设备
     * 
     */
    startListenForApWifi() {
        ApWifi.addListener("apWifiFindModule", (modules: ApWifiResult) => {
            console.log("Network status changed", modules);
        });
    }

    /**
     * wifi 连接 上才可以 调用
     * 配网成功 后 才可以 绑定设备 -------------------------------------------------
     */
    async openUdpForApWifi() {
        try {
            const result = await ApWifi.openUdp();
            console.log("openUdpForApWifi result", result);
        } catch (error) {
            console.log("openUdpForApWifi error", error);
        }
    }

    /**
     * 离开页面 时调用 成对使用
     */
    async closeUdpForApWifi() {
        const result = await ApWifi.closeUdp();
        console.log("closeUdpForApWifi result", result);
    }

    /**
     * 打开 udp 后才可以调用
     * 后面可以增加 超时时间
     * 现在以默认为主
     */
    async findLinkedModuleForApWifi() {
        const result = await ApWifi.findLinkedModule();
        console.log("openUdpForApWifi result", result);
    }

    /**
     * 与 硬件 交互  不知道 是否需要连接硬件的热点 这个需要 再确认下 ---------------------
     * 监听 JNI 回调
     */
    startListenForCPPlus() {
        CPPlus.addListener("cppTcpReceived", (data: { value: string }) => {
            console.log("startListenForCPPlus : ", data.value);
        });
    }

    /**
     * 开启 tcp
     */
    async nativeStartTcp(startdata: any) {
        try {
            const result = await CPPlus.nativeStart(startdata);
            console.log("nativeStartTcp result", result);
        } catch (error) {
            console.log("nativeStartTcp error", error);
        }
    }
    /**
     * 发送数据 Tcp
     */
    async nativeSendTcp(senddata: any) {
        try {
            const result = await CPPlus.nativeSend(senddata);
            console.log("nativeStopTcp result", result);
        } catch (error) {
            console.log("nativeSendTcp error", error);
        }
    }
    /**
     * 关闭 tcp
     */
    async nativeStopTcp() {
        const result = await CPPlus.nativeStop();
        console.log("nativeStopTcp result", result);
    }

```

## API

<docgen-index>

[支付宝插件](./scripts/apis/alipay.md)

[微信插件](./scripts/apis/wechat.md)


</docgen-index>


