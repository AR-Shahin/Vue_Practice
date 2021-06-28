<template>
  <div class="container">
   <h1 class="text-center my-3">Home Page</h1>
  <input ref="custom" />
  <div ref="divRef"></div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  },
 methods: {
    customRef() {
      this.$refs.custom.value = 'Shahin'
      //console.log(this.$refs);
      this.$refs.divRef.innerHTML = 'ddd'
    }
  },
  mounted() {
    this.customRef()
  }
}
</script>
