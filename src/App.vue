<template>
  <HeadMenu></HeadMenu>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeadMenu from './components/HeadMenu.vue'

export default defineComponent({
  name: 'App',
  components:{
    HeadMenu
  }
})
</script>
<style>
html,body{
  padding: 0;
  margin: 0;
}
</style>