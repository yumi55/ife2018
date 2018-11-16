<template>
	<div id="ui-test-22">
        <div class="cell-add" @click="getAddItem">添加</div>
        <section class="ui-table">
            <table width="500px" border="0" cellspacing="1">
                <tr>
                    <th>姓名</th>
                    <th>审核状态</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item,index) in dataList" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.type}}</td>
                    <td @click="getChangType(index,item.action)">
                        <div class="cell-btn">{{item.action}}</div></td>
                </tr>
            </table>
        </section>
	</div>
</template>

<script>
export default {
	name: 'test22',
	data() {
		return {
			dataList:[
                {name:'张三',type:'合格',action:'删除'},
                {name:'李四',type:'不合格',action:'删除'},
                {name:'王五',type:'待审核',action:'审核'},
                {name:'赵六',type:'待审核',action:'审核'},
                {name:'孙七',type:'待审核',action:'审核'},
            ]

		}
    },
    filters:{
        actionType(type){
            if(type === '待审核'){
                return '审核'
            }else{
                return '删除'
            }
            
        }
    },
	methods:{
		getChangType(index,action){
            let self = this ;
            // 随机生成 合格 / 不合格
            let randomList = ['合格','不合格'];
            let randomNum = _.random(0,1)
            let randomType = randomList[randomNum]

            if(action === '审核') {
                self.dataList[index].action = '删除'
                self.dataList[index].type = randomType
            }else{
                self.dataList.splice(index,1)
            }
        },
        getAddItem(){
            let self = this
            self.dataList.push({name:'yumi',type:'待审核',action:'审核'})
        }
	}
}
</script>

<style lang="less">
	#ui-test-22{
        .cell-add{background: pink;display: inline-block;color:#fff;padding:6px 20px;border-radius: 8px;cursor: pointer;}
        .ui-table{
            margin-top: 20px;
            table{
                background: pink;color:sandybrown;
                td,th{background: #fff;text-align: center;padding: 10px 0;}
                .cell-btn{background: pink;display: inline-block;padding: 2px 6px;border-radius: 4px;color: #fff;cursor: pointer;}
            }
        }
	}
</style>

