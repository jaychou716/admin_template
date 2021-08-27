import Vue from 'vue'
import Router from 'vue-router' //导入路由插件

Vue.use(Router) //安装插件

export default new Router({
	mode: 'hash',
	routes: [{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			component: () => import('../views/login.vue')
		},
		{
			path: '/home',
			component: () => import('../views/home.vue'),
			children: [{
				path: '', //第一页需配置
				component: () => import('../views/home/user.vue'),
			}, {
				path: '/user', //子路由需加 '/'
				component: () => import('../views/home/user.vue')
			}, {
				path: '/blog',
				component: () => import('../views/home/blog.vue')
			}, {
				path: '/comment',
				component: () => import('../views/home/comment.vue')
			}, {
				path: '/type',
				component: () => import('../views/home/type.vue')
			}, {
				path: '/tag',
				component: () => import('../views/home/tag.vue')
			}, ]
		}, {
			path: '/register',
			component: () => import('../views/home/register.vue')
		},

	]
})
