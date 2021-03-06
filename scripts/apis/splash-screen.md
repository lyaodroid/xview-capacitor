---
title: Splash Screen Capacitor Plugin API
description: The App API handles high level App state and events.For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/splash-screen/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/splash-screen/src/definitions.ts
---


# [*`opendocs.alipay`*](https://opendocs.alipay.com/open/54/104509)

## API

<docgen-index>

* [`show(...)`](#show)
* [`hide(...)`](#hide)
* [`showGuide(...)`](#showguide)
* [`addListener('splashScreenResult', ...)`](#addlistenersplashscreenresult-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### show(...)

```typescript
show(options?: ShowOptions) => Promise<void>
```

Show the splash screen

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#showoptions">ShowOptions</a></code> |

**Since:** 1.0.0

--------------------


### hide(...)

```typescript
hide(options?: HideOptions) => Promise<void>
```

Hide the splash screen

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#hideoptions">HideOptions</a></code> |

**Since:** 1.0.0

--------------------


### showGuide(...)

```typescript
showGuide(options?: GuideOptions) => Promise<void>
```

调用引导图

下载展示时 需要判断

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#guideoptions">GuideOptions</a></code> |

**Since:** 1.0.0

--------------------


### addListener('splashScreenResult', ...)

```typescript
addListener(eventName: "splashScreenResult", listenerFunc: SplashListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

此方法 暂时 无法使用 因为交互 白屏问题
Listen for changes in the App's active state (whether the app is in the foreground or background)

| Param              | Type                                                      |
| ------------------ | --------------------------------------------------------- |
| **`eventName`**    | <code>'splashScreenResult'</code>                         |
| **`listenerFunc`** | <code><a href="#splashlistener">SplashListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all native listeners for this plugin

**Since:** 1.0.0

--------------------


### Interfaces


#### ShowOptions

| Prop                  | Type                 | Description                                                         | Default           | Since |
| --------------------- | -------------------- | ------------------------------------------------------------------- | ----------------- | ----- |
| **`autoHide`**        | <code>boolean</code> | Whether to auto hide the splash after showDuration                  |                   | 1.0.0 |
| **`fadeInDuration`**  | <code>number</code>  | How long (in ms) to fade in.                                        | <code>200</code>  | 1.0.0 |
| **`fadeOutDuration`** | <code>number</code>  | How long (in ms) to fade out.                                       | <code>200</code>  | 1.0.0 |
| **`showDuration`**    | <code>number</code>  | How long to show the splash screen when autoHide is enabled (in ms) | <code>3000</code> | 1.0.0 |


#### HideOptions

| Prop                  | Type                | Description                   | Default          | Since |
| --------------------- | ------------------- | ----------------------------- | ---------------- | ----- |
| **`fadeOutDuration`** | <code>number</code> | How long (in ms) to fade out. | <code>200</code> | 1.0.0 |


#### GuideOptions

| Prop                     | Type                  | Description        | Since |
| ------------------------ | --------------------- | ------------------ | ----- |
| **`androidGuideScreen`** | <code>string[]</code> | android 动态配置 几张引导图 | 1.0.0 |
| **`iosGuideScreen`**     | <code>any</code>      | ios 动态配置 几张引导图     | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |


#### SplashListenerEvent


#### PluginConfigBuild

| Prop                            | Type                                                                                                                          | Description                                                                                                                                                           | Default             | Since |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----- |
| **`launchShowDuration`**        | <code>number</code>                                                                                                           | How long to show the launch splash screen when autoHide is enabled (in ms)                                                                                            | <code>0</code>      | 1.0.0 |
| **`launchAutoHide`**            | <code>boolean</code>                                                                                                          | Whether to auto hide the splash after launchShowDuration                                                                                                              | <code>true</code>   | 1.0.0 |
| **`backgroundColor`**           | <code>string</code>                                                                                                           | Color of the background of the Splash Screen in hex format, #RRGGBB or #RRGGBBAA                                                                                      |                     | 1.0.0 |
| **`androidSplashResourceName`** | <code>string</code>                                                                                                           | Name of the resource to be used as Splash Screen Only available on Android                                                                                            | <code>splash</code> | 1.0.0 |
| **`androidScaleType`**          | <code>'CENTER' \| 'CENTER_CROP' \| 'CENTER_INSIDE' \| 'FIT_CENTER' \| 'FIT_END' \| 'FIT_START' \| 'FIT_XY' \| 'MATRIX'</code> | The [ImageView.ScaleType](https://developer.android.com/reference/android/widget/ImageView.ScaleType) used to scale the Splash Screen image Only available on Android | <code>FIT_XY</code> | 1.0.0 |
| **`showSpinner`**               | <code>boolean</code>                                                                                                          | Show a loading spinner on the Splash Screen                                                                                                                           |                     | 1.0.0 |
| **`androidSpinnerStyle`**       | <code>'horizontal' \| 'small' \| 'large' \| 'inverse' \| 'smallInverse' \| 'largeInverse'</code>                              | Style of the Android spinner                                                                                                                                          | <code>large</code>  | 1.0.0 |
| **`iosSpinnerStyle`**           | <code>'small' \| 'large'</code>                                                                                               | Style of the iOS spinner Only available on iOS.                                                                                                                       | <code>large</code>  | 1.0.0 |
| **`spinnerColor`**              | <code>string</code>                                                                                                           | Color of the spinner in hex format, #RRGGBB or #RRGGBBAA                                                                                                              |                     | 1.0.0 |
| **`splashFullScreen`**          | <code>boolean</code>                                                                                                          | Hide the status bar on the Splash Screen Only available on Android                                                                                                    |                     | 1.0.0 |
| **`splashImmersive`**           | <code>boolean</code>                                                                                                          | Hide the status bar and the software navigation buttons on the Splash Screen Only available on Android                                                                |                     | 1.0.0 |


### Type Aliases


#### SplashListener

<code>(event: <a href="#splashlistenerevent">SplashListenerEvent</a>): void</code>

</docgen-api>