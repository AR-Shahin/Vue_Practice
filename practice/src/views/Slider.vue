<template>
  <div class="container">
    <h1>This is an slider page</h1>
    <div ref="sliderRef"></div>
  </div>
</template>

<script>
export default {
    methods: {
    sliderRef() {
     //console.log(this.$refs);
     this.$refs.sliderRef.innerHTML = '<b>Hello Slider Ref</b>'
    }
  },
  mounted() {
    this.sliderRef()
  }
}
</script>
