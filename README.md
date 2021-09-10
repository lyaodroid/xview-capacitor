# @nativecap

 集合 ionic 官方插件 , 开源插件 , 自定义插件

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

[GeolocationPlugin(定位)](./scripts/apis/geolocation.md)

[HttpPlugin(网络请求)](./scripts/apis/http.md)

[IntentsPlugin(打开 地图 电话 等)](./scripts/apis/intents.md)

[KeyboardPlugin(键盘设置)](./scripts/apis/keyboard.md)

[MediaPlugin(多媒体 拍照 录视频 选择 图片视频)](./scripts/apis/media.md)

[MobilePlugin(基础功能 通知 开关 缓存 APP是否安装)](./scripts/apis/http.md)

[NetworkPlugin(网络状态)](./scripts/apis/network.md)

[PushNotificationsPlugin(推送)](./scripts/apis/push-notifications.md)

[QQPlugin(腾讯QQ 登录 分享)](./scripts/apis/qq.md)

[ScannerPlugin(扫一扫 二维码 条形码)](./scripts/apis/scanner.md)

[SharePlugin(系统分享)](./scripts/apis/share.md)

[SpeechAsrPlugin(语音识别：科大讯飞)](./scripts/apis/speech-asr.md)

[SpeechTtsPlugin(语音合成：科大讯飞)](./scripts/apis/speech-tts.md)

[SplashScreenPlugin(启动图 引导图)](./scripts/apis/splash-screen.md)

[StoragePlugin(数据存储)](./scripts/apis/storage.md)

[UpdatePlugin(版本更新 Android支持)](./scripts/apis/update.md)

[WebPagePlugin(Webview 网址加载)](./scripts/apis/webpage.md)

[WeChatPlugin(微信 支付 登录 分享)](./scripts/apis/webpage.md)

</docgen-index>

## Install

```bash
npm install nativecap
```


## 第三方SDK 登录(友盟 SDK)，分享(友盟 SDK)，支付，推送，定位

### 支付宝

- **登录**

```typescript
import { AliPay } from "nativecap";

   /**
   * 登录
   * @param value  参数由后端固定生成授权登录的字符串.
   */
  async login() {
    try {
      const result = await AliPay.login({ value: "后端生成参数" });
      console.log(result.uid);
    } catch (error) {
      console.log(error);
    }
  }
```

- **支付**

```typescript
import { AliPay } from "nativecap";

   /**
   * 登录
   * @param value  参数由后端固定生成支付订单的字符串.
   */
  async pay() {
    try {
      await AliPay.pay({ value: "后端生成参数" });
      console.log("pay success");
    } catch (error) {
      console.log(error);
    }
  }
```

### 微信

- **登录** 

```typescript
import { WeChat } from "nativecap";

   /**
   * 登录
   * @param options  接口返回
   */
  async login() {
    try {
      const options = {
            appId: "",
            appKey: "",
        }；
      const result = await WeChat.login(options);
      console.log(result.uid);
    } catch (error) {
      console.log(error);
    }
  }
```

- **支付**

```typescript
import { WeChat } from "nativecap";

   /**
   * 支付
   * @param options  接口返回
   */
  async pay() {
    try {
      const options = {
        appId: "",
        appKey: "",
        packageValue: "",
        sign: "",
        partnerId: "",
        prepayId: "",
        nonceStr: "",
        timeStamp: "",
        }；
      await WeChat.pay(options);
      console.log("pay success");
    } catch (error) {
      console.log(error);
    }
  }
```

- **分享**
  
**`分享文字`**
  
```typescript
import { WeChat } from "nativecap";

   /**
   * 登录
   * @param options  接口返回
   */
  async shareText() {
    try {
     const options = {
            shareData: {
                text:"测试分享文字",
                shareType: "text",
            },
            appId: "",
            appKey: "",
            platform: "WEIXIN",
        };
      await WeChat.share(options);
      console.log("share success");
    } catch (error) {
      console.log(error);
    }
  }
```

   **`分享图片`**
  
```typescript
import { WeChat } from "nativecap";

   /**
   * 分享图片
   * @param options  参数不能为空 [thumb 图片 小于 20kb]
   */
  async shareImage() {
    try {
      const options = {
            shareData: {
                image:"https://test.jpg",
                thumb:"https://test0.jpg",
                title: "分享 图片",
                description: "网络图片测试",
                shareType: "image",
            },
            appId: "",
            appKey: "",
            platform: "WEIXIN (or WEIXIN_CIRCLE)",
        };
      await WeChat.share(options);
      console.log("share success");
    } catch (error) {
      console.log(error);
    }
  }
```

   **`分享网页`**
  
```typescript
import { WeChat } from "nativecap";

   /**
   * 分享网页
   * @param options  参数不能为空 [thumb 图片 小于 20kb]
   */
  async shareWebPage() {
    try {
      const options = {
            shareData: {
                webUrl:"分享的网址链接",
                thumb:"https://test0.jpg",
                title: "有意义文字",
                description: "内容说明",
                shareType: "webPage",
            },
            appId: "",
            appKey: "",
            platform: "WEIXIN (or WEIXIN_CIRCLE)",
        };
      await WeChat.share(options);
      console.log("share success");
    } catch (error) {
      console.log(error);
    }
  }
```

   **`分享音乐`**
  
```typescript
import { WeChat } from "nativecap";

   /**
   * 分享音乐
   * @param options  参数不能为空 [thumb 图片 小于 20kb]
   */
  async shareMusic() {
    try {
      const options = {
            shareData: {
                musicUrl:"分享音乐网址",
                thumb:"https://test0.jpg",
                title: "有意义文字",
                description: "内容说明",
                targetUrl: "http://music.taihe.com/song/565263868",
                shareType: "music",
            },
            appId: "",
            appKey: "",
            platform: "WEIXIN (or WEIXIN_CIRCLE)",
        };
      await WeChat.share(options);
      console.log("share success");
    } catch (error) {
      console.log(error);
    }
  }
```

   **`分享视频`**
  
```typescript
import { WeChat } from "nativecap";

   /**
   * 分享视频
   * @param options  参数不能为空 [thumb 图片 小于 20kb]
   */
  async shareVideo() {
    try {
      const options = {
            shareData: {
                videoUrl:"分享视频网址",
                thumb:"https://test0.jpg",
                title: "有意义文字",
                description: "内容说明",
                shareType: "video",
            },
            appId: "",
            appKey: "",
            platform: "WEIXIN (or WEIXIN_CIRCLE)",
        };
      await WeChat.share(options);
      console.log("share success");
    } catch (error) {
      console.log(error);
    }
  }
```

   **`分享小程序(微信专用)`**
  
```typescript
import { WeChat } from "nativecap";

   /**
   * 分享小程序
   * @param options  参数不能为空 [thumb 图片 小于 20kb]
   */
  async shareMinApp() {
    try {
      const options = {
            shareData: {
                minAppUrl:"小程序兼容网址",
                thumb:"https://test0.jpg",
                title: "有意义文字",
                description: "内容说明",
                path: "pages/home/home?from=app&type=1",
                userName: "gh_小程序原始id",
                miniType: "注意版本", //0 正式 ， 1 测试 2 预览版
                shareType: "minApp",
            },
            appId: "",
            appKey: "",
            platform: "WEIXIN (or WEIXIN_CIRCLE)",
        };
      await WeChat.share(options);
      console.log("share success");
    } catch (error) {
      console.log(error);
    }
  }
```

- **拉起小程序**

```typescript
import { WeChat } from "nativecap";

   /**
   * 小程序
   * @param options  接口返回
   */
  async launchMiniProgram() {
    try {
      const options: MiniProgramOptions = {
            appId: "应用AppId",
            userName: "gh_小程序原始id",
            path: "拉起后小程序路径",
            miniType: "注意小程序版本", //0 正式 ， 1 测试 2 预览版
        }；
      const result = await WeChat.launchMiniProgram(options);
      console.log("launch success");
    } catch (error) {
      console.log(error);
    }
  }
```
- **小程序打开App监听**

```typescript
import { WeChat } from "nativecap";

  WeChat.addListener("app-parameter", (args: any) => {
    console.log("WeChat app-parameter", args);
  });

  WeChat.addListener("app-parameter-share", (args: any) => {
    console.log("WeChat app-parameter-share", args);
  });
```

### QQ

- **登录**

```typescript
import { QQ } from "nativecap";

   /**
   * 登录
   * @param options  接口返回
   */
  async login() {
    try {
      const options = {
            appId: "",
            appKey: "",
        }；
      const result = await QQ.login(options);
      console.log(result.uid);
    } catch (error) {
      console.log(error);
    }
  }
```

- **分享(同微信)**

```typescript
import { QQ } from "nativecap";

   /**
   * 分享网页
   * @param options  参数不能为空 [thumb 图片 小于 20kb]
   */
  async shareWebPage() {
    try {
      const options = {
            shareData: {
                webUrl:"分享的网址链接",
                thumb:"https://test0.jpg",
                title: "有意义文字",
                description: "内容说明",
                shareType: "webPage",
            },
            appId: "",
            appKey: "",
            platform: "QQ (or QZONE)",
        };
      await QQ.share(options);
      console.log("share success");
    } catch (error) {
      console.log(error);
    }
  }
```

### Sina

- **登录**

```typescript
import { Sina } from "nativecap";

   /**
   * 登录
   * @param options  接口返回
   */
  async login() {
    try {
      const options = {
            appId: "",
            appKey: "",
        }；
      const result = await Sina.login(options);
      console.log(result.uid);
    } catch (error) {
      console.log(error);
    }
  }
```

- **分享(同微信)**

```typescript
import { Sina } from "nativecap";

   /**
   * 分享网页
   * @param options  参数不能为空 [thumb 图片 小于 20kb]
   */
  async shareWebPage() {
    try {
      const options = {
            shareData: {
                webUrl:"分享的网址链接",
                thumb:"https://test0.jpg",
                title: "有意义文字",
                description: "内容说明",
                shareType: "webPage",
            },
            appId: "",
            appKey: "",
            platform: "SINA",
        };
      await Sina.share(options);
      console.log("share success");
    } catch (error) {
      console.log(error);
    }
  }
```

### 定位(高德 百度)

- **单次定位**

```typescript
import { Geolocation, Mobile } from "nativecap";

  /**
   * 检查定位开关是否打开 第一步
   */
  async isLocationServiceEnabled() {
    try {
      const result = await Geolocation.isLocationServiceEnabled();
      console.log(result);
      if(result.value){
        console.log("可以定位");
      }else{
        console.log("提示打开定位服务");
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 打开定位服务
   */
  async openLocationService() {
    try {
      const result = await Mobile.openLocationService();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

 /**
   * 检查定位权限
   */
 async checkPermissions() {
    let result = await Geolocation.checkPermissions();
    if(result.location == 'granted'){
      console.log("可以定位");
    }else{
      console.log("弹框其它处理 请求权限");
    }
  }

   /**
   * 请求定位权限
   */
 async requestPermissions() {
    let result = await Geolocation.requestPermissions();
    if(result.location == 'granted'){
      console.log("可以定位");
    }else{
      console.log("弹框其它处理 再次请求权限，或者提示需要允许定位才能使用功能");
    }
  }

   /**
   * 获取当前定位
   */
  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log("coordinates", coordinates);
    } catch (error) {
      console.error(error);
    }
  }

```

- **连续定位(步骤同上)**

```typescript
import { Geolocation, CallbackID } from "nativecap";

   mWatchId: CallbackID;

  /**
   * 持续定位
   */
  async watchPosition() {
    try {
      let options = { interval: 3 * 1000, timeout: 8 * 1000 };
      let watchId = Geolocation.watchPosition(options, (position, err) => {
          console.log("Watch", position);
        }
      );
       this.mWatchId = watchId;
      console.log("Got watch", watchId);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 移除当前 持续定位
   */
  async clearWatch() {
      await Geolocation.clearWatch({ id:this.mWatchId });
  }
```

### 推送

- **打开通知**

```typescript
import {
    PushNotifications,
    PushNotificationToken,
    PushNotificationSchema,
    PushNotificationActionPerformed,
    PushNotificationDeliveredList,
    Mobile,
} from "nativecap";

    /**
     * 检查通知 开关
     *
     */
    async areNotificationsEnabled() {
        try {
            const result = await PushNotifications.areNotificationsEnabled();
            if (!result.value) {
                console.log("提示需要打开通知开关");
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 打开通知 开关 检查通知第二步
     */
    async openNotification() {
        try {
            await Mobile.openNotification();
            console.log("跳转打开");
        } catch (error) {
            console.log(error);
        }
    }

```

- **通知监听**

```typescript
import {
    PushNotifications,
    PushNotificationToken,
    PushNotificationSchema,
    PushNotificationActionPerformed,
    PushNotificationDeliveredList,
    Mobile,
} from "nativecap";

/**
 * 推送 注册成功 监听
 */
 PushNotifications.addListener(
     "registration",
     (token: PushNotificationToken) => {
         console.debug(`initRegistions Push registration success, token: ${token.value}`);
     }
 );

/**
 * 推送 注册失败 监听
 */
 PushNotifications.addListener(
     "registration",
     (error: any) => {
       console.log("initRegistions Error on registration: " +JSON.stringify(error));
    }
 );

 /**
 * 收到推送 未点击
 */
  PushNotifications.addListener(
     "pushNotificationReceived",
     (notification: PushNotificationSchema) => {
         console.info(
             "initializePushNotificationListener notification received",
             notification
         );
     }
 );

 /**
  * 收到推送 点击
  */
 PushNotifications.addListener(
     "pushNotificationActionPerformed",
     (notification: PushNotificationActionPerformed) => {
         console.log(
             "Push action performed: " +
                 JSON.stringify(notification)
         );
     }
 );

 /**
  * 移除所有监听
  */
 public removeAllListeners() {
     try {
         PushNotifications.removeAllListeners();
     } catch (error) {
         console.log(error);
     }
 }
```

- **使用流程**
  
```typescript
  /**
     * 必须在用户同意协议后 进行注册
     * 注册成功后 才能进行其它操作
     */
    public async register() {
        try {
            await PushNotifications.register();
        } catch (error) {
            console.log(error);
        }

  /**
   * 不接收推送 通知
   */
    public async unRegister() {
        try {
            const result = await PushNotifications.unRegister();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 绑定别名  aliasType 是友盟推送 使用，具体根据选择推送
     * @param aliasType 友盟推送才有 注意不要乱写 这里 test 是演示
     */
    public bindAlias() {
        const options = { alias: this.alias, aliasType: "test" };

        PushNotifications.bindAlias(options)
            .then((success: any) => {
                console.log(success);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    /**
     * 解绑别名
     */
    public unBindAlias() {
        PushNotifications.unBindAlias({
            alias: this.alias,
            aliasType: "test",
        })
          .then((success: any) => {
              console.log(success);
          })
          .catch((error: any) => {
              console.log(error);
          });
    }

    /**
     * @param "," 来分割
     *  增加标签 string tags = "tag1,tag2,tag3... tags"
     */
    public addTags() {
        const options = {
            value: this.tags,
        };
        PushNotifications.addTags(options)
            .then((success: any) => {
                console.log(success);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    /**
     * "," 来分割
     * 获取标签 string tags = "tag1,tag2,tag3... tags"
     * @param options
     */
    public getTags() {
        PushNotifications.getTags()
            .then((ret) => {
                console.log(ret.value);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    /**
     * "," 来分割
     * 删除标签 string tags = "tag1,tag2,tag3... tags"
     * @param options
     */
    public deleteTags() {
        PushNotifications.deleteTags({
            value: this.tags,
        })
            .then((success: any) => {
                console.log(success);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
```  

## 扩展插件 1.启动图引导图  2.网络请求  3.版本更新  4.扫一扫 5.WebView  6.多媒体(保存图片，预览图片，选择图片，拍照，小视频，选择视频，预览视频）7. 录制音频

### 启动图引导图

- **APP启动**

```typescript
import { SplashScreen } from "nativecap";


  /**
   * 主要打包时需要配置图片 默认3张
   */
  showGuide() {
    SplashScreen.showGuide().then(
      () => {
        console.log("goHome");
      },
      (error) => {
        console.log(error);
      }
    );
  }

 /**
  * app 启动初始化完成 回调中
  */
  platform.ready().then(() => {
        // 隐藏原生启动图 默认自动3秒隐藏
        SplashScreen.hide();
 }
```

### 网络请求

- **Get Post**

```typescript
import { Http, HttpResponse} from "nativecap";

    /**
     * Get 请求
     */
    async get() {
        const contentType = "application/x-www-form-urlencoded";
        try {
            let httpResponse = await Http.get({
                method: "GET",
                url: "http://testapi",
                headers: {
                    "Content-Type": contentType,
                    "Test-Header": "Max was here",
                },
                params: {
                    id: "1",
                    age: "22",
                    name: "我是测试",
                },
            });

            let result = JSON.stringify(httpResponse.data);
            console.log(`get result: ${result}`);
        } catch (error) {
            console.log(`get result: ${error}`);
        }
    }

    /**
     * Post 请求
     */
    async post() {
        const contentType = "application/json";
        try {
            let httpResponse = await Http.post({
                method: "POST",
                url: "http://testapi",
                headers: {
                    "Content-Type": contentType,
                    "Test-Header": "Max was here",
                },
                params: {
                    id: "1",
                    age: "22",
                    name: "我是测试",
                },
            });

            let result = JSON.stringify(httpResponse.data);
            console.log(`get result: ${result}`);
        } catch (error) {
            console.log(`get result: ${error}`);
        }
    }
```

- **文件上传 下载文件**

```typescript
import { Http, HttpResponse} from "nativecap";

    /**
     * 文件上传 // k-v  需要后端指定
     */
    async uploadFile() {
        let fileData1 = ["原生图片路径1","原生图片路径2"...];

        let fileData2 = [{file:{"filekey":"原生路径"}}];

        await Http.uploadFiles(
            {
                url:"testFileApi",
                data: fileData,
            },
            (progress: HttpUploadFileResult, err) => {
                if (progress) {
                    console.log(
                        `uploadFile progress: ${JSON.stringify(progress)}`
                    );
                }

                if (err) {
                    console.log(`uploadFile err: ${JSON.stringify(err)}`);
                }
            }
        );

    }

    /**
     * 下载文件 没有做文件管理 简单使用 需要先请求文件读写权限
     */
   async downloadFile() {
        const options = {
            url: "http://test/www.zip",
            method: "GET",
            filePath: "www.zip",
            fileDirectory: Directory.Documents,
        };
        const response: HttpDownloadFileResult = await Http.downloadFile(
            options
        );

        // Then read the file
        if (response.path) {
            // 文件绝对路径
            console.log(`downloadFile path = ${response.path}`);
            // const read = await Filesystem.readFile({
            //     path: "www.zip",
            //     directory: Directory.Documents,
            // });

            // // 返回base 64 太大
            // console.log(`Filesystem.readFile = ${read.data}`);
        }
    }
```

### 版本更新

- **Android apk更新**

```typescript
import { UpdateProgress, Update, UpdateOption, App } from "nativecap";

    /**
     * 版本更新 状态监听
     */
    Update.addListener(
      "updateProgressChange",
      (position: UpdateProgress) => {
        console.log("UpdateProgress STATUS", position.state);
      }
    );

  /**
   * 比较 versionCode  如果小于服务器 说明有更新
   *
   */
  async getVersionInfo() {
    const result = await App.getInfo();
    console.log("getVersionInfo:", result);
  }

  /**
   * apk 版本更新
   */
  async apkUpdate() {
    const options: UpdateOption = {
      apkUrl: "http://test.apk",
      apkMd5: "apk file MD5",
      versionName: "1.X.X",
    };
    const result = await Update.apkDownloadUpdate(options);
    console.log("apkUpdate", result);
  }

  /**
   * 切换到后台 通知栏更新
   */
  async backgroundDownload() {
    await Update.apkBackgroundDownload();
  }

```

### 扫一扫

- **二维码 条形码**

```typescript
import { Scanner, ScannerOptions} from "nativecap";

    scanTitle = "扫一扫 title 二维码";
    scanPrompt = "扫一扫 prompt 请将图片放入扫码框";
    beepEnabled = true;
    vibrateEnabled = true;

    /**
     * 扫一扫 参数可选
     */
    async scan() {
        try {
            let options: ScannerOptions = {
                title: this.scanTitle,
                prompt: this.scanPrompt,
                beepEnabled: this.beepEnabled,
                vibrateEnabled: this.vibrateEnabled
            };
            const info = await Scanner.scan(options);
            console.log("scan" + info);
        } catch (error) {
            console.log("scan" + error);
        }
    }
```

### WebView

- **跳转内部链接**

```typescript
import { WebPage, StatusBar, Device, OpenOptions, Dimensions } from "nativecap";

  title = "前端页面自定义标题";
  loading = true;
  pageLoading = false;
  progress: number;

  /**
   * 监听 网址 中变化的 title
   */
  WebPage.addListener("title", (result) => {
    console.log(`title =  ` + result.value);
    this.title = result.value;
  });

  /**
   * 监听加载网址进度 可以做进度条 友好展示
   */
  WebPage.addListener("progress", (result) => {
    console.log(`progress = ` + JSON.stringify(result));
  });

  /*******************************
   * 针对第三方网址 重定向 问题  导致 域名不一致 为防止拦截 可以 根据 url 放行
   * 此回调
   */
  WebPage.addListener("navigationHandler", (result) => {
    console.log(`navigationHandler =  ` + result.url);
    this.handleNavigationEvent();
  });

  /**
   * 允许 url 加载 不拦截
   */
  async handleNavigationEvent() {
    let result = await WebPage.handleNavigationEvent({ allow: true });
    console.log("handleNavigationEvent: " + result);
  }

   /**
   * 打开一个 网址 需要计算宽高 展示
   */
  async openPage(useLink) {
    console.log("screen.width:" + screen.width);
    console.log("screen.height:" + screen.height);

    const statuBarInfo = await StatusBar.getInfo();
    let height = "自己标题的高度" + statuBarInfo.height;
    let webHeight = screen.height - height;
    let ops = {
      url: useLink,
      width: screen.width,
      height: webHeight,
      x: 0,
      y: height,
    };
    let result = await WebPage.open(ops);
    console.log("open: " + result);
  }

  /**
   * 离开页面时 关闭
   */
  async close() {
    try {
      await WebPage.close();
    } catch (error) {
      console.log("close: " + ${error});
    }
  }
  
```

### 多媒体

- **图片相关**
  
```typescript
import { MediaImageOptions, MediaResultType, MediaVideoOptions, Media } from "nativecap";

  /**
   * 保存图片到相册
   * 
   * @param data 
   */
  async saveImage() {
    try {
      await Media.saveImage({path:"https:/test.jpg"});
      console.log(`保存成功 `);
    } catch (error) {
      console.log(error);
    }
  }
    /**
     * 预览图片 显示指定图片 0 开始
     * @param
     */
    async previewImage() {
        try {
            let options: MediaImages = {
                images: [{ path: "test1.jpg" }, { path: "test2.jpg" }],
                position: 0,
            };
            await Media.previewImage(options);
        } catch (error) {
            console.log(error);
        }
    }
  
    /***
     * 前端展示
     */
    pics = [];
    /**
     * 原生路径上传
     */
    files = [];

    /**
     * 选择图片
     * @param data
     */
    async selectImage(data: any) {
        let imageOptions: MediaImageOptions = {
            maxSelectNum: 9,
            resultType: MediaResultType.DataUrl,
            originalImage: true,
            compress: true,
            enableCrop: false,
            enableCropOptions: {
                circleCrop: true,
                cropWidth: 400,
                cropHeight: 600,
                aspect_ratio_x: 2,
                aspect_ratio_y: 3,
            },
        };
        try {
            let result = await Media.selectImage(imageOptions);
            let imgs = result.images;
            this.pics = [];
            this.files = [];

            for (let i = 0; i < imgs.length; i++) {

                this.pics.push(imgs[i].dataUrl);

                console.log(imgs[i].path);

                this.files.push(imgs[i].path);
            }
            console.log(`files ${JSON.stringify(this.files)}`);
        } catch (error) {
            console.log(error);
        }
    }
```

- **拍照**
  
```typescript
import { MediaImageOptions, MediaResultType, MediaVideoOptions, Media } from "nativecap";

    /**
     * 拍照
     * @param 
     */
    async openCamera() {
         try {
            let imageOptions: MediaImageOptions = {
            resultType: MediaResultType.DataUrl,
            originalImage: true,
            compress: false,
            enableCrop: false,
            enableCropOptions: {
                circleCrop: true,
                cropWidth: 400,
                cropHeight: 600,
                aspect_ratio_x: 2,
                aspect_ratio_y: 3,
            },
        };
            let result = await Media.openCamera(imageOptions);
            this.pics.push(result);
            console.log(result.path);
        } catch (error) {
            console.log(error);
        }
    }
```

- **小视频**
  
```typescript
import { MediaImageOptions, MediaResultType, MediaVideoOptions, Media } from "nativecap";

    /**
     * 录制小视频
     */
    async recordVideo() {
        try {
            let imageOptions: MediaVideoOptions = {
                recordVideoMaxSecond: 30,
                recordVideoMinSecond: 5,
            };

            let result = await Media.recordVideo(imageOptions);

            this.pics.push(result);
            console.log(result.path);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 选择小视频 注意时长 过滤
     */
    async selectVideo() {
        let imageOptions: MediaVideoOptions = {
            maxSelectNum: 9,
            thumbnailWidth: 300,
            thumbnailHeight: 300,
        };
        try {
            let result = await Media.selectVideo(imageOptions);
            let imgs = result.videos;
            this.pics = [];
            for (let i = 0; i < imgs.length; i++) {
                this.pics.push(imgs[i]);
                console.log(imgs[i].path);
                this.files.push(imgs[i].path);
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 预览本地已经选择的视频
     *
     */
    async previewVideo() {
        try {
            await Media.previewVideo({ path: 'test.localFile.mp4' });
        } catch (error) {
            console.log(error);
        }
    }
```

## 内置插件

### 基础功能

- **系统功能**

```typescript
import { Capacitor } from '@capacitor/core';
import { Mobile, Share } from "nativecap";

  /**
   * 选择语言需要重启
   *  zh(简体) cn(繁体) en(英语) auto(跟随系统)
   */
  async switchLanguage(){
    try {
       Mobile.switchLanguage({value: "en"});
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 检查通知开关是否打开
   * 如果没有打开 收不到推送
   */
  async areNotificationsEnabled(){
    try {
     let result = await Mobile.areNotificationsEnabled();
     console.log(`result : ${result.value}`);
    } catch (error) {
      console.log(error);
    }
  }


  /**
   * 跳转过去打开通知开关界面
   *
   */
  async openNotification() {
      try {
          Mobile.openNotification();
          console.log(`如果检查通知开关为 false的情况下 提示去打开通知`);
      } catch (error) {
          console.log(error);
      }
  }

  /**
   * 判断定位服务 总开关 是否打开
   */
  async isLocationServiceEnabled(){
    try {
      let result = await Mobile.isLocationServiceEnabled();
      if(!result.value) {
        console.log("提示需要去打开服务开关才能使用 相关功能");
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 跳转过去打开定位服务开关
   */
  async openLocationService(){
    try{
      let result = await Mobile.openLocationService();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 跳转权限设置
   */
  async toPermissionSetting(){
    try {
      let result = await Mobile.toPermissionSetting();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 判断 app 是否安装
   */
  async isAppInstalled(){
    try {
      let result = await Mobile.isAppInstalled({appId: "androidPackageName or iosBundleId"});
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 获取手机上 app
   */
  async getAppsInfo(){
    try {
      let result = await Mobile.getAppsInfo();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 获取缓存
   */
  async getCacheSize(){
    try {
      let resutl = await Mobile.getCacheSize();
      console.log(resutl);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 清除缓存
   */
  async cleanCache(){
    try {
      let result = await Mobile.cleanCache();
      console.log("clean success");
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 系统分享
   */
  async systemShare(){
    try {
      let shareOptions = {
        title: "我是系统标题",
        text: "就是分享我的快乐^_^",
        url: "http://testUrl",
        dialogTitle: "我是分享弹框 title"
      };
      let result = await Share.share(shareOptions);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

```

- **打开应用**

```typescript
import { Capacitor } from '@capacitor/core';
import { IntentFactory, IntentOptions, Intents} from "nativecap";

  intentFactory: IntentFactory = new IntentFactory(Capacitor.getPlatform());

  /**
   * 打电话
   */
  async callPhone(){
    try {
      let intent = this.intentFactory.callPhone("电话号码 注意 ios 可能有 空格问题")
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 发短信
   */
  async sendSMS(phoneNumber,smsMessage){
    try {
      let intent = this.intentFactory.sendSMS(phoneNumber,smsMessage);
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 发邮件
   */
  async sendEmail(email){
    try {
      let intent = this.intentFactory.sendEmail(email);
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(error);
    }

  /**
   * 打开 QQ
   */
  async talkQQ(qq){
    try {
      let intent = this.intentFactory.talkQQ(qq);
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 打开高德地图
   */
  async openAmap(navUrl) {
    try {
      let intent = this.intentFactory.openAmap(navUrl);
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(console.error();
      )
    }
  }

  /**
   * 打开百度地图
   */
  async openBmap(navUrl) {
    try {
      let intent = this.intentFactory.openBmap(navUrl);
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(console.error();
      )
    }
  }

  /**
   * 打开苹果地图
   */
  async openAppleMap(navUrl) {
    try {
      let intent = this.intentFactory.openAppleMap(navUrl);
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 打开App 设置
   */
  async openAppSetting() {
    try {
      let intent = this.intentFactory.openAppSetting();
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 打开 WiFi 列表
   */
  async openWiFiSetting() {
    try {
      let intent = this.intentFactory.openWiFiSetting();
      let result = await Intents.startIntent(intent);
    } catch (error) {
      console.log(error);
    }
  }
```

- **App事件监听（打开 浏览器 or 应用）**
  
```typescript
import { App, AppLauncher } from "nativecap";

    /**
     * Android 返回键 监听
     */
    backButton() {
        App.addListener("backButton", () => {
            console.log("backButton android");
        });
    }
  
    /**
     * 退出 app 杀死
     */
    async exitApp() {
        App.exitApp();
    }

    /**
     * 一般使用这个退到后台 不杀死
     */
    async hideApp() {
        App.hideApp();
    }

    /**
     * app前后台 监听
     */
    appStateChange() {
        App.addListener("appStateChange", (state: boolean) => {
            console.log("App state changed", state);
        });
    }

    /**
     * 获取 app 前后台状态
     */
    async getState() {
        try {
            const ret = await App.getState();
            console.log("getState: ", ret);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     *  通过别的网址链接 打开此App
     */
    async appUrlOpen() {
        App.addListener("appUrlOpen", (data: any) => {
            console.log("APP URL OPEN: " + data.url);
        });
    }

    /**
     * 获取 打开app的网址
     */
    async getLaunchUrl() {
      try {
        const ret = await App.getLaunchUrl();
        console.log("getLaunchUrl: ", ret);
      } catch (error) {
        console.log(error);
      }
    }

    /**
     * 判断 网址能否打开 app 是否存在
     */
    async canOpenUrl() {
        try {
            const  testAppId = "Android packageName ios BundleId";
            const ret = await AppLauncher.canOpenUrl({
                url: testAppId,
            });
            console.log("Can open url: ", ret.value);
        } catch (error) {
            console.log(error);
        }
    }


    /**
     * 打开网址 start.with(http or https)
     */
    async openUrl() {
        try {
            const testUrl = "https://www.baidu.com";
            const ret = await AppLauncher.openUrl({
                url: testUrl,
            });
            console.log("Open url response: ", ret);
        } catch (error) {
            console.log(error);
        }
    }
```

- **网络监测**
  
```typescript
import { Network } from "nativecap";

    handler = null;

    /**
     * 开始监听网络状态
     */
    startListen() {
        this.handler = Network.addListener(
            "networkStatusChange",
            (status) => {
                console.log("Network status changed", status);
            }
        );
    }

    /**
     * 移除网络监听
     */
    endListen() {
        this.handler && this.handler.remove();
    }

    /**
     * 获取网络监听状态
     */
    async getStatus() {
        let status = await Network.getStatus();
        console.log("NETWORK STATUS", status);
    }
```

- **设备信息**
  
```typescript
import { Device } from "nativecap";

    /**
     * 获取设备信息 可以 统一放到 前端接口 Header 中
     */
    async getDeviceInfo() {
      try {
        const info = await Device.getInfo();
        console.log("Got device info", info);
      } catch (error) {
        console.log(error);
      }
    }

    /**
     * 获取屏幕相关信息
     */
    async getScreenRelatedInfo() {
        try {
        const screenInfo = await Device.getScreenRelatedInfo();
        console.log("screenInfo" + screenInfo);
        console.log("screenInfo.density:" + screenInfo.density);
        console.log("screenInfo.width:" + screenInfo.width);
        console.log("screenInfo.height:" + screenInfo.height);
        } catch (error) {
          console.log(error);
        }
    }

    /**
     * 获取语言信息 做国际化处理
     * 需要结合 Mobile.switchLanguage
     */
    async getDeviceLanguageCode() {
        try {
            const code = await Device.getLanguageCode();
            console.log(code);
        } catch (error) {
            console.log(error);
        }
    }
```

- **剪切板**
  
```typescript
import { Clipboard } from "nativecap";

    /**
     * 复制文字
     */
    clipboardSetString() {
        try {
            Clipboard.write({ string: "Hello, Moto" });
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 获取剪切板文字
     */
    async clipboardGetString() {
        try {
            let str = await Clipboard.read();
            console.log("Got string from clipboard:", str.value);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 清空剪切板
     */
    clipboardSetEmptyString() {
        try {
            Clipboard.write({ string: "" });
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 复制 网址到 剪切板
     */
    clipboardSetURL() {
        try {
            Clipboard.write({ url: "http://www.baidu.com/" });
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 读取剪切板 网址
     */
    async clipboardGetURL() {
        try {
            let url = await Clipboard.read();
            console.log("Get URL from clipboard", url.value);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 复制 base64 图片
     */
    clipboardSetImage() {
        try {
            Clipboard.write({
                image: base64Image,
            });
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 读取复制 base64图片
     */
    async clipboardGetImage() {
        try {
            const image = await Clipboard.read();
            console.log("Got image", image.value);
        } catch (error) {
            console.log(error);
        }
    }
```

- **状态栏**
  
```typescript
import { StatusBar } from "nativecap";

    /**
     * 获取状态栏 高度
     */
    async getInfo() {
        try {
            let result = await StatusBar.getInfo();
            console.log("StatusBar- getInfo", result);
        } catch (error) {
            console.log("StatusBar catch", error.message);
        }
    }

```
