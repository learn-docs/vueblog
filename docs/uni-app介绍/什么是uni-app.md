> `uni-app`是使用`vue.js`开发的前端应用的框架，它可以发布多个平台。一套代码可以编写到8个平台，如：

1. Android版
2. ios版
3. h5版
4. 微信小程序版
5. 支付宝小程序版
6. 百度小程序版
7. 头条小程序版
8. QQ小程序版

**uni-app终极跨平台解决方案**

?> 背景简介

!> 当前跨平台开发存在的3个问题

1. 多端泛滥
2. 体验不好
3. 生态不丰富

?> uni-app产品的特征：

1. 跨平台更多

* 真正做到“一套代码，多端发行”
* 条件编译：优雅的在一个项目里调用不同平台的特色功能！

2. 运行体验更好

* 组件，api与微信小程序一致
* 兼容weex原生渲染（通常用于局部）

3. 通用技术栈，学习成本更低

* vue的语法，小程序的api
* 内嵌mpvue

4. 开放生态，组件更丰富

* 支持通过 npm 安装第三方包
* 支持微信小程序自定义组件以及sdk
* 兼容mpvue组件以及项目
* app端支持和原生混合编码
* DCloud将发布插件市场

?> uni-app 解决了跨平台存在的问题

1. 跨更多的平台
2. 体验更好
3. 学习成本低，容易上手
4. 开放生态，组件更丰富

**功能框架图**

![uni-app功能框架图](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/uni0124.png)

图片来源于：uni-app官方文档

uni-app提供了条件编译优化：(只编译到对应的平台中)

    <template>
        <view class="content">
            <!-- #ifdef MP-WEIXIN -->
            <view class="">
                只编译到小程序
            </view>
            <!-- #endif -->
            <!-- #ifdef APP-PLUS -->
            <view class="">
                只会编译到app
            </view>
            <!-- #endif -->
        </view>
    </template>

**uni-app功能框架**

- uni内置组件和api

uni-app将常用的组件和api进行了跨平台的封装，可覆盖大部分的业务需求

- uni扩展组件以及mpvue兼容组件

包括uni ui等各种扩展组件，sdk，模板项目均在插件市场

- HTML5Plus

跨ios，Android的JS增加引擎

- nvue

支持weex原生渲染

**一套代码，运行多个平台**

运行效果图：

![运行效果](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/run1x9.jpg)

图片来源于：uni-app官方文档

本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/