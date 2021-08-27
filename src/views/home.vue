<template>
	<div>
		<el-container :style="this.$store.state.themeColor">
			<el-aside>
				<el-menu :default-active="$route.path" router class="el-menu-vertical-demo"
					:collapse="this.$store.state.isCollapse" background-color="#393D49" text-color="#fff"
					active-text-color="#ffd04b">
					<el-menu-item class="logo">
						<i v-if="this.$store.state.isCollapse==true" class="el-icon-s-grid logo_icon"></i>
						<i v-else class="el-icon-menu logo_icon2"></i>
						<span slot="title">{{this.$store.state.backstage_title}}</span>
					</el-menu-item>
					<el-menu-item index="/user">
						<i class="el-icon-s-custom"></i>
						<span slot="title">用户管理</span>
					</el-menu-item>
					<el-menu-item index="/blog">
						<i class="el-icon-s-order"></i>
						<span slot="title">博客管理</span>
					</el-menu-item>
					<el-menu-item index="/type">
						<i class="el-icon-menu"></i>
						<span slot="title">分类管理</span>
					</el-menu-item>
					<el-menu-item index="/tag">
						<i class="el-icon-s-shop"></i>
						<span slot="title">标签管理</span>
					</el-menu-item>
					<el-menu-item index="/comment">
						<i class="el-icon-s-comment"></i>
						<span slot="title">评论管理</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>

				<el-header height="56px">
					<div class="open_icon" @click="onOpen_icon">
						<i v-if="this.$store.state.isCollapse==false" class="el-icon-s-fold"></i>
						<i v-else class="el-icon-s-unfold"></i>
					</div>
					<div class="color-picker">
						<span>Logo换肤</span>
						<el-color-picker v-model="color" @change="changeColor" show-alpha class="color-logo">
						</el-color-picker>
					</div>
					<div class="color-picker">
						<span>主题换肤</span>
						<el-color-picker v-model="colors" @change="changeColors" show-alpha class="color-logo">
						</el-color-picker>
					</div>
					<div class="user">
						<div class="user_avater" @click="changeColor()">
							<img src="../assets/logo.png">
						</div>
						<div class="user_nickname">早安没吃饱</div>
						<div class="user_setting">
							<el-menu active-text-color="#ffd04b" text-color="#fff" :background-color="colors" mode="horizontal"
								style="height: 3.5rem;">
								<el-submenu index="1">
									<template slot="title">
										<i class="el-icon-s-tools"></i>
										我的
									</template>
									<el-menu-item index="1-1" @click="onInfo()">我的信息</el-menu-item>
									<el-menu-item index="1-2" @click="onLoginOut()">注销登录</el-menu-item>
								</el-submenu>
							</el-menu>
							<!-- <i class="el-icon-s-tools"></i> -->
						</div>
					</div>
				</el-header>

				<el-main>
					<router-view />
				</el-main>

			</el-container>
		</el-container>

		<!-- 弹窗---我的信息 -->
		<el-dialog title="我的信息" :visible.sync="infoDialog" width="30%" center :close-on-click-modal="false">
			<Info></Info>
		</el-dialog>
	</div>
</template>

<script>
	import Info from '@/components/info.vue'
	export default {
		components: {
			Info
		},
		data() {
			return {
				color: 'rgba(0,151,136, 0.8)',
				colors: 'rgba(84,92,100, 0.8)',
				infoDialog: false, //我的信息
			}
		},
		mounted() {
			this.color = this.$store.state.personality;
			this.colors = this.$store.state.personalitys;
		},
		methods: {
			onOpen_icon() {
				this.$store.state.isCollapse = !this.$store.state.isCollapse;
			},
			onLoginOut() { //注销登录
				this.$router.push('../login')
			},
			onInfo() {
				this.infoDialog = true;
			},
			changeColor() { //选择颜色
				this.setColor(this.color)
			},
			setColor(color) {
				this.$store.commit("addcount", color);
				localStorage.setItem("personality", color);
			},
			changeColors() { //选择颜色
				this.setColors(this.colors)
			},
			setColors(color) {
				this.$store.commit("addcounts", color);
				localStorage.setItem("personalitys", color);
			}
		}
	}
</script>

<style scoped="scoped">
	.el-header {
		background-color: var(--themeColors);
		color: #FFFFFF;
		/* text-align: center; */
		line-height: 56px;
		box-sizing: border-box;
	}

	.el-aside {
		background-color: var(--themeColors);
		color: #333;
		text-align: center;
		line-height: 200px;
		height: 100vh;
		box-sizing: border-box;
		/* 宽度随着el-menu变化而变化 */
		width: auto !important;
	}

	/* 用el-menu必加,否则有bug */
	.el-menu {
		border-right: none;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 12.5rem;
		box-sizing: border-box;
	}

	.logo {
		background-color: var(--themeColor) !important;
		font-size: 1.0625rem;
		font-weight: bold;
	}

	.open_icon {
		float: left;
		font-size: 1.875rem;
		cursor: pointer;
		color: #FFFFFF;
		margin-right: 2rem;
	}


	.user {
		/* width: 200px; */
		height: 100%;
		float: right;

		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.user_avater {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		box-sizing: border-box;
		margin-right: 0.5rem;
		box-shadow: 0 0 0.8rem #EEEEEE;
		margin-top: 0.25rem;
		background-color:var(--themeColor);
	}

	.user_avater img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.user_nickname {
		margin-right: 1rem;
		color: #FFFFFF;
	}

	.user_setting {
		font-size: 1.875rem;
	}

	.logo_icon {
		font-size: 30px;
		color: #FFFFFF;
	}

	.logo_icon2 {
		font-size: 25px;
		color: #FFFFFF;
	}

	.color-picker {
		float: left;
		height: 3.5rem;
		box-sizing: border-box;
		color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		line-height: 3.5rem;
		margin-right: 2rem;
	}

	.color-logo {
		margin-top: 7px;
		margin-left: 0.625rem;
	}
</style>
<style type="text/css">
	/* 右上角---我的 */
	.el-menu--horizontal>.el-submenu .el-submenu__title {
		height: 56px !important;
	}

	.el-menu-item.is-active {
		background-color: var(--themeColors) !important;
	}

	.el-menu--popup {
		padding: 0rem !important;
	}

	.el-menu--collapse .el-menu .el-submenu,
	.el-menu--popup {
		min-width: 125px;
		text-align: center;
	}
</style>
