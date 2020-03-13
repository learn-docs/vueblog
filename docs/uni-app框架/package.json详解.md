## `package.json`扩展配置用法

代码：

    {
        /**
        package.json其它原有配置 
        */
        "uni-app": {// 扩展配置
            "scripts": {
                "custom-platform": { //自定义编译平台配置，可通过cli方式调用
                    "title":"自定义扩展名称", // 在HBuilderX中会显示在 运行/发行 菜单中
                    "BROWSER":"",  //运行到的目标浏览器，仅当UNI_PLATFORM为h5时有效
                    "env": {//环境变量
                        "UNI_PLATFORM": ""  //基准平台 
                    },
                    "define": { //自定义条件编译
                        "CUSTOM-CONST": true //自定义条件编译常量，建议为大写
                    }
                }
            }    
        }
    }

?> `UNI_PLATFORM`仅支持填写`uni-app`默认支持的基准平台

`BROWSER` 仅在`UNI_PLATFORM`为h5时有效

> 钉钉小程序

代码：

    "uni-app": {
        "scripts": {
            "mp-dingtalk": { 
                "title":"钉钉小程序", 
                "env": { 
                    "UNI_PLATFORM": "mp-alipay" 
                },
                "define": { 
                    "MP-DINGTALK": true 
                }
            }
        }
    }

代码：

    // #ifdef MP-DINGTALK
    钉钉平台特有代码
    // #endif

> 启动钉钉小程序平台的编译

代码：

    npm run dev:custom mp-dingtalk 
    npm run build:custom mp-dingtalk

微信服务号

代码：

    "uni-app": {
        "scripts": {
            "h5-weixin": { 
                "title":"微信服务号",
                "BROWSER":"Chrome",  
                "env": {
                    "UNI_PLATFORM": "h5"  
                },
                "define": { 
                    "H5-WEIXIN": true 
                }
            }
        }    
    }

代码：

    // #ifdef H5-WEIXIN
    微信服务号特有代码
    // #endif

启动微信服务号平台（H5-WEIXIN）平台

代码：

    npm run dev:custom h5-weixin 
    npm run build:custom h5-weixin

本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/