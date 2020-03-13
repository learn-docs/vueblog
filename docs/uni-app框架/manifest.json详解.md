## `manifest.json`文件

> 配置项列表

1. name，应用名称
2. appid，应用标识
3. description，应用描述
4. versionName，版本名称
5. versionCode，版本号
6. transformPx，是否转换项目的px，为true时将px转换为rpx，为false时，px为传统的实际像素
7. networkTimeout，网络超时时间
8. debug，是否开启 debug 模式，开启后调试信息以 info 的形式给出，其信息有页面的注册，页面路由，数据更新，事件触发等

> `networkTimeout`

1. request,uni.request 的超时时间，单位毫秒。
2. connectSocket,uni.connectSocket 的超时时间，单位毫秒。
3. uploadFile,uni.uploadFile 的超时时间，单位毫秒。
4. downloadFile,uni.downloadFile 的超时时间，单位毫秒。

> `uniStatistics`

1. enable,是否开启uni统计

> `app-plus`

1. splashscreen,App 启动界面信息
2. modules权限模块
3. distribute,App 发布信息
4. usingComponents,是否启用自定义组件模式，默认为false
5. nvueCompiler,切换 nvue 编译模式，可选值，weex ：老编译模式，uni-app： 新编译模式，默认为 weex
6. renderer,可不加载基于 webview 的运行框架，减少包体积、提升启动速度。
7. compilerVersion,编译器版本
8. nvueLaunchMode,Nvue 首页启动模式，在 compilerVersion 值为 3 时生效，可选值：normal、fast 默认 normal
9. nvue,nvue 页面布局初始配置

> App Splashscreen

1. alwaysShowBeforeRender,首页白屏时不关闭启动界面
2. autoclose,是否自动关闭程序启动界面。
3. waiting,是否在程序启动界面显示等待圈或雪花
4. delay,启动界面在应用的首页面加载完毕后延迟关闭的时间，autoclose 为 true 时生效。

App Modules

Bluetooth	BLE蓝牙
Contacts	系统通讯录
Fingerprint	指纹识别

iBeacon	iBeacon
LivePusher	直播推流
Maps	地图

Messaging	短彩邮件消息
OAuth	登录授权
Payment	支付

Push	消息推送
Share	社交分享
Speech	语音识别

SQLite	SQLite数据库
Statistic	统计
VideoPlayer	视频播放

代码：

    <!DOCTYPE html>
    <html lang="zh-CN">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <title>
                <%= htmlWebpackPlugin.options.title %>
            </title>
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    document.documentElement.style.fontSize = document.documentElement.clientWidth / 20 + 'px'
                })
            </script>
            <link rel="stylesheet" href="<%= BASE_URL %>static/index.<%= VUE_APP_INDEX_CSS_HASH %>.css" />
        </head>
        <body>
            <noscript>
                <strong>Please enable JavaScript to continue.</strong>
            </noscript>
            <div id="app"></div>
            <!-- built files will be auto injected -->
        </body>
    </html>

> async

loading,页面 js 加载时使用的组件

error,页面 js 加载失败时使用的组件

delay,展示 loading 加载组件的延时时间

timeout,页面 js 加载超时时间

> devServer

https,启用 https 协议

disableHostCheck,禁用 Host 检查

> sdkconfig

代码：

    "h5": {
        "sdkConfigs": {
            "maps": {
                "qqmap": {
                    //腾讯地图秘钥（key）
                    "key": "xxxxxxxxxx"
                }
            }
        }
    }

完整 manifest.json

代码：

    {
        "appid": "__UNI__XXXXXX，创建应用时云端分配的，不要修改。",
        "name": "应用名称，如uni-app",
        "description": "应用描述",
        "versionName": "1.0.0",
        "versionCode": "100",
    // 是否全局关闭uni统计
    "uniStatistics": {  
        "enable": false//全局关闭  
    },
        // app-plus 节点是 App 特有配置，推荐在 HBuilderX 的 manifest.json 可视化界面操作完成配置。
        "app-plus": {
            // HBuilderX->manifest.json->模块权限配置
            "modules": {
                "Contacts": {},
                "Fingerprint": {},
                "Maps": {},
                "Messaging": {},
                "OAuth": {},
                "Payment": {},
                "Push": {},
                "Share": {},
                "Speech": {},
                "Statistic": {},
                "VideoPlayer": {},
                "LivePusher": {}
            },
            "distribute": {
                // Android 与 iOS 证书相关信息均在打包时完成配置
                "android": {
                    "packagename": "Android应用包名，如io.dcloud.uniapp",
                    "keystore": "Android应用打包使用的密钥库文件",
                    "password": "Android应用打包使用密钥库中证书的密码",
                    "aliasname": "Android应用打包使用密钥库中证书的别名",
                    "schemes": [
                        "应用支持的scheme，大小写相关，推荐使用小写"
                    ],
                    "theme": "程序使用的主题",
                    "android:name": "自定义程序入口类名",
                    "custompermissions": "Boolean类型，是否自定义android权限，true表示自定义权限，只使用permissions下指定的android权限，不根据用户使用的5+模块自动添加android权限，false表示自动根据用户使用的5+模块自动添加android权限",
                    "permissions": [
                        "要添加的额外的android权限，如<uses-permission android:name=\"com.android.launcher.permission.INSTALL_SHORTCUT\" />",
                        "<uses-permission android:name=\"com.android.launcher.permission.UNINSTALL_SHORTCUT\" />"
                    ],
                    "minSdkVersion": "apk支持的最低版本，默认值为14",
                    "targetSdkVersion": "apk的目标版本，默认值为21"
                },
                "ios": {
                    "appid": "iOS应用标识，苹果开发网站申请的appid，如io.dcloud.uniapp",
                    "mobileprovision": "iOS应用打包配置文件",
                    "password": "iOS应用打包个人证书导入密码",
                    "p12": "iOS应用打包个人证书，打包配置文件关联的个人证书",
                    "devices": "iOS应用支持的设备类型，可取值iphone/ipad/universal",
                    "urltypes": [{
                            "urlschemes": [
                                "hbuilder",
                                "必选，程序所支持的自定义协议名称"
                            ],
                            "id": "可选，自定义协议的标识",
                            "icon": "可选，打开程序时显示的图标"
                        },
                        {
                            "urlschemes": [
                                "http",
                                "https",
                                "必选，程序所支持的自定义协议名称，大小写无关，推荐使用小写"
                            ],
                            "id": "可选，自定义协议的标识",
                            "icon": "可选，打开程序时显示的图标"
                        }
                    ],
                    "frameworks": ["使用native.js调用API要引用的库文件名称，如CoreLocation.framework", "QuartzCore.framework"],
                    "idfa": "true|false，是否使用广告标识符，默认值为false",
                    "plistcmds": [
                        "Set :权限 使用权限的原因",
                        "Set :NSCameraUsageDescription 说明使用用户相机的原因"
                    ]
                },
                // HBuilderX->manifest.json->SDK配置
                "sdkConfigs": {
                    "maps": {
                        // 地图只能选一个，这里选的是百度。
                        "baidu": {
                            "appkey_ios": "",
                            "appkey_android": ""
                        }
                    },
                    "oauth": {
                        // 微信登录
                        "weixin": {
                            "appid": "",
                            "appsecret": ""
                        },
                        // QQ登录
                        "qq": {
                            "appid": ""
                        },
                        // 新浪微博登录
                        "sina": {
                            "appkey": "",
                            "appsecret": "",
                            "redirect_uri": ""
                        },
                        // 小米登录
                        "xiaomi": {
                            "appid_ios": "",
                            "appsecret_ios": "",
                            "redirect_uri_ios": "",
                            "appid_android": "",
                            "appsecret_android": "",
                            "redirect_uri_android": ""
                        }
                    },
                    "payment": {
                        // Apple应用内支付
                        "appleiap": {},
                        // 支付宝支付
                        "alipay": {
                            "scheme": ""
                        },
                        // 微信支付
                        "weixin": {
                            "appid": ""
                        }
                    },
                    "push": {
                        // 推送只能选择一个，这里选的是个推。
                        "igexin": {
                            "appid": "",
                            "appkey": "",
                            "appsecret": ""
                        }
                    },
                    "share": {
                        // 微信分享
                        "weixin": {
                            "appid": ""
                        },
                        // 新浪微博分享
                        "sina": {
                            "appkey": "",
                            "appsecret": "",
                            "redirect_uri": ""
                        },
                        // 分享到QQ
                        "qq": {
                            "appid": ""
                        }
                    },
                    "statics": {
                        // 友盟统计
                        "umeng": {
                            "appkey_ios": "",
                            "channelid_ios": "",
                            "appkey_android": "",
                            "channelid_android": ""
                        }
                    }
                },
                // 屏幕方向 需要云打包/本地打包/自定义基座生效
                "orientation": [
                    "portrait-primary",
                    "landscape-primary",
                    "portrait-secondary",
                    "landscape-secondary"
                ],
                // HBuilderX->manifest.json->图标配置
                "icons": {
                    "ios": {
                        "appstore": "必选, 1024x1024, 提交app sotre使用的图标",
                        "iphone": {
                            "app@2x": "可选，120x120，iOS7-11程序图标（iPhone4S/5/6/7/8）",
                            "app@3x": "可选，180x180，iOS7-11程序图标（iPhone6plus/7plus/8plus/X）",
                            "spotlight@2x": "可选，80x80，iOS7-11 Spotlight搜索图标（iPhone5/6/7/8）",
                            "spotlight@3x": "可选，120x120，iOS7-11 Spotlight搜索图标（iPhone6plus/7plus/8plus/X）",
                            "settings@2x": "可选，58x58，iOS5-11 Settings设置图标（iPhone5/6/7/8）",
                            "settings@3x": "可选，87x87，iOS5-11 Settings设置图标（iPhone6plus/7plus/8plus/X）",
                            "notification@2x": "可选，40x40，iOS7-11 通知栏图标（iPhone5/6/7/8）",
                            "notification@3x": "可选，60x60，iOS7-11 通知栏图标（iPhone6plus/7plus/8plus/X）"
                        },
                        "ipad": {
                            "app": "可选，76x76，iOS7-11程序图标",
                            "app@2x": "可选，152x152，iOS7-11程序图标（高分屏）",
                            "proapp@2x": "可选，167x167，iOS9-11程序图标（iPad Pro）",
                            "spotlight": "可选，40x40，iOS7-11 Spotlight搜索图标",
                            "spotlight@2x": "可选，80x80，iOS7-11 Spotlight搜索图标（高分屏）",
                            "settings": "可选，29x29，iOS5-11 设置图标",
                            "settings@2x": "可选，58x58，iOS5-11 设置图标（高分屏）",
                            "notification": "可选，20x20，iOS7-11 通知栏图标",
                            "notification@2x": "可选，40x40，iOS7-11 通知栏图标（高分屏）"
                        }
                    },
                    "android": {
                        "mdpi": "必选，48x48，普通屏程序图标",
                        "ldpi": "必选，48x48，大屏程序图标",
                        "hdpi": "必选，72x72，高分屏程序图标",
                        "xhdpi": "必选，96x96，720P高分屏程序图标",
                        "xxhdpi": "必选，144x144，1080P高分屏程序图标",
                        "xxxhdpi": "可选，192x192"
                    }
                },
                // HBuilderX->manifest.json->启动图配置
                "splashscreen": {
                    "ios": {
                        "iphone": {
                            "retina35": "可选，640x960，3.5英寸设备(iPhone4)启动图片",
                            "retina40": "可选，640x1136，4.0英寸设备(iPhone5)启动图片",
                            "retina40l": "可选，1136x640，4.0英寸设备(iPhone5)横屏启动图片",
                            "retina47": "可选，750x1334，4.7英寸设备（iPhone6）启动图片",
                            "retina47l": "可选，1334x750，4.7英寸设备（iPhone6）横屏启动图片",
                            "retina55": "可选，1242x2208，5.5英寸设备（iPhone6Plus）启动图片",
                            "retina55l": "可选，2208x1242，5.5英寸设备（iPhone6Plus）横屏启动图片",
                            "iphonex": "可选，1125x2436，iPhoneX启动图片",
                            "iphonexl": "可选，2436x1125，iPhoneX横屏启动图片"
                        },
                        "ipad": {
                            "portrait": "可选，768x1004，需支持iPad时必选，iPad竖屏启动图片",
                            "portrait-retina": "可选，1536x2008，需支持iPad时必选，iPad高分屏竖屏图片",
                            "landscape": "可选，1024x748，需支持iPad时必选，iPad横屏启动图片",
                            "landscape-retina": "可选，2048x1496，需支持iPad时必选，iPad高分屏横屏启动图片",
                            "portrait7": "可选，768x1024，需支持iPad iOS7时必选，iPad竖屏启动图片",
                            "portrait-retina7": "可选，1536x2048，需支持iPad iOS7时必选，iPad高分屏竖屏图片",
                            "landscape7": "可选，1024x768，需支持iPad iOS7时必选，iPad横屏启动图片",
                            "landscape-retina7": "可选，2048x1536，需支持iPad iOS7时必选，iPad高分屏横屏启动图片"
                        }
                    },
                    "android": {
                        "mdpi": "必选，240x282，普通屏启动图片",
                        "ldpi": "必选，320x442，大屏启动图片",
                        "hdpi": "必选，480x762，高分屏启动图片",
                        "xhdpi": "必选，720x1242，720P高分屏启动图片",
                        "xxhdpi": "必选，1080x1882，1080P高分屏启动图片"
                    }
                }
            },
            // HBuilderX->manifest.json->启动图配置->启动界面选项
            "splashscreen": {
                "waiting": true,
                "autoclose": true,
                "delay": 0
            },
            "error": {
                "url": "页面加载错误时打开的页面地址，可以是网络地址，也可以是本地地址"
            },
            "useragent": {
                "value": "自定义ua字符串",
                "concatenate": "是否为追加模式"
            },
            "useragent_ios": {
                "value": "与useragent的value一致，仅在iOS平台生效，当useragent和useragent_ios同时存在时优先级useragent_ios>useragent",
                "concatenate": "与useragent的concatenate一致，仅iOS平台生效"
            },
            "useragent_android": {
                "value": "与useragent的value一致，仅在Android平台生效，当useragent和useragent_android同时存在时优先级useragent_android>useragent",
                "concatenate": "与useragent的concatenate一致，仅Android平台生效"
            },
            "ssl": "accept|refuse|warning，访问https网络时对非受信证书的处理逻辑",
            "runmode": "normal",
            "appWhitelist": [
                "Android平台下载apk地址白名单列表",
                "iOS平台跳转appstore地址白名单列表"
            ],
            "schemeWhitelist": [
                "URL Scheme白名单列表，如：mqq" //iOS要求预先指定要打开的App名单，不能随意调用任何App
            ],
            "channel": "渠道标记，可在DCloud开发者中心查看各渠道应用的统计数据",
            "adid": "广告联盟会员id，在DCloud开发者中心申请后填写",
            "safearea": { //安全区域配置，仅iOS平台生效  
                "background": "#CCCCCC", //安全区域外的背景颜色，默认值为"#FFFFFF"  
                "bottom": { // 底部安全区域配置  
                    "offset": "none|auto" // 底部安全区域偏移，"none"表示不空出安全区域，"auto"自动计算空出安全区域，默认值为"none"  
                },
                "left": { //左侧安全区域配置（横屏显示时有效）  
                    "offset": "none|auto"
                },
                "right": { //右侧安全区域配置（横屏显示时有效）  
                    "offset": "none|auto"
                }
            },
            "softinput": {
                "navBar": "auto", //是否显示iOS软键盘上的“完成”导航条
                "mode": "adjustResize|adjustPan" //软键盘弹出模式，
            },
        "popGesture": "none" //iOS上是否支持屏幕左边滑动关闭当前页面。默认是可关闭。设为none则不响应左滑动画。
        },
        // 快应用特有配置
        "quickapp": {},
        // 微信小程序特有配置
        "mp-weixin": {
            "appid": "wx开头的微信小程序appid",
            "uniStatistics": {
                "enable": false//仅微信小程序关闭uni统计
            },
        },
        // 百度小程序特有配置
        "mp-baidu": {
            "appid": "百度小程序appid"
        },
        // 头条小程序特有配置
        "mp-toutiao": {
            "appid": "头条小程序appid"
        },
        "h5": {
            "title": "演示", //页面标题，默认使用 manifest.json 的 name
            "template": "index.html", //index.html模板路径，相对于应用根目录，可定制生成的 html 代码
            "router": {
                "mode": "history", //路由跳转模式，支持 hash|history ,默认 hash
                "base": "/hello/" //应用基础路径，例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"
            },
            "async": { //页面js异步加载配置
                "loading": "AsyncLoading", //页面js加载时使用的组件（需注册为全局组件）
                "error": "AsyncError", //页面js加载失败时使用的组件（需注册为全局组件）
                "delay": 200, //展示 loading 加载组件的延时时间（页面 js 若在 delay 时间内加载完成，则不会显示 loading 组件）
                "timeout": 3000 //页面js加载超时时间（超时后展示 error 对应的组件）
            }
        }
    }

本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/