<template>
  <div id="app">
   <!-- 测试css模块化 :class="$style['btn-primary']"-->
   <!-- <tx-button :class="$style['btn-primary']" ref="button"></tx-button> -->
   	<h2>set</h2>
	<input type="text" v-model="search.userinfo.value">
	新增一个属性：{{search.userinfo.require}}
	<input type="checkbox" v-model="search.userinfo.require"/>是否必须
	<button @click="handleClick">点击</button>
	<hr>
	<h2>nextTick</h2>
	<input type="text" v-model="search.enName.value"  @input="handleEnNameChange"/>
	<el_input v-model="search.enName2.value" @input="handleEnName2Change"></el_input>

	<el-input2 v-model="search.enName3.value" @input="handleEnName3Change"></el-input2>
	<ul>
		<li v-for="(item,index) in testList" :key="item.id" @click="handleListClick(index)">名字：{{item.name}},年龄：{{item.age}}</li>
	</ul>
  </div>
</template>

<script>
import TxButton from  './components/txButton'
import el_input from './components/el_input'
import elInput2 from './components/el_input2.vue'
export default {
  name: 'app',
  data () {
    return {
			search: {
				userinfo: {
					value: ''
				},
				enName: {
					value: '',
				},
				enName2: {
					value: '',
				},
				enName3: {
					value: '',
				}
			},
			testList:[
				{id: '1',name:'张三', age: '23'},
				{id: '2',name:'李四', age: '24'},
				{id: '3',name:'王五', age: '25'},
			]
    
    }
	},
	watch: {
		'search.userinfo.require'(newVal, oldVal) {
			console.log(newVal);
		},
		'search.userinfo.value'(newVal, oldVal) {
			console.log(newVal);
		},
	},
	components: {
		TxButton,
		el_input,
		elInput2
	},
	methods: {
		/**
		 * @description 英语名称输入，只能输入数字和字母
		 */
		handleEnNameChange() {
			this.search.enName.value= this.search.enName.value.trim().toString().replace(/[^(a-zA-Z0-9)]/g,'');
		},
		handleEnName2Change() {
			this.search.enName2.value= this.search.enName2.value.trim().toString().replace(/[^(a-zA-Z0-9)]/g,'');
		},
		handleEnName3Change() {
			this.$nextTick(() => {
				this.search.enName3.value= this.search.enName3.value.trim().toString().replace(/[^(a-zA-Z0-9)]/g,'');
			})
	
		},
		handleClick() {
			this.search.userinfo.value = '张三';
			this.search.userinfo.require = false
		},
		handleListClick(index){
			this.testList[index].name = '哈哈哈';
		}
		
	},
	mounted() {
		console.log(this.$refs.button);
		this.search.userinfo.value = '李四';
		this.search.userinfo.require = true;
		console.log('数组',this.testList);
	}
}
</script>

<style lang="scss" module>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	img {
		width: 30px;
		height: 30px;
	}
	.box {
		font-size: 24px;
	}
	.box span{
		font-size: 32px;
	}
	.btn-primary {
		background-color: #00e;
		color: #fff;
	}
</style>
