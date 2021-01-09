import chalk from "chalk";
import inquirer from "inquirer";

import { Menu, menus } from "./config";

const pkg = require("../package.json");

export default async () => {
  console.log(chalk.green("tfes-cli(ver:" + pkg.version + ")"));
  console.log();

  // 控制台交互
  const result: {
    menu: Menu["key"];
  } = await inquirer.prompt([
    {
      name: "menu",
      type: "list",
      message: "功能列表：",
      pageSize: 40,
      default: menus[0].key,
      choices: menus.map((meta) => {
        return {
          value: meta.key,
          short: meta.title,
          name: [
            "功能：" + meta.title,
            "  描述：" +
              (Array.isArray(meta.desc)
                ? meta.desc.join("\n")
                : meta.desc || "无"),
            "",
          ].join("\n"),
        };
      }),
    },
  ]);

  const menu = menus.find((item) => item.key === result.menu);

  if (!menu) {
    console.log("功能不存在！");
    return;
  }

  await menu.handler();
};
