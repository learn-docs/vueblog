## 在manifest.json中授权 permission

```
wx.getLocation的方法需要在 manifest.json 微信小程序中授权  微信接口描述 

传统的在pages.json 配置一下信息不生效。
"permission": {
	"scope.userLocation": {
	  "desc": "你的位置信息将用于小程序位置接口的效果展示"
	}
  },
```
## 使用方法
```
<template>
    <view class="content">
        <hchPosition :storeData="storeData" :markers="markers"></hchPosition>
    </view>
</template>

<script>
import hchPosition from "../../wxcomponents/hch-position/hch-position"
export default {
	
    data() {
        return {
			storeData:[//门店信息展示  id name address tel 必填
				{
					id:1,
					name:'门店XXXXX1号',
					address:'厦门市思明区汇景商业广场XXX1号',
					tel:'12345678900',
				},{
					id:2,
					name:'门店XXXXX2号',
					address:'厦门市思明区汇景商业广场XXX2号',
					tel:'12345678900',
				},
			],
			markers: [//门店在地图上的标记 以下字段必填 
				{
				id:1,
			    latitude: 24.4483294023427,
			    longitude: 118.08479034393311,
			    iconPath: '../../static/门店.png',
				callout:{
					content:"门店XXXXX1号店",
					borderRadius:10,
					padding:10,
					display:"ALWAYS",
				}
			}, {
				id:2,
			    latitude: 24.45580,
			    longitude: 118.12266,
			    iconPath: '../../static/门店.png',
				callout:{
					content:"门店XXXXX2号店",
					borderRadius:10,
					padding:10,
					display:"ALWAYS",
				}
			}],
        }
    },
	components:{
		hchPosition,
	}, 
    methods: {
		
    },
	onShow() {
		
	}
}
</script>
```