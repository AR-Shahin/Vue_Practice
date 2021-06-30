<template>
  <div class="container">
   <h1 class="text-center my-3">Home Page</h1>
  <input ref="custom" />
  <div ref="divRef"></div>
  <TestComponent :title="test" @custom-event="myCustomEvent($event)"/>
  <button @click="change" class="btn btn-sm btn-danger">Click</button> <br>
  {{ test }}
  <SlotComponent>
      <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>
<template v-slot:shahin>
    <div>
        <h5 class="text-success">Hello Shahin Bhai Slot</h5>
    </div>
</template>
  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>  
  </SlotComponent>
  </div>
</template>

<script>

import TestComponent from '../components/TestComponent.vue'
import SlotComponent from '../components/SlotComponent.vue'
export default {
  name: 'Home',
  data(){
      return {
          test : 'Hello '
      }
  },
  components: {
    TestComponent,SlotComponent
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
