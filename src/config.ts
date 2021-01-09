import path from "path";
import createTypeScriptReactComponent from "./modules/createTypeScriptReactComponent";

export interface Menu {
  key: "TypeScript-React-Component" | "TypeScript-Package";
  title: string;
  desc: string;
  handler: () => Promise<any>;
}

export const menus: Menu[] = [
  {
    key: "TypeScript-React-Component",
    title: "TypeScript-React-Component",
    desc: "自动生成基于TypeScript的React组件开发环境",
    handler: async () => {
      const templatePath = path.resolve(
        __dirname,
        "../templates/TypeScriptReactComponent"
      );
      return await createTypeScriptReactComponent(templatePath);
    },
  },
  {
    key: "TypeScript-Package",
    title: "TypeScript-Package",
    desc: "自动生成基于TypeScript的开发环境",
    handler: async () => {
      const templatePath = path.resolve(
        __dirname,
        "../templates/TypeScriptPackage"
      );
      return await createTypeScriptReactComponent(templatePath);
    },
  },
];
