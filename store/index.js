import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import cart from '@/store/modules/cart.js'

// 安装插件
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		home,
		cart
	}
})

export default store