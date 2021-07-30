<template>
  <div class="list">
    <div class="pathName">
      <div class="pathName-title">接口路径</div>
      <div class="mockListPath">
        <div 
          v-for="(item,i) in pathData.list" 
          :class="{
            'mockListPath-item': true,
            'active': idx === i 
          }"
          :key="item.path"
          @click="showData(item.mockData, i)"
        >
          <div class="name">{{item.name || 'null'}}</div>
          <div class="path"><span :class="item.method.toUpperCase()">{{item.method.toUpperCase()}}</span>{{item.path}}</div>
        </div>
        <div class="page">
          <div @click="getMore('pre')">上一页</div>
          <div>总数:{{pathData.total}}</div>
          <div  @click="getMore('next')">下一页</div>
        </div>
      </div>
    </div>
    <div class="mockData">
      <JsonView :code="str"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue'
import JsonView from '../../components/highlight.vue'
import { getList } from '../../api/list'
import { ElMessage } from 'element-plus'
export default defineComponent({
    components:{
      JsonView
    },
    setup() {
      const str = ref('');
      const idx = ref(0);
      const pathData = reactive({
        list: [],
        current:1,
        size:10,
        total:0
      })

      function showData(obj:object, index:number){
        str.value = JSON.stringify(obj, null, 2);
        idx.value = index;
      }

      function getMockList(param = {}){
        getList(param).then((res:any) => {
          pathData.list = res.data;
          pathData.total = res.total;
          pathData.current = res.current;
          pathData.size = res.size;
        })
      }

      function getMore(type:string){
        if(type === 'pre'){
          if(pathData.current <= 1){
            ElMessage.warning('当前是第一页')
          }else {
            getMockList({
              current: pathData.current - 1,
              size: pathData.size
            })
          }
        }else{
          const maxSzie = (pathData?.total / pathData?.size) || 0;
          if(pathData.current <= maxSzie){
            getMockList({
              current: pathData.current + 1,
              size: pathData.size
            })
          }else{
            ElMessage.warning('已经没有了')
          }
        }
      }

      onMounted(() => {
        getMockList();
      })

      return {
        pathData,
        showData,
        getMore,
        str,
        idx
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

      .page{
        display: flex;
        justify-content: space-around;

        div{
          cursor: pointer;
        }
      }

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
          .PUT{
            background-color: #c2ba77;
          }
        }
        .name{
          font-size: 16px;
          color:rgb(0, 0, 0);
        }

        &.active{
          background-color: #E4E7ED;
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
