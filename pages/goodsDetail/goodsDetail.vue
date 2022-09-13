<template>
	<view class="goodsDetail">
		<view class="header">{{ goodsObj.name }}</view>
		<!-- 内容 -->
		<scroll-view class="goodsDetailScroll" scroll-y="true" >
			<image class="scrollImg" :src="goodsObj.listPicUrl" mode=""></image>
			<view class="tag">
				{{ goodsObj.promTag }}
			</view>
			<view class="price">￥
				{{ goodsObj.counterPrice }}
			</view>
			<view class="list" style="margin-left:5%;font-size:32rpx;line-height:50rpx">
				<view>1) 100%桑蚕丝填充，丝丝精粹不掺杂</view>
				<view>2) 创新井字拉网工艺，桑蚕丝不易粘结块</view>
				<view>3) 两种面料可选，贡锻手感细腻，竹棉清爽透气</view>
				<view>4) AB双面设计，多种活性印花不易褪色</view>
			</view>
		</scroll-view>
		<!-- 底部 -->
			<view class="footer">
					<view class="img">
						<image src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp" mode=""></image>
					</view>
					<view class="btn">立即购买</view>
					<view class="btn cart" @click="addCart">加入购物车</view>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsObj:{} //当前商品对象
			}
		},
		created() {
		},
		methods: {
			// 添加商品到购物车
			addCart(){
				this.$store.commit('cart/addGoods',this.goodsObj)
			}
		},
		onLoad(option) {
			const data = JSON.parse(decodeURIComponent(option.goodsDetail))
			this.goodsObj = data
		}
	}
</script>

<style lang="stylus">
	.goodsDetail
		position: relative
		.header
			height 90rpx
			line-height: 90rpx
			width 570rpx
			text-align: center
			margin 0 auto
		.goodsDetailScroll
			height: calc(100vh - 90rpx)
			.scrollImg
				width: 100%
				height 750rpx
			.tag
				width: 90%
				height 100rpx
				line-height: 100rpx
				background-color: #BB2C08
				text-align: center
				margin: 20rpx auto
				color: #fff
				font-size: 32rpx
				border-radius: 10rpx
			.price
				font-size: 50rpx
				color #dd1a21
				line-height: 70rpx
				margin-left: 5%
		.footer
				display flex
				position fixed
				bottom 0
				left 0
				right 0
				height 100rpx
				line-height 100rpx
				border-top 1px solid #eee
				background-color #fff
				.img
					flex 1
					line-height 100rpx
					image
						display block
						margin 20rpx auto
						width 60rpx
						height 60rpx
				.btn
					flex 2
					border-left 1px solid #eee
					text-align center
					&.cart
						background-color #dd1a21
						color #fff
</style>
