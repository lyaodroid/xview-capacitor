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


[AliPayPlugin(支付宝 支付 登录)](./scripts/apis/alipay.md)

[AppPlugin(运行状态 返回 退出)](./scripts/apis/app.md)

[AppLauncherPlugin(URL拉起其它App)](./scripts/apis/app-launcher.md)

[AudioPlugin(音频：录制 播放)](./scripts/apis/audio.md)

[CameraPlugin(系统相机)](./scripts/apis/camrea.md)

[ClipboardPlugin(剪切板)](./scripts/apis/clipboard.md)

[DevicePlugin(设备信息)](./scripts/apis/device.md)

[FilesystemPlugin(系统文件)](./scripts/apis/filesystem.md)

[GeolocationPlugin(高德百度定位)](./scripts/apis/geolocation.md)

[HttpPlugin(网络请求)](./scripts/apis/http.md)

[IntentsPlugin(打开 地图 电话 等)](./scripts/apis/intents.md)

[KeyboardPlugin(键盘设置)](./scripts/apis/keyboard.md)

[MediaPlugin(多媒体 拍照 录视频 选择 图片视频)](./scripts/apis/media.md)

[MobilePlugin(基础功能 通知 开关 缓存 APP是否安装)](./scripts/apis/http.md)

[NetworkPlugin(网络状态)](./scripts/apis/network.md)

[PushNotificationsPlugin(推送通知 友盟极光)](./scripts/apis/push-notifications.md)

[QQPlugin(腾讯QQ 登录 分享)](./scripts/apis/qq.md)

[ScannerPlugin(扫一扫 二维码 条形码)](./scripts/apis/scanner.md)

[SharePlugin(系统分享)](./scripts/apis/share.md)

[SpeechPlugin(语音识别：暂未实现)](./scripts/apis/speech.md)

[SplashScreenPlugin(启动图 引导图)](./scripts/apis/splash-screen.md)

[StoragePlugin(数据存储)](./scripts/apis/storage.md)

[UpdatePlugin(版本更新 Android支持)](./scripts/apis/update.md)

[WebPagePlugin(Webview 网址加载)](./scripts/apis/webpage.md)

[WeChatPlugin(微信 支付 登录 分享)](./scripts/apis/webpage.md)


</docgen-index>


