//타입스크립트에게 타입에 대해서 설명하는 과정(declaration file)
interface Config {
    url:string;
}

declare module "myPackage" {
    function init(config:Config):boolean;
    function exit(code:number): number;
}