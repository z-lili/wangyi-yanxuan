<template>
	<view class="login">
		<button open-type="getUserProfile" @tap="getUser">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 登录
			getUser(){
				// 获取用户信息
				wx.getUserProfile({
					desc:'用于完善会员信息',
					success(res) {
						// 持久化
						console.log(res)
						wx.setStorage({
							key:'userInfo',
							data:JSON.stringify(res)
						})
						// 跳转页面
						uni.reLaunch({
							url:'/pages/mine/mine'
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
