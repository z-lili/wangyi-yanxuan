<template>
	<view class="personal">
		<view class="header">
			<!-- 已登录 -->
			<template v-if="userInfoData">
				<image class="loginImg" :src="userInfoData.avatarUrl" mode=""></image>
				<text>{{ userInfoData.nickName }}</text>
				<button class="logoutBtn" @tap="logOut">退出登录</button>
			</template>
			<!-- 未登录 -->
			<template v-else>
				<image class="loginImg" src="/static/images/personal/personal.png" mode=""></image>
				<text @tap="login">去登录</text>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfoData:{}
			}
		},
		mounted() {
			// 从本地存储中获取用户获取用户数据
			wx.getStorage({
				key:'userInfo',
				success:(res)=> {
					if(res){
						const data = JSON.parse(res.data)
						this.userInfoData = data.userInfo 
						console.log(this.userInfoData)
					}
				}
			})
		},
		methods: {
			login(){
				// 声明式导航，类似于a
				uni.reLaunch({
					url:'/components/login/login'
				})
			},
			logOut(){
				wx.setStorage({
					key:'userInfo',
					data:''
				})
				uni.reLaunch({
					url:'/components/login/login'
				})
			}
		}
	}
</script>

<style lang="stylus">
	.header
		height 300rpx
		line-height 200rpx
		background-color: #EED7B5
		display: flex
		.loginImg
			height: 100rpx
			width: 100rpx
			vertical-align: middle
			margin: 50rpx
		.logoutBtn
			display: block
			height 80rpx
			text-align: center
			line-height: 80rpx
			margin: 80rpx
			margin-left: 100rpx
</style>
