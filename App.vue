<script>
	// 这个是根组件，不能写template
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入阿里字体图标 */
	@import './static/iconfont/iconfont.styl';
</style>
