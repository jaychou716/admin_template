<template>
	<div>
		<div class="title">
			<span>用户管理</span>
			<p>对系统的管理员进行管理</p>
		</div>

		<el-tabs type="border-card">
			<el-tab-pane label="用户管理">
				<span slot="label"><i class="el-icon-s-custom"></i> 用户管理</span>
				<!-- 操作栏 -->
				<el-row :gutter="20">
					<el-col :span="3">
						<div class="grid-content ">
							<el-button @click="add_drawer = true" class="login_button">添加用户</el-button>
						</div>
					</el-col>
					<el-col :span="16">
						<div class="grid-content ">
							<el-select v-model="option_value" @change="onOption" placeholder="请选择" clearable
								style="width: 18%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="5">
						<div class="grid-content ">
							<el-input style="float: right;width: 80%;" placeholder="请输入关键字搜索" v-model="search"
								clearable>
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</div>
					</el-col>
				</el-row>

				<!-- table -->
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
					@selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="日期" width="120">
						<template slot-scope="scope">{{ scope.row.date }}</template>
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="120">
					</el-table-column>
					<el-table-column prop="address" label="地址" show-overflow-tooltip>
					</el-table-column>
					<el-table-column label="操作" width="150">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.row.name)" class="login_button">编辑
							</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.row.name)">删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>


			</el-tab-pane>
		</el-tabs>
		
		
		<!-- 新增弹窗 -->
		<el-dialog title="新增用户" :visible.sync="add_drawer" width="30%" center :close-on-click-modal="false">
			<AddUser></AddUser>
		</el-dialog>
		<!-- 编辑抽屉 -->
		<el-drawer title="编辑用户" :visible.sync="update_drawer" :wrapperClosable="false">
			<UpdateUser></UpdateUser>
		</el-drawer>


	</div>
</template>

<script>
	import UpdateUser from '@/components/updateUser.vue'
	import AddUser from '@/components/addUser.vue'
	export default {
		components: {
			AddUser,
			UpdateUser
		},
		data() {			
			return {
				add_drawer:false,
				update_drawer: false,
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}],
				multipleSelection: [], //多选时的数组
				option_value: '',
				search: '',
			}
		},
		mounted() {

		},
		methods: {
			handleEdit(index) { //编辑
				this.update_drawer = true;
				console.log(index)
			},
			handleDelete(index) { //删除
				console.log(index)
			},
			onOption(e) {
				console.log(e)
			},
			handleSelectionChange(val) { //多选赋值
				this.multipleSelection = [];
				if (val) {
					val.forEach(item => {
						this.multipleSelection.push(item.date)
					});
					console.log(this.multipleSelection)
				} else {
					this.multipleSelection = [];
				}

			},
		}
	}
</script>

<style scoped="scoped">
	.title {
		border-left: 2px solid var(--themeColors);
		padding-left: 5px;
		margin-bottom: 2rem;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}


	.login_button {
		/* width: 100%; */
		color: #FFFFFF;
		background-color: var(--themeColors);
	}
	
	

</style>
<style type="text/css">
	/* 表格多选框颜色 */
	.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
		background-color:var(--themeColor)!important;
		border-color:var(--themeColor)!important;
	}
</style>