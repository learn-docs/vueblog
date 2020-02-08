1. 非H5端不支持`*`选择器
2. `body`元素改为`page`,`div`和`ul`和`li`等改为`view`,
3. `span`和`font`改为`text`
4. `a`改为`navigator`
5. `img`改为`image`

- webview浏览器兼容性
- 不要使用太新的css，会导致界面异常
- 并不是不能使用，只是不要使用太新的css

?> `Android4.4`也支持`flex`

!> 从 `uni-app 2.5.3` 起，`Android`端支持引入腾讯`x5`浏览器内核

- [DCloud App集成 X5 内核（腾讯浏览服务TBS）说明](https://ask.dcloud.net.cn/article/36806)
- [关于手机webview内核、默认浏览器、各家小程序的渲染层浏览器的区别和兼容性](https://ask.dcloud.net.cn/article/1318)

![css兼容性](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/carbon.png)

![非H5端](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/carbon (1).png)

![非H5端](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/carbondd.png)

> 小程序或App正常，但H5异常的可能性

- 使用小程序原生组件，而没有使用vue标准的跨端组件。
- wxcomponets只有小程序和App才支持。

![JS注意](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200208191506.png)

- 虽然使用vue，但在app和小程序里，不是spa而是mpa
- 位置坐标系统一为国测局坐标系gcj02，这种坐标系可以被多端支持。

**H5 发布到服务器注意**

![manifest.json](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/6ab94f68e109bb07e4f422c95a2c9015.png)

图片来源于：uni-app官方文档

项目下的 `unpackage/dist/build/h5` 目录找到出的资源

![注意事项](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200208192538.png)

- [Chrome 调试跨域问题解决方案之插件篇](https://ask.dcloud.net.cn/article/35267)

- [firefox跨域插件](https://addons.mozilla.org/zh-CN/firefox/addon/access-control-allow-origin/)

![注意事项](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200208193249.png)

- [关于手机webview内核、默认浏览器、各家小程序的渲染层浏览器的区别和兼容性](https://ask.dcloud.net.cn/article/1318)

- 使用运行时代码压缩

    - `HBuilderX`创建的项目勾选运行-->运行到小程序模拟器-->运行时是否压缩代码
    - `cli`创建的项目可以在`pacakge.json`中添加参数`--minimize`，示例：`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`

本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/