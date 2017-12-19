# flagwind-web-solution

> 这是一个 [vue-cli](https://github.com/vuejs/vue-cli) 项目模板，开发语言为 TypeScript，默认集成 [flagwind-core](https://github.com/flagwind/flagwind-core)、[flagwind-web](https://github.com/flagwind/flagwind-web) 等库，可用于 PC 端项目。

## 如何使用?

首先安装 Vue 官方提供的工具 [vue-cli]((https://github.com/vuejs/vue-cli))

``` bash
$ npm install -g vue-cli
```

其次执行如下命令:

``` bash
$ vue init flagwind/flagwind-web-solution
```

## 包含哪些内容?

- `npm run dev` 进入调试模式，默认地址为 `http://localhost:8030`
- `npm run lint` 使用 `tslint` 验证源码
- `npm run build:lib` 预打包核心依赖库
- `npm run build` 生产打包

## 注意事项

因为采用了 dll 预打包，所以首次（或核心库版本发生变动），需要执行:

``` bash
$ npm run build:lib
```

> 默认核心库包含如下内容:

- vue
    - vue
    - vuex
    - vue-router
- flagwind
    - flagwind-core
    - flagwind-web
