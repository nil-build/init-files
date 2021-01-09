declare module "*.module.less" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.less" {
  const content: string;
  export default content;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
