import chalk from "chalk";
// import child_process from "child_process";
import { defaultsDeep } from "lodash";
import fs from "fs-extra";
import readdirp from "readdirp";
import pkg from "../../package.json";

export default async (templatePath: string) => {
  const cwd = process.cwd();

  const files = await readdirp.promise(templatePath);

  // 复制本地模板
  files.forEach((entry) => {
    let relationPath = entry.path;
    const file = entry.fullPath;

    if (/dist|node_modules|DS_Store|docs|package\-lock\.json/.test(file)) {
      return;
    }

    if (relationPath === "package.tpl.json") return;

    const stats = fs.statSync(file);

    if (stats.isDirectory()) {
      return;
    }

    let content = fs.readFileSync(file).toString();

    fs.outputFileSync(`${cwd}/${relationPath}`, content);
  });

  let pkgCfg = {};

  if (fs.existsSync(`${cwd}/package.json`)) {
    pkgCfg = {
      ...pkgCfg,
      ...require(`${cwd}/package.json`),
    };
  }
  // 合并package.json
  // 模板的不能存在package.json，不然cli发包容易和files冲突，使用.tpl.json代替
  const tmpPkg = require(templatePath + "/package.tpl.json");
  fs.outputFileSync(
    `${cwd}/package.json`,
    JSON.stringify(
      defaultsDeep(pkgCfg, tmpPkg, {
        __createdBy: `tfes-cli(${pkg.version})`,
      }),
      null,
      2
    )
  );

  console.log();
  console.log(chalk.green("初始化完成"));
  // console.log();
  // console.log(`开始安装依赖...`);

  // child_process.execSync("npm install");

  // console.log();
  // console.log(`安装完成!`);
};
