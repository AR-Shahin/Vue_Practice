<template>
  <MyNav/>
  
  <router-view/>
</template>
<script>
import MyNav from './components/Navbar.vue'
export default {
    components :{
        MyNav
    }
}
</script>
<style lang="scss">

</style>
