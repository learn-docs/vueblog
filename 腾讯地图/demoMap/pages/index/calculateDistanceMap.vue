<template>
	<view>
		<view class="cu-form-group margin-top">
			<view class="title">起点坐标</view>
			<input placeholder="输入起点坐标" v-model="start"></input>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">终点坐标</view>
			<input placeholder="输入终点坐标" v-model="end"></input>
		</view>
		
		<view class="padding flex flex-direction">
			<button @click="formSubmit" class="cu-btn bg-blue margin-tb-sm lg">计算距离</button>
		</view>
		
		<view v-for="(item, index) in distance" :key="index">
		    <view class="title">起点到终点的步行距离为{{item}}米</view>
		</view>
		<!--多个终点位置示例：39.984060,116.307520;39.984060,116.507520-->
	</view>
</template>

<script>
	import QQMapWX from '../../js_sdk/wxmp-qqmap/qqmap-wx-jssdk.js';
	var qqmapsdk;
	export default {
		components: {},
		data() {
			return {
				start: '',
				end: '',
				distance: '',
			}
		},
		onLoad() {
			console.log('页面加载了') // 实例化API核心类
			qqmapsdk = new QQMapWX({ // key: '申请的key'
			key: ''
			});
		},
		onShow() {
			console.log('页面显示了')
		},
		onReady() {
			console.log('页面初次渲染完成了')
		},
		methods: {
			formSubmit(e){
			    //调用距离计算接口
				console.log(this.start,'dadaqianduan')
			    qqmapsdk.calculateDistance({
			        //mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
			        //from参数不填默认当前地址
			        //获取表单提交的经纬度并设置from和to参数（示例为string格式）
			        // from: e.detail.value.start || '', //若起点有数据则采用起点坐标，若为空默认当前地址
					from: this.start || '',
					to: this.end,
			        // to: e.detail.value.dest, //终点坐标
			        success: (res)=> {//成功后的回调
			          console.log(res);
			          var res = res.result;
			          var dis = [];
			          for (var i = 0; i < res.elements.length; i++) {
			            dis.push(res.elements[i].distance); //将返回数据存入dis数组，
			          }
			          this.distance=dis
			        },
			        fail: (error)=> {
			          console.error(error);
			        },
			        complete: (res)=> {
			          console.log(res);
			        }
			    });
			}
		},
		onHide() {
			console.log('页面隐藏了')
		},
	}
</script>

<style lang="scss" scoped>
</style>
