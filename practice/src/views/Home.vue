<template>
  <div class="container">
   <h1 class="text-center my-3">Home Page</h1>
  <input ref="custom" />
  <div ref="divRef"></div>
  <TestComponent :title="test" @custom-event="myCustomEvent($event)"/>
  <button @click="change" class="btn btn-sm btn-danger">Click</button> <br>
  {{ test }}
  </div>
</template>

<script>

import TestComponent from '../components/TestComponent.vue'
export default {
  name: 'Home',
  data(){
      return {
          test : 'Hello '
      }
  },
  components: {
    TestComponent
  },
 methods: {
    customRef() {
      this.$refs.custom.value = 'Shahin'
      //console.log(this.$refs);
      this.$refs.divRef.innerHTML = 'ddd'
    },
    myCustomEvent(e){
        console.log(e);
        this.test = e.title
    },
    change(){
        this.test = 'hanid'
    }
  },
  mounted() {
    this.customRef()
  },
  updated(){
    console.log('update')
  },
  unmounted(){
    console.log('destroy')
  }
}
</script>
