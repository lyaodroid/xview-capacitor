import path from "path";
import fs from "fs";
import fetch from "node-fetch";

var shell = require("shelljs");

const API_DIR = path.join(__dirname, "apis");

type PluginInfo = { pluginId: string; pluginName: string };

const pluginApis: PluginInfo[] = [
  // { pluginId: "alipay", pluginName: "AliPayPlugin" },
  // { pluginId: "app", pluginName: "AppPlugin" },
  // { pluginId: "app-launcher", pluginName: "AppLauncherPlugin" },

  // { pluginId: "audio", pluginName: "AudioPlugin" },

  // { pluginId: "camera", pluginName: "CameraPlugin" },
  // { pluginId: "clipboard", pluginName: "ClipboardPlugin" },
  // { pluginId: "device", pluginName: "DevicePlugin" },
  // { pluginId: "filesystem", pluginName: "FilesystemPlugin" },
  // { pluginId: "geolocation", pluginName: "GeolocationPlugin" },

  // { pluginId: "hot-code-push", pluginName: "HotCodePushPlugin" },

  // { pluginId: "http", pluginName: "HttpPlugin" },
  // { pluginId: "intents", pluginName: "IntentsPlugin" },
  // { pluginId: "keyboard", pluginName: "KeyboardPlugin" },
  // { pluginId: "media", pluginName: "MediaPlugin" },
  // { pluginId: "mobile", pluginName: "MobilePlugin" },
  // { pluginId: "network", pluginName: "NetworkPlugin" },

  // {
  //   pluginId: "push-notifications",
  
  //   pluginName: "PushNotificationsPlugin",
  // },

  // { pluginId: "qq", pluginName: "QQPlugin" },
  // { pluginId: "scanner", pluginName: "ScannerPlugin" },
  // { pluginId: "share", pluginName: "SharePlugin" },

  { pluginId: "speech-asr", pluginName: "SpeechAsrPlugin" },//
  { pluginId: "speech-tts", pluginName: "SpeechTtsPlugin" },//

  // { pluginId: "splash-screen", pluginName: "SplashScreenPlugin" },

  // { pluginId: "status-bar", pluginName: "StatusBarPlugin" },
  // { pluginId: "storage", pluginName: "StoragePlugin" },
  // { pluginId: "update", pluginName: "UpdatePlugin" },
  // { pluginId: "webpage", pluginName: "WebPagePlugin" },
  // { pluginId: "wechat", pluginName: "WeChatPlugin" },
];

async function buildPluginApiDocs(plugin: PluginInfo) {
  const [readme, pkgJson] = await Promise.all([
    getReadme(plugin.pluginId),
    getPkgJsonData(plugin.pluginId),
  ]);

  const apiContent = createApiPage(plugin.pluginId, readme, pkgJson);
  const fileName = `${plugin.pluginId}.md`;

  const filePath = path.join(API_DIR, fileName);

  console.log(
    `Plugin API Files writeFileSync: fileName = ${fileName} filePath = ${filePath}`
  );

  fs.exists(filePath, (exists) => {
    if (!exists) {
      fs.writeFileSync(filePath, apiContent);
    }
    const pluginName = plugin.pluginName;
    writeIndexToFiles(plugin.pluginId);
    shell.exec(
      `docgen --project scripts/tsconfig.json --api ${pluginName} --output-readme ${filePath} --output-json scripts/docs/${plugin.pluginId}.json`
    );
  });
}

function createApiPage(pluginId: string, readme: string, pkgJson: any) {
  const title = `${toTitleCase(pluginId)} Capacitor Plugin API`;
  const desc = pkgJson.description
    ? pkgJson.description.replace(/\n/g, " ")
    : title;
  const editUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/README.md`;
  const editApiUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/src/definitions.ts`;

  return `
---
title: ${title}
description: ${desc}
editUrl: ${editUrl}
editApiUrl: ${editApiUrl}
---

${readme}`.trim();
}

async function getReadme(pluginId: string) {
  const readMePath = "scripts/README.md";

  console.log(
    `Plugin API Files getReadme: ${pluginId} readMePath:  ${readMePath}`
  );

  const content = fs.readFileSync(readMePath, "utf-8");
  return content;
}

async function getPkgJsonData(pluginId: string) {
  const url = `https://cdn.jsdelivr.net/npm/@capacitor/app/package.json`;
  const rsp = await fetch(url);
  return rsp.json();
}

/**
 * 编译指定 插件 防止 不同插件中 同名 插件覆盖
 * @param pluginId
 */
async function writeIndexToFiles(pluginId: string) {
  const indexPath = "scripts/tsconfig.json";
  const content = fs.readFileSync(indexPath, "utf-8");

  let plugin = content.match(/src\/(\S*)\/index/)[1];

  console.log("writeIndexToFiles plugin:" + plugin);

  const result = content.replace(plugin, `${pluginId}`);

  console.log("writeIndexToFiles:" + result);

  fs.writeFileSync(indexPath, result);
}

async function writeListToIndex(pluginIds: any) {
  const indexPath = path.join(API_DIR, "index.md");
  const content = fs.readFileSync(indexPath, "utf-8");
  const re = /## List of Official Plugins[\s\S]+?(?=^#)/gm;
  const result = content.replace(
    re,
    "## List of Official Plugins\n\n" +
      pluginIds
        .map((id) => `- [${toTitleCase(id)}](/docs/apis/${id})`)
        .join("\n") +
      "\n\n"
  );

  fs.writeFileSync(indexPath, result);
}

async function main() {
  await Promise.all(pluginApis.map(buildPluginApiDocs));
  // await writeListToIndex(pluginApis);
  console.log(`Plugin API Files Updated 🎸`);
}

function toTitleCase(str) {
  return str.replace(/(^\w|-\w)/g, (s: string) => {
    return s.replace(/-/, " ").toUpperCase();
  });
}

main();
