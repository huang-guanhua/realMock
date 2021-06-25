<template>
<div class="menu-head">
    <div class="logo" @click="jumpPage('/')"></div>
    <el-menu class="menu-content" mode="horizontal" :default-active="activePath" @select="jumpPage">
        <el-menu-item v-for="(menu,key) in menus" :key="key" :index="menu.path" v-text="menu.name"></el-menu-item>
    </el-menu>
</div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
    setup() {
        const activePath = ref('/');
        const router = useRouter();
        const route = useRoute();
        const menus = [{path:'/',name:'主页'}, {path:'/list',name:'列表'},{path:'/config',name:'配置'},{path:'/github',name:'github'}];

        function jumpPage(path:string){
            if(path === '/github'){
                activePath.value = '';
                window.open('https://github.com/huang-guanhua/realMock')
            }else{
                activePath.value = path;
                router.push(path);
            }
            
        }

        watch(route, (newValue, oldValue) => {
            activePath.value = newValue.path
        })

        return{
            activePath,
            menus,
            jumpPage
        }
    },
})
</script>
<style lang="scss" scoped>
.menu-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:20px;
    border-bottom: 1px solid #eee;

    .logo{
        cursor: pointer;
        width: 162px;
        height: 36px;
        margin-left: 20px;
        background-size: 100% 100%;
        background-image: url('../assets/logo.png');
    }

    .menu-content{
        border-bottom: none;
    }
}
</style>