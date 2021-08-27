<template>
	<div>
		<div class="avater">
			<div style="margin-bottom:0.9375rem;">
				<el-avatar :size="80" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
				</el-avatar>
			</div>
			<el-form ref="info_form" :model="info_form" label-width="40px">
				<el-form-item label="昵称">
					<el-input v-model="info_form.nickname" clearable></el-input>
				</el-form-item>
				<el-form-item label="用户">
					<el-input v-model="info_form.username" disabled clearable></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="info_form.password" type="password" clearable></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="info_form.mail" clearable></el-input>
				</el-form-item>
				<el-form-item label="">

				</el-form-item>
				<el-button @click="onUpdate()" :loading="update_loading" class="login_button">立即修改</el-button>
			</el-form>



		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				update_loading: false,
				info_form: {
					nickname: '早安没吃饱',
					username: 'qinzhiyong',
					password: '123456',
					mail: '1355918353@qq.com'
				}
			}
		},
		methods: {
			onUpdate() {
				this.update_loading = true;
			}
		}
	}
</script>

<style scoped="scoped">
	.avater {
		text-align: center;
	}
	.login_button {
		/* width: 100%; */
		color: #FFFFFF;
		background-color: var(--themeColors);
	}
</style>
