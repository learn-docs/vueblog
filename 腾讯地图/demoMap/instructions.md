使用注意申请key

```
onLoad() {
	console.log('页面加载了') // 实例化API核心类
	qqmapsdk = new QQMapWX({ // key: '申请的key'
		key: ''
	});
},
```

1. 基础map组件的使用
2. 地图地址搜索chooseLocation的使用
3. 获取附近的动态，点聚合
4. 地图上标注附近的人
5. 定位附近门店
6. 调用腾讯地图接口
7. reverseGeocoder逆地址解析
8. geocoder地址解析
9. 距离计算
10. 获取城市列表
11. 获取城市区县