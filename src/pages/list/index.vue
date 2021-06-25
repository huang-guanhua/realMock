<template>
  <div class="list">
    <div class="pathName">
      <div class="pathName-title">接口路径</div>
      <div class="mockListPath">
        <div v-for="item in pathData" :key="item.path" class="mockListPath-item" @click="showData(item)">
          <div class="name">{{item.name}}</div>
          <div class="path"><span :class="item.method.toUpperCase()">{{item.method.toUpperCase()}}</span>{{item.path}}</div>
        </div>
      </div>
    </div>
    <div class="mockData">
      <JsonView :code="str"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JsonView from '../../components/highlight.vue'
export default defineComponent({
    components:{
      JsonView
    },
    setup() {
      const str = ref('');
      const pathData = [
        {
          path: '/api/list',
          method:'get',
          name:'列表接口请求',
          mockData:{code:1,message:'sucess',data:[{id:1,price:'17',name:'乔布'},{id:2,price:'18',name:'船长'}]}
        },
        {
          path: '/api/info',
          method:'post',
          name:'商品详情',
          mockData:{code:1,message:'sucess',data:{id:4,price:'22',name:'亚索',origin:'广州'}}
        }
      ]

      function showData(obj:Object){
        str.value = JSON.stringify(obj, null, 2);
      }

      return {
        pathData,
        showData,
        str
      }
    },
})
</script>

<style lang="scss" scoped>
.list{
  width: 1200px;
  padding-top: 20px;
  margin: 0 auto;
  display: flex;

  .pathName{
    width: 30%;
    min-height: 70vh;
    background-color: #f9f9f9;

    .pathName-title{
      text-align: center;
    }

    .mockListPath{
      .mockListPath-item{
        cursor: pointer;
        padding: 4px 10px;
        border-bottom: 1px solid #a39999;
        .path{
          font-size: 12px;
          color:rgb(99, 99, 99);
          & > span{
            color: #fff;
            display: inline-block;
            text-align: center;
            width: 40px;
            margin-right: 5px;
            border-radius: 2px;
          }
          .GET{
            background-color: #67C23A;
          }
          .POST{
            background-color: #409EFF;
          }
        }
        .name{
          font-size: 16px;
          color:rgb(0, 0, 0);
        }
      }
    }
  }

  .mockData{
    width: 70%;
    min-height: 70vh;
    background-color: #1E1E1E;
  }
}
</style>
