# {{ name }}

> {{ description }}

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

> 自定义核心库在 `vendor.js` 中配置

如果项目依赖如 `axios`，`lodash` 等库，只需按照如下方式导入即可:

``` js
import axios from "axios";
import lodash from "lodash";
```

## 常用命令

- `npm run dev` 进入调试模式，默认地址为 `http://localhost:8030`
- `npm run lint` 使用 `tslint` 验证源码
- `npm run build:lib` 预打包核心依赖库
- `npm run build` 生产打包