import path from "path";
import fs from "fs";
import fetch from "node-fetch";

var shell = require('shelljs');

const API_DIR = path.join(__dirname, "apis");

type PluginInfo = { pluginId: string; pluginName: string };

const pluginApis: PluginInfo[] = [
  { pluginId: "app", pluginName: "AppPlugin" },
  { pluginId: "app-launcher", pluginName: "AppLauncherPlugin" },
];


async function buildPluginApiDocs(plugin: PluginInfo) {
  const [readme, pkgJson] = await Promise.all([
    getReadme(plugin.pluginId),
    getPkgJsonData(plugin.pluginId),
  ]);

  const apiContent = createApiPage(plugin.pluginId, readme, pkgJson);
  const fileName = `${plugin.pluginId}.md`;
  const filePath = path.join(API_DIR, fileName);

  fs.exists(filePath, (exists) => {
    if (!exists) {
      fs.writeFileSync(filePath, apiContent);
    }
  });

  console.log(
    `Plugin API Files writeFileSync: fileName = ${fileName} filePath = ${filePath}`
  );
  const pluginName = plugin.pluginName;
  shell.exec(`docgen --api ${pluginName} --output-readme ${filePath}`)

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
  console.log(`Plugin API Files getReadme: ` + pluginId);
  const readMePath = "./README.md";
  console.log(`Plugin API Files readMePath: ` + readMePath);

  const content = fs.readFileSync(readMePath, "utf-8");
  return content;
}

async function getPkgJsonData(pluginId: string) {
  const url = `https://cdn.jsdelivr.net/npm/@capacitor/${pluginId}/package.json`;
  const rsp = await fetch(url);
  return rsp.json();
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
