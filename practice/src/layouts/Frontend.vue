<template>
  <div class="home">
    <MyHeader></MyHeader>
   <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '../components/Frontend/Header/Header.vue'
export default {
components :{
  MyHeader
}
}
</script>
<style lang="css">
  .router-link-exact-active.my-nav{
  background:#2c3e50;
  font-weight: bold;
  color: #ecf0f1;
}
</style>