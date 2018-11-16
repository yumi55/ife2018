
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
 
//懒加载路由
const routes = [
	{
		path:'/test21',
		component:resolve => require(['@/components/test21'],resolve)
	},
	{
		path:'/test22',
		component:resolve => require(['@/components/test22'],resolve)
	}
  ]
   
   const router = new VueRouter({
   		routes
  })

export default router;
