# 开始

## 准备工作

### 下载代码

```shell
git clone https://github.com/vuejs/core.git
```

### 安装依赖

```shell
pnpm install
```

### 开启sourcemap

package.json

```shell
"dev": "node scripts/dev.js --sourcemap"
```

### 打开浏览器源码映射

> 控制台->设置->偏好设置->JavaScript源代码映射

### 运行开发环境

```shell
pnpm run dev
```

### 运行demo

```shell
pnpm run serve
```

## 目录介绍

```json
core
├─ packages
│  ├─ compiler-core     // 核心编译器
│  ├─ compiler-dom      // dom编译器
│  ├─ compiler-sfc      // vue单文件编译器
│  ├─ compiler-ssr      // 服务端渲染编译
│  ├─ dts-test          // 测试Typescript类型以确保类型保持为预期类型
│  ├─ reactivity        // 响应式模式，可以和其它框架配合使用
│  ├─ runtime-core      // 运行时核心实例相关代码
│  ├─ runtime-dom       // 运行时dom相关API、属性、事件处理  
│  ├─ runtime-test      // 运行时测试相关代码
│  ├─ server-renderer   // 服务器渲染
│  ├─ sfc-playground    // 单文件组件在线调试器
│  ├─ shared            // 内部工具库，不对外暴露
│  ├─ size-check        // 测试代码体积
│  ├─ template-explorer // 用于调试编译器输出的开发工具
│  ├─ vue               // 面向公众的完整版本，包含运行时和编译器
│  ├─ vue-compat        // 是Vue 3的一个构建，它提供了可配置的Vue 2兼容行为。
│  └─ global.d.ts       // TypeScript声明文件

```

### 推荐文章

[写给小白（自己）的vue3源码导读！](https://cloud.tencent.com/developer/article/1962304)

[【Vue原理】Vue源码阅读总结大会 - 序](https://zhuanlan.zhihu.com/p/53184632)

[【Vue原理】看Vue源码，不会调试不行啊](https://zhuanlan.zhihu.com/p/53206857)

[Vue 源码研究会](https://zhuanlan.zhihu.com/learn-vue-source-code)
