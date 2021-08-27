<template>
	<div class="content">
		<div class="login-box">
			<div class="login-title">
				{{this.$store.state.backstage_title}}
			</div>
			<el-form label-position="left" label-width="0em" :model="formLogin">
				<el-form-item label="">
					<el-input v-model="formLogin.username" placeholder="请输入用户名" clearable prefix-icon="el-icon-user">
					</el-input>
				</el-form-item>
				<el-form-item label="">
					<el-input v-model="formLogin.password" placeholder="请输入密码" show-password clearable type="password"
						maxlength="18" prefix-icon="el-icon-lock"></el-input>
				</el-form-item>
				<el-form-item>
					<el-checkbox v-model="checked" @change="onCheckbox">记住密码</el-checkbox>
					<el-button class="text_button" type="text" @click="GoRegister()">没有账号？先注册</el-button>
				</el-form-item>
				<el-form-item>
					<el-button @click="onLogin()" class="login_button" :loading="loading_login">立即登录
					</el-button>
				</el-form-item>
			</el-form>
		</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked:true,
				loading_login: false,
				formLogin: {
					username: '',
					password: '',
				}
			}
		},
		mounted() {
			
		},
		methods: {
			onCheckbox(e){
				console.log(e)
			},
			onLogin() {
				this.loading_login = true;
				this.$router.push('/user')
			},
			GoRegister() { //注册
				this.$router.push('/register')
			}
		}
	}
</script>

<style scoped="scoped">
	.content {
		background-image: url(../assets/login_bg.png);
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		position: fixed;
	}

	.login-box {
		width: 28rem;
		/* height: 25rem; */
		/* border: 1px solid red; */
		margin: 10rem auto;
		padding: 2em 2em;
		background-color: #FFFFFF;
		border-radius: 0.5rem;
		box-sizing: border-box;
		border: 1px solid #EEEEEE;
		box-shadow: 0 0 0.5rem #EEEEEE;
		/* color: #FD034C; */

	}

	.login-title {
		text-align: center;
		margin-bottom: 1.5em;
		font-size: 1.8rem;
		color: var(--themeColors);
	}
	/* 按钮颜色 */
	.login_button {
		width: 100%;
		color: #FFFFFF;
		background-color: var(--themeColors);
	}
	/* 文字按钮颜色 */
	.text_button {
		margin-left: 1.2rem;
		color: var(--themeColors);
	}

	
	
	
</style>
