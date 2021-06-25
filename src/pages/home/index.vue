<template>
  <div class="home">
    <div class="description">
      <div>realMock</div>
      <div>数据模拟，解决开发初期接口等待</div>
    </div>

    <div class="stared" @click="jumpPage">开始吧 <i class="el-icon-right"></i></div>

    <div class="introduce">
      <ul class="introduce-content">
        <li>无需安装，在线配置完成即可在项目中使用</li>
        <li>填写需要后端提供的接口文档路径，输入初定义好的mock数据(JSON格式)</li>
        <li>
          目前市面主流使用react,vue框架，脚手架生成项目以后或者是webpack配置，
          只需要在代理配置项中将代理域名更换至当前网站域名，项目联调阶段再更换为业务域名。
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter} from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter();
    function jumpPage(){
      router.push('/config')
    }
    return {
      jumpPage
    }
  },
})
</script>

<style lang="scss" scoped>
.home{
  .description{
    display: flex;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #339944;
    & > div{
      font-size: 20px;
      color: #f2f2f2;
      display: inline-block;
      line-height: 30px;
      text-align: center;
    }
  }

  .stared{
    color: #fff;
    width: 150px;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    line-height: 50px;
    background-color: #339944;
    border-radius: 10px;
    cursor: pointer;
  }

  .introduce-content{
    width: 800px;
    padding-top: 20px;
    margin: 0 auto;
    li{
      color:#2c3e50;
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>
