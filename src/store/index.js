import Vue from 'vue' //vue
import Vuex from 'vuex' //vuex

//使用Vuex
Vue.use(Vuex)

//创建Vuex实例
const store = new Vuex.Store({
	state: {
		backstage_title: 'Blog后台管理系统', //后台管理标题名称
		isCollapse: false, //侧边栏是否展开
		personality: "rgba(0,151,136, 0.8)",
		themeColor: "--themeColor:rgba(0,151,136, 0.8)", //logo颜色
		personalitys: "rgba(84,92,100, 0.8)",
		themeColors: "--themeColors:rgba(84,92,100, 0.8)", //主题颜色
	},
	getters: {
		getpersonality(state) {
			return state.personality;
		},
		getpersonalitys(state) {
			return state.personalitys;
		}
	},
	mutations: {
		addcount(state, color) {
			console.log(state, color);
			state.personality = color;
			state.themeColor = "--themeColor:" + color;
		},
		addcounts(state, color) {
			console.log(state, color);
			state.personalitys = color;
			state.themeColors = "--themeColors:" + color;
		}
	}

})


//导出store
export default store
