<template>
	<div id="app">
		<div class="ui-btn-box">
			<div @click="getPage(21)" class="cell-app-btn">test 2.1 案例</div>
			<div @click="getPage(22)" class="cell-app-btn">test 2.2 案例</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    getPage(num){
		let self = this 
		switch(num){
			case 21:
			self.$router.push('/test21')
			break;
			case 22:
			self.$router.push('/test22')
			break;
			default:
			break
		}
		
	}
  }
}
</script>

<style lang="less">
#app {
	padding: 20px;
	.ui-btn-box{
		margin-bottom: 20px;
		.cell-app-btn{background: pink;padding: 10px;display: inline-block;color:#fff;border-radius: 6px;cursor: pointer;margin:10px;}
	}
}

</style>
