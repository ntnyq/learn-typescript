// declare module 与 declare namespace 不同的是
// 前者后面加 路径 后者加 命名空间
// reference 可以引入类型 且不会将声明的类型变为局部的 所以不用 import
// .d.ts 文件内 如果无 import export 语句 则类型是全局的，否则是模块内的

declare const helloWorld: (msg: string) => void
