> `pages.json`详解

`pages.json`文件用来对`uni-app`进行全局配置，决定页面文件的路径，窗口样式，原生的导航栏，底部的原生tabbar等。

它类似微信小程序中的`app.json`的页面管理部分，定位权限申请等原先是属于`app.json`的内容，在`uni-app`中是在`manifest`中配置。

> `pages.json`中的配置项

属性`globalStyle`，类型为`Object`，描述为设置页面的窗口表现

属性`pages`，类型为`ObjectArray`，描述为设置路径以及窗口的表现

属性`easycom`，类型为`Object`，描述为组件自动引入规则

属性`tabBar`，类型为`Object`，描述为设置底部`tab`的表现

属性`condition`，类型为`Object`，描述为启动模式配置

属性`subPackages`，类型为`ObjectArray`，描述为分包加载配置

属性`preloadRule`，类型为`Object`，描述为分包预下载规则

属性`workers`，类型为`String`，描述为`worker`代码放置的目录

> `pages.json`一段代码：

代码：

    {
        "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
            {
                "path": "pages/index/index",
                "style": {
                    "navigationBarTitleText": "uni-app"
                }
            }
        ],
        "globalStyle": {
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "uni-app",
            "navigationBarBackgroundColor": "#F8F8F8",
            "backgroundColor": "#F8F8F8"
        }
    }

> 包含了所有配置选项的 `pages.json` ：

代码：

    {
        "pages": [{
            "path": "pages/component/index",
            "style": {
                "navigationBarTitleText": "组件"
            }
        }, {
            "path": "pages/API/index",
            "style": {
                "navigationBarTitleText": "接口"
            }
        }, {
            "path": "pages/component/view/index",
            "style": {
                "navigationBarTitleText": "view"
            }
        }],
        "condition": { //模式配置，仅开发期间生效
            "current": 0, //当前激活的模式（list 的索引项）
            "list": [{
                "name": "test", //模式名称
                "path": "pages/component/view/index" //启动页面，必选
            }]
        },
        "globalStyle": {
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "演示",
            "navigationBarBackgroundColor": "#F8F8F8",
            "backgroundColor": "#F8F8F8",
            "usingComponents":{
                "collapse-tree-item":"/components/collapse-tree-item"
            },
        "pageOrientation": "portrait"//横屏配置，全局屏幕旋转设置(仅 APP/微信/QQ小程序)，支持 auto / portrait / landscape
        },
        "tabBar": {
            "color": "#7A7E83",
            "selectedColor": "#3cc51f",
            "borderStyle": "black",
            "backgroundColor": "#ffffff",
            "height": "50px",
            "fontSize": "10px",
            "iconWidth": "24px",
            "spacing": "3px",
            "list": [{
                "pagePath": "pages/component/index",
                "iconPath": "static/image/icon_component.png",
                "selectedIconPath": "static/image/icon_component_HL.png",
                "text": "组件"
            }, {
                "pagePath": "pages/API/index",
                "iconPath": "static/image/icon_API.png",
                "selectedIconPath": "static/image/icon_API_HL.png",
                "text": "接口"
            }],
            "midButton": {
                "width": "80px",
                "height": "50px",
                "text": "文字",
                "iconPath": "static/image/midButton_iconPath.png",
                "iconWidth": "24px",
                "backgroundImage": "static/image/midButton_backgroundImage.png"
            }
        },
    "easycom": {
        "autoscan": true, //是否自动扫描组件
        "custom": {//自定义扫描规则
            "uni-(.*)": "@/components/uni-$1.vue"
        }
    }
    }

`globalStyle`是用于设置应用的状态栏，导航条，标题，窗口背景颜色等。

`navigationBarBackgroundColor`用于导航栏背景颜色

`navigationBarTextStyle`用于导航栏标题颜色及状态栏前景颜色，仅支持 black/white

`navigationBarTitleText`用于导航栏标题文字内容

`navigationStyle`用于导航栏样式，仅支持 `default/custom`。`custom`即取消默认的原生导航栏-微信小程序 7.0+、百度小程序、H5、App（2.0.3+）

`backgroundColor`用于窗口的背景色-微信小程序

`backgroundTextStyle`用于下拉 `loading` 的样式，仅支持 `dark / light`。-微信小程序

`enablePullDownRefresh`用于是否开启下拉刷新

`onReachBottomDistance`用于页面上拉触底事件触发时距页面底部距离，单位只支持`px`

`backgroundColorTop`用于顶部窗口的背景色。-仅 `iOS` 平台

`backgroundColorBottom`用于底部窗口的背景色。-仅 `iOS` 平台

`titleImage`用于导航栏图片地址（替换当前文字标题），支付宝小程序内必须使用https的图片链接地址。-支付宝小程序、H5、APP

`transparentTitle`用于导航栏透明设置。支持 `always` 一直透明 / `auto` 滑动自适应 / `none` 不透明。-支付宝小程序、H5、APP

`titlePenetrate`用于导航栏点击穿透。-支付宝小程序、H5

`pageOrientation`用于横屏配置，屏幕旋转设置，仅支持 `auto` / `portrait` / `landscape`。-App 2.4.7+、微信小程序。

`animationType`用于窗口显示的动画效果。-App

`animationDuration`用于窗口显示动画的持续时间，单位为 ms。-App

`app-plus`用于设置编译到 App 平台的特定样式。-App

`h5`用于设置编译到 H5 平台的特定样式。-H5

`mp-alipay`用于设置编译到 `mp-alipay` 平台的特定样式。-支付宝小程序

`mp-weixin`用于设置编译到 `mp-weixin` 平台的特定样式。-微信小程序

`mp-baidu`用于设置编译到 `mp-baidu` 平台的特定样式。-百度小程序

`mp-toutiao`用于设置编译到 `mp-toutiao` 平台的特定样式。-字节跳动小程序

`mp-qq`用于设置编译到 `mp-qq` 平台的特定样式。-QQ小程序

`usingComponents`用于引用小程序组件。

> PS

- 支付宝小程序使用`titleImage`时，需要使用`https`的图片链接地址，需要在真机调试才能看到效果，支付宝开发者工具里看不到效果。

- `globalStyle`中设置的`titleImage`也会覆盖掉`pages`-》`style`内的设置文字标题。

**pages**

`pages`节点接收一个数组，数组每个项都是一个对象。

属性`path`的类型为`String`，描述为页面路径。

属性`style`的类型为`Object`，配置页面窗口表现。

> 代码：

开发目录：

    ┌─pages               
    │  ├─index
    │  │  └─index.vue    
    │  └─login
    │     └─login.vue    
    ├─static             
    ├─main.js       
    ├─App.vue          
    ├─manifest.json  
    └─pages.json            

在`pages.json`中写代码：

    {
        "pages": [
            {
                "path": "pages/index/index", 
                "style": { ... }
            }, {
                "path": "pages/login/login", 
                "style": { ... }
            }
        ]
    }

> `style`用于设置每个页面的状态栏，导航条，标题，窗口背景颜色等等。

页面中的配置项会覆盖`globalStyle`中相同的配置项

`navigationBarBackgroundColor`用于导航栏背景颜色

`navigationBarTextStyle`用于导航栏标题颜色及状态栏前景颜色，仅支持 `black/white`

`navigationBarTitleText`用于导航栏标题文字内容

`navigationBarShadow`用于导航栏阴影

`navigationStyle`用于导航栏样式，仅支持 `default/custom`。`custom`即取消默认的原生导航栏。-微信小程序 7.0+、百度小程序、H5、App（2.0.3+）

`disableScroll`用于设置为 true 则页面整体不能上下滚动（bounce效果），只在页面配置中有效，在globalStyle中设置无效。-微信小程序（iOS）、百度小程序（iOS）

`backgroundColor`用于窗口的背景颜色。-微信小程序、百度小程序、头条小程序。

`backgroundTextStyle`用于下拉 `loading` 的样式，仅支持 `dark/light`。

`enablePullDownRefresh`用于是否开启下拉刷新

`onReachBottomDistance`用于页面上拉触底事件触发时距页面底部距离，单位只支持px。

`backgroundColorTop`用于顶部窗口的背景色。-仅 iOS 平台

`backgroundColorBottom`用于底部窗口的背景色。仅 iOS 平台

`titleImage`用于导航栏图片地址（替换当前文字标题），支付宝小程序内必须使用https的图片链接地址。-支付宝小程序、H5

`transparentTitle`用于导航栏透明设置。支持 `always` 一直透明 / `auto` 滑动自适应 / `none` 不透明。-支付宝小程序、H5、APP。

`titlePenetrate`用于导航栏点击穿透。-支付宝小程序、H5。

`app-plus`用于设置编译到 App 平台的特定样式。-App

`mp-alipay`用于设置编译到 mp-alipay 平台的特定样式。-支付宝小程序

`mp-weixin`用于设置编译到 mp-weixin 平台的特定样式。-微信小程序

`mp-baidu`用于设置编译到 mp-baidu 平台的特定样式。-百度小程序

`mp-toutiao`用于设置编译到 mp-toutiao 平台的特定样式。-字节跳动小程序

`mp-qq`用于设置编译到 mp-qq 平台的特定样式。-QQ小程序

`usingComponents`用于引用小程序组件。-App、微信小程序、支付宝小程序、百度小程序

代码：

    {
    "pages": [{
        "path": "pages/index/index",
        "style": {
            "navigationBarTitleText": "首页",//设置页面标题文字
            "enablePullDownRefresh":true//开启下拉刷新
        }
        },
        ...
    ]
    }

> 自定义导航栏使用注意

当`navigationStyle`设为`custom`或`titleNView`设为`false`时，原生导航栏不显示。

?> 非H5端，手机顶部状态栏区域会被页面内容覆盖。这是因为窗体是沉浸式的原因，即全屏可写内容。

`uni-app`提供了状态栏高度的css变量`--status-bar-height`，如果需要把状态栏的位置从前景部分让出来，可以写一个`idv`，高度为`css`变量。

    <template>
    <view>
        <view class="status_bar">
            <!-- 这里是状态栏 -->
        </view>
        <view> 状态栏下的文字 </view>
    </view>
    </template>    
    <style>
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
    </style>

> 推荐使用[自定义导航栏NavBar](https://ext.dcloud.net.cn/plugin?id=52)，当原生导航栏不满足需求时，这个前端导航栏自动处理了状态栏高度占位问题。

使用前端导航栏原生的下拉刷新，会出现问题。

1. 微信小程序下的Ios需要下拉更长的长度才能看到刷新的三个点，而Android是要从屏幕顶部下拉，否则无法看到导航栏下方下拉效果。
2. 如果一定需要从前端导航栏下拉，小程序下只能放弃原生下拉刷新的效果。直接纯前端模拟。
3. 参考[下拉刷新上拉加载组件(支持原生页面和局部区域滚动) ](https://ext.dcloud.net.cn/plugin?id=343)
4. 在`app`和`h5`下，原生下拉刷新了`circle`样式，可以指定`offset`偏移量，`pages.json`的`app-plus`下配置，自定义下拉权出现的位置。
5. 在非h5端，前端导航盖不住原生组件。如果页面中有`video`，`map`，`textarea`等原生组件，滚动时会覆盖住导航栏。
6. 在小程序中，可以使用`cover-view`来做导航栏，解决覆盖问题。
7. 在`app`中，建议使用`titleNView`或者是`subNVue`。
8. 前端组件在渲染速度上不如原生导航栏，原生导航可以在动画期间渲染，保证动画期间不白屏，但使用前端导航栏，在新窗体进入的动画期间可能会导致整页白屏，越低端的手机越明显。
9. 在`app`侧，原生导航栏提供了更多的自定义行。
- `titleNView`给原生导航栏提供更多配置，包括自定义按钮，滚动渐变效果，搜索框等。
- `subNView`使用`nvue`原生渲染，所有布局自己开发，具备一切自定义灵活度。
- 页面禁用原生导航栏后，要改变状态栏的前景字体样式，设置的页面的`navigationBarTextStyle`属性。

> 在app端中，如果要单独设置状态栏颜色，使用`plus.navigator.setStatusBarStyle`设置。

如果在原生导航能解决需求的情况下，尽量使用原生导航。解决方案也可以用条件编译来分端处理。

> `app-plus`编译到`app`的样式。

`titleNView`用于导航栏。-App、H5

`subNVues`用于原生子窗体。-App 1.9.10+

`bounce`用于页面回弹效果，设置为 "none" 时关闭效果。

`softinputNavBar`用于iOS软键盘上完成工具栏的显示模式，设置为 "none" 时关闭工具栏。-仅ios生效

`softinputMode`用于软键盘弹出模式，支持 `adjustResize`、`adjustPan` 两种模式。-App

`pullToRefresh`用于下拉刷新。-App

`scrollIndicator`用于滚动条显示策略，设置为 "none" 时不显示滚动条。-App

`animationType`用于窗口显示的动画效果。-App

> `.nvue` 页面仅支持 `titleNView`、`pullToRefresh` 配置，其它配置项暂不支持

**导航栏**

`backroundColor`用于背景颜色，颜色值格式为`"#RRGGBB"`。在使用半透明标题栏时，也可以设置`rgba`格式

`buttons`用于自定义按钮，纯`nvue`即`render:native`时暂不支持。

`titleColor`用于标题文字颜色。

`titleOverflow`用于标题文字超出显示区域时处理方式。`"clip"`-超出显示区域时内容裁剪；`"ellipsis"`-超出显示区域时尾部显示省略标记`（...）`。

`titleText`用于标题文字内容。

`titleSize`用于标题文字字体大小。

`type`用于导航栏样式。"default"-默认样式；"transparent"-滚动透明渐变；"float"-悬浮导航栏。-`App-nvue 2.4.4+` 支持

`tags`用于原生 `View` 增强。

`searchInput`用于原生导航栏上的搜索框配置。

> 页面可以通过设置`navigationStyle`为`custom`，或者`titleNView`为`false`，来禁用原生导航栏。

1. `titleNView`不能设置`autoBackButton`，`homeButton`等属性。
2. `titleNView`的`type`值为`transparent`时，导航栏为滚动透明渐变导航栏，默认只有`button`，滚动后标题栏底颜色和`title`文字会渐变出现。
3. `type`为`float`时，导航栏为悬浮标题栏，此时页面内容上顶到了屏幕顶部。包括状态栏，但导航栏悬浮盖在页面上方。
4. 一般这种场景会同时设置导航栏的背景颜色为`rgba`半透明颜色。
5. `titleNView`的`type`值为`transparent`时，`App-nvue 2.4.4+` 支持。
6. 在`titleNView`配置`buttons`后，监听按钮的点击事件。

?> `vue` 页面及 `nvue` 的`uni-app`编译模式参考：`onNavigationBarButtonTap`

?> `nvue` 的`weex`编译模式参考：`uni.onNavigationBarButtonTap`

> 在 `titleNView` 配置 `searchInput` 后，相关的事件监听参考：`onNavigationBarSearchInputChanged` 等

`app`下原生导航栏的按钮使用字体图标时，要注意检查字体库的名字是否使用了默认的iconfont。

- [uni-app导航栏开发指南](https://ask.dcloud.net.cn/article/34921)

> 自定义按钮

`type`属性的类型为`String`，默认值为`none`，描述为按钮样式。

`color`属性的类型为`String`，默认与标题文字颜色一致，描述为按钮上文字颜色。

`background`属性的类型为`String`，默认值为灰色半透明，描述为按钮的背景颜色，仅仅在标题栏`type=transparent`时生效。

`badgeText`属性的类型为`String`，描述为按钮上显示的角标文本，最多显示3个字符，超过则显示为`...`。

`colorPressed`属性为`Sting`，默认值为color 属性值自动调整透明度为 0.3，描述为按下状态按钮文字颜色。

`float`属性为`String`，默认值为right，描述为按钮在标题栏上的显示位置，可取值"left"、"right"。

`fontWeight`属性为`String`，默认值normal，描述为按钮上文字的粗细。可取值"normal"-标准字体、"bold"-加粗字体。

`fontSize`属性为`String`，描述为按钮上文字大小。

`fontSrc`属性为`String`，描述为按钮上文字使用的字体文件路径，不支持网络地址，请统一使用本地地址。

`select`属性为`String`，默认值为false，描述为是否显示选择指示图标（向下箭头），常用于城市选择。

`text`属性为`String`，描述为按钮上显示的文字。使用字体图标时 `unicode` 字符表示必须 `'\u'` 开头，如 `"\ue123"`（注意不能写成`"\e123"`）。

`width`属性为`String`，默认值`44px`，描述为按钮的宽度，可取值： "*px" - 逻辑像素值，`如"10px"表示10逻辑像素值，不支持rpx。按钮的内容居中显示； "auto" - 自定计算宽度，根据内容自动调整按钮宽度`

> 按钮样式

|值|	说明|
| :--- | :--- |
|forward|	前进按钮|
|back|	后退按钮|
|share|	分享按钮|
|favorite|	收藏按钮|
|home|	主页按钮|
|menu|	菜单按钮|
|close|	关闭按钮|
|none|	无样式，需通过 text 属性设置按钮上显示的内容、通过 fontSrc 属性设置使用的字体库。|

> 搜索框配置

|属性|	类型|	默认值|	描述|
|:---|:---|:---|:---|
|autoFocus|	Boolean|	false|	是否自动获取焦点|
|align|	String|	center|	非输入状态下文本的对齐方式。可取值： "left" - 居左对齐； "right" - 居右对齐； "center" - 居中对齐。|
|backgroundColor|	String|	rgba(255,255,255,0.5)|	背景颜色|
|borderRadius|	String|	0px|	输入框的圆角半径，取值格式为"XXpx"，其中XX为像素值（逻辑像素），不支持rpx。|
|placeholder|	String|		|提示文本。|
|placeholderColor|	String|	#CCCCCC|	提示文本颜色|
|disabled|	Boolean|	false|	是否可输入|

> PS

`searchInput`的点击输入框`onNavigationBarSearchInputClicked`、文本变化`onNavigationBarSearchInputChanged`、点击搜索按钮`onNavigationBarSearchInputConfirmed`等生命周期

?> 在生命周期里通过参数e.text，可获取输入框内容。

- [uni-app在App端动态修改原生导航栏](https://ask.dcloud.net.cn/article/35374)

> 常见titleNView配置代码示例

代码：

    {
        "pages": [{
                "path": "pages/index/index", //首页
                "style": {
                    "app-plus": {
                        "titleNView": false //禁用原生导航栏
                    }
                }
            }, {
                "path": "pages/log/log", //日志页面
                "style": {
                    "app-plus": {
                        "bounce": "none", //关闭窗口回弹效果
                        "titleNView": {
                            "buttons": [ //原生标题栏按钮配置,
                                {
                                    "text": "分享" //原生标题栏增加分享按钮，点击事件可通过页面的 onNavigationBarButtonTap 函数进行监听
                                }
                            ]
                        }
                    }
                }
            }, {
                "path": "pages/detail/detail", //详情页面
                "style": {
                    "navigationBarTitleText": "详情",
                    "app-plus": {
                        "titleNView": {
                            "type": "transparent"//透明渐变导航栏 App-nvue 2.4.4+ 支持
                        }
                    }
                }
            }, {
                "path": "pages/search/search", //搜索页面
                "style": {
                    "app-plus": {
                        "titleNView": {
                            "type": "transparent",//透明渐变导航栏 App-nvue 2.4.4+ 支持
                            "searchInput": {
                                "backgroundColor": "#fff",
                                "borderRadius": "6px", //输入框圆角
                                "placeholder": "请输入搜索内容",
                                "disabled": true //disable时点击输入框不置焦，可以跳到新页面搜索
                            }
                        }
                    }
                }
            }
            ...
        ]
    }

> PS

1. 建议buttons的text使用字体图标。
2. [uni-app在App端动态修改原生导航栏](https://ask.dcloud.net.cn/article/35374)
3. App平台，设置searchInput的文字动态修改,[WebviewObject.setTitleNViewSearchInputText文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.setTitleNViewSearchInputText)

> 原生子窗体

`subNVues` 是 `vue` 页面的原生子窗体。

它不是全屏页面，也不是组件，就是一个原生子窗体。

?> 它是一个 `nvue` 页面，使用 `weex` 引擎渲染，提供了比 `cover-view`、`plus.nativeObj.view` 更强大的原生排版能力，方便自定义原生导航或覆盖原生地图、视频等。

!> [uni-app subNVue 原生子窗体开发指南](https://ask.dcloud.net.cn/article/35948)

`subNVue` 也可以在 `nvue` 页面中使用。

|属性|	类型|	描述|
|:---|:---|:---|
|id|	String|	subNVue| 原生子窗体的标识|
|path|	String|	配置 nvue 文件路径，nvue 文件需放置到使用 subNvue 的页面文件目录下|
|type|	String|	原生子窗口内置样式，可取值：'popup',弹出层；"navigationBar",导航栏|
|style|	Object|	subNVue 原生子窗体的样式，配置项参考下方 subNVuesStyle|

![Tips](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200210231615.png)

> 原生子窗体样式

`position`，原生子窗体的排版位置，排版位置决定原生子窗体在父窗口中的定位方式。

`dock`，原生子窗体的停靠方式。

`mask`，原生子窗体的遮罩层。

`width`，原生子窗体的宽度。

`height`，原生子窗体的高度。

`top`，原生子窗体垂直向下的偏移量，支持百分比、像素值，默认值为0px。

`bottom`，原生子窗体垂直向上偏移量,支持百分比、像素值，默认值无值（根据top和height属性值来自动计算）。

`left`，原生子窗体水平向左的偏移量，支持百分比、像素值，默认值为0px。

`right`，原生子窗体水平向右的偏移量，支持百分比、像素值，默认无值（根据left和width属性值来自动计算）。

`marign`，原生子窗体的边距，用于定位原生子窗体的位置，支持auto，auto表示居中。

`zindex`，原生子窗体的窗口的堆叠顺序值，拥有更高堆叠顺序的窗口总是会处于堆叠顺序较低的窗口的前面，拥有相同堆叠顺序的窗口后调用show方法则在前面。

代码：

    {
        "pages": [{
            "path": "pages/index/index", //首页
            "style": {
                "app-plus": {
                    "titleNView": false , //禁用原生导航栏
                    "subNVues":[{//侧滑菜单
                        "id": "drawer", //subNVue 的 id，可通过 uni.getSubNVueById('drawer') 获取
                        "path": "pages/index/drawer.nvue", // nvue 路径
                        "style": { //webview style 子集，文档可暂时开放出来位置，大小相关配置
                            "position": "popup", //除 popup 外，其他值域参考 5+ webview position 文档
                            "width": "50%"
                        }

                    }, {//弹出层
                        "id": "popup",
                        "path": "pages/index/popup",
                        "style": {
                            "position": "popup",
                            "margin":"auto",
                            "width": "150px",
                            "height": "150px"
                        }

                    }, {//自定义头
                        "id": "nav",
                        "path": "pages/index/nav",
                        "style": {
                            "position": "dock",
                            "height": "44px"
                        }

                    }]
                }
            }
        }]
    }

> 下拉刷新

在`app`平台下可以自定义部分下拉刷新的配置：

`page->app-plus->pullToRefresh。`

![下拉刷新使用注意](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200210233803.png)

下拉刷新的属性：

1. support，是否开启窗口的下拉刷新功能
2. color，颜色值格式为"#RRGGBB"，仅"circle"样式下拉刷新支持此属性。
3. style，可取值："default"——经典下拉刷新样式（下拉拖动时页面内容跟随）；"circle"——圆圈样式下拉刷新控件样式（下拉拖动时仅刷新控件跟随）。
4. height，窗口的下拉刷新控件进入刷新状态的拉拽高度。
5. range，窗口可下拉拖拽的范围。
6. offset，下拉刷新控件的起始位置。
7. contentdown，目前支持一个属性：caption——在下拉可刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。
8. contentover，目前支持一个属性：caption——在释放可刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。
9. contentrefresh，目前支持一个属性：caption——在正在刷新状态时下拉刷新控件上显示的标题内容。仅对"default"样式下拉刷新控件有效。

代码：

    {
        "pages": [
            {
                "path": "pages/index/index", //首页
                "style": {
                    "app-plus": {
                        "pullToRefresh": {
                            "support": true,
                            "color": "#ff3333",
                            "style": "default",
                            "contentdown": {
                                "caption": "下拉可刷新自定义文本"
                            },
                            "contentover": {
                                "caption": "释放可刷新自定义文本"
                            },
                            "contentrefresh": {
                                "caption": "正在刷新自定义文本"
                            }
                        }
                    }
                }
            }
        ]
    }

> h5

|属性|	类型|	描述|
|:---|:---|:---|
|titleNView|	Object|	导航栏|
|pullToRefresh|	Object|	下拉刷新|

> 导航栏

1. backgroundColor，背景颜色
2. buttons，自定义按
3. titleColor，标题文字颜色
4. titleText，标题文字内容
5. titleSize，标题文字字体大小
6. type，导航栏样式。"default"-默认样式；"transparent"-透明渐变。
7. searchInput，导航栏上的搜索框样式

> 下拉刷新

h5 平台下拉刷新动画，只有 circle 类型。

|属性|	类型|	描述|
|:---|:---|:---|
|color|String|颜色值格式为"#RRGGBB"|
|offset|String|下拉刷新控件的起始位置。支持百分比，如"10%"；像素值，如"50px"，不支持rpx。|

> navigationBarShadow

|属性|	类型|	描述|
|:---|:---|:---|
|colorType|	String|	阴影的颜色，支持：grey、blue、green、orange、red、yellow|

> mp-alipay

配置编译到 `MP-ALIPAY` 平台时的特定样式

![注意事项](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200210234748.png)

1. allowsBounceVertical,是否允许向下拉拽。
2. titleImage,导航栏图片地址（替换当前文字标题），内必须使用https的图片链接地址。
3. transparentTitle,导航栏透明设置。
4. titlePenetrate,导航栏点击穿透。
5. showTitleLoading,是否进入时显示导航栏的 loading。
6. backgroundImageUrl,下拉露出显示的背景图链接
7. backgroundImageColor,下拉露出显示的背景图底色
8. gestureBack,iOS 用，是否支持手势返回。
9. enableScrollBar,Android 用，是否显示 WebView 滚动条。

> [uni-app导航栏开发指南](https://ask.dcloud.net.cn/article/34921)

**easycom**

![easycom](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200210235231.png)

1. autoscan，是否开启自动扫描，开启后将会自动扫描符合components/组件名称/组件名称.vue目录结构的组件
2. custom，以正则方式自定义组件匹配规则。

代码：

    "easycom": {
    "autoscan": true,
    "custom": {
        "uni-(.*)": "@/components/uni-$1.vue"
    }
    }

![说明](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200210235940.png)

> preloadRule

1. packages，进入页面后预下载分包的 root 或 name。APP 表示主包。
2. network，在指定网络下预下载，可选值为：all（不限网络）、wifi（仅wifi下预下载）。

> subPackages

分包加载配置

- 微信、百度小程序每个分包的大小是2M，总体积一共不能超过8M。
- 支付宝小程序每个分包的大小是2M，总体积一共不能超过4M。

root,子包的根目录;pages,子包由哪些页面组成。

uni-app目录结构：

    ┌─pages               
    │  ├─index
    │  │  └─index.vue    
    │  └─login
    │     └─login.vue    
    ├─pagesA   
    │  └─list
    │     └─list.vue 
    ├─pagesB    
    │  └─detail
    │     └─detail.vue  
    ├─static             
    ├─main.js       
    ├─App.vue          
    ├─manifest.json  
    └─pages.json   

在 pages.json 中填写

代码：

    {
        "pages": [{
            "path": "pages/index/index",
            "style": { ...}
        }, {
            "path": "pages/login/login",
            "style": { ...}
        }],
        "subPackages": [{
            "root": "pagesA",
            "pages": [{
                "path": "list/list",
                "style": { ...}
            }]
        }, {
            "root": "pagesB",
            "pages": [{
                "path": "detail/detail",
                "style": { ...}
            }]
        }],
        "preloadRule": {
            "pagesA/list/list": {
                "network": "all",
                "packages": ["__APP__"]
            },
            "pagesB/detail/detail": {
                "network": "all",
                "packages": ["pagesA"]
            }
        }
    }

1. `HBuilderX`创建的项目勾选`运行-->运行到小程序模拟器-->运行时是否压缩代码`
2. `cli`创建的项目可以在`pacakge.json`中添加参数`--minimize`，示例：`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`

> condition

启动模式配置，仅开发期间生效，用于模拟直达页面的场景

1. current，当前激活的模式，list节点的索引值
2. list，启动模式列表

list说明：

1. name，启动模式名称
2. path，启动页面路径
3. query，启动参数

代码：

    "condition": { //模式配置，仅开发期间生效
        "current": 0, //当前激活的模式（list 的索引项）
        "list": [{
                "name": "swiper", //模式名称
                "path": "pages/component/swiper/swiper", //启动页面，必选
                "query": "interval=4000&autoplay=false" //启动参数，在页面的onLoad函数里面得到。
            },
            {
                "name": "test",
                "path": "pages/component/switch/switch"
            }
        ]
    }

!> tabbar常见问题

代码：

    "tabBar": {
        "color": "#7A7E83",
        "selectedColor": "#3cc51f",
        "borderStyle": "black",
        "backgroundColor": "#ffffff",
        "list": [{
            "pagePath": "pages/component/index",
            "iconPath": "static/image/icon_component.png",
            "selectedIconPath": "static/image/icon_component_HL.png",
            "text": "组件"
        }, {
            "pagePath": "pages/API/index",
            "iconPath": "static/image/icon_API.png",
            "selectedIconPath": "static/image/icon_API_HL.png",
            "text": "接口"
        }]
    }

?> 中间带+号的tabbar模板例子[底部带加号tabbar选项卡项目模板](https://ext.dcloud.net.cn/plugin?id=98)

1. [底部图标菜单 imagemenu](https://ext.dcloud.net.cn/plugin?id=69)
2. [tabBar在切换5-6次之后消失](https://developers.weixin.qq.com/community/develop/doc/0002e6e6bf0d602d8c783e10756400)

midButton 属性说明

1. width，中间按钮的宽度，tabBar 其它项为减去此宽度后平分，默认值为与其它项平分宽度
2. height，中间按钮的高度，可以大于 tabBar 高度，达到中间凸起的效果
3. text，中间按钮的文字
4. iconPath，中间按钮的图片路径
5. iconWidth，图片宽度
6. backgroundImage，中间按钮的背景图片路径

midButton没有pagePath，需监听点击事件，自行处理点击后的行为逻辑。

?> tabBar 配置

![tabBar](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200211002408.png)

本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/