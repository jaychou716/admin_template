<template>
	<div id="app" :style="this.$store.state.themeColors">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {

		},
		created() {
			//一下处理 this.$store.state 刷新页面会初始化问题
			//在页面加载时读取sessionStorage里的状态信息
			if (sessionStorage.getItem("store")) {
				this.$store.replaceState(
					Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store")))
				)
			}
			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload", () => {
				sessionStorage.setItem("store", JSON.stringify(this.$store.state))
			})
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	/* tabs标签组激活颜色 */
	.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
		color:var(--themeColor)!important;
	}
	/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
