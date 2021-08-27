<template>
	<div class="content">
		<div class="main">
			<div class="login-title">
				管理员注册
			</div>
			<div class="go_back">
				<el-button class="text_button" type="text" @click="GoLogin()">返回登录 >></el-button>
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
				<el-form-item label="">
					<el-input v-model="formLogin.nickname" placeholder="请输入昵称" clearable maxlength="18"
						prefix-icon="el-icon-edit-outline"></el-input>
				</el-form-item>
				<el-form-item label="">
					<el-input v-model="formLogin.mail" placeholder="请输入邮箱" clearable maxlength="18"
						prefix-icon="el-icon-message"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="onLogin()" class="login_button" :loading="loading_login">立即注册
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
				loading_login: false,
				formLogin: {
					username: '',
					password: '',
					nickname: '',
					mail: ''
				}
			}
		},
		mounted() {

		},
		methods: {
			onLogin() {
				this.loading_login = true;
			},
			GoLogin() {
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped="scoped">
	.content {
		padding: 0 20px 0 20px;
		box-sizing: border-box;
	}

	.main {
		position: relative;
		width: 28rem;
		margin: 8rem auto;
		padding: 2em 2em;
		background-color: #FFFFFF;
		border-radius: 0.5rem;
		box-sizing: border-box;
		border: 1px solid #EEEEEE;
		box-shadow: 0 0 1rem #EEEEEE;
	}

	.go_back {
		position: absolute;
		right: 1em;
		top: 0em;
	}

	.login-title {
		text-align: center;
		margin-bottom: 1.5em;
		font-size: 1.8rem;
		color: var(--themeColors);
	}

	.login_button {
		width: 100%;
		color: #FFFFFF;
		background-color: var(--themeColors);
	}

	.text_button {
		margin-left: 1.2rem;
		color: var(--themeColors);
	}
</style>
