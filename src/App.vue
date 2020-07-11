<template>
  <div id="app">
    <div>{{result}}</div>
    <h2>--------------</h2>
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {request} from './network/request'

export default {
  name: 'App',
  data() {
    return {
      result: ''
    }
  },
  components: {
    HelloWorld
   
  },
  created() {
    request({
      url: '/home/multidata'
    }).then(res => {
      this.result = res
    })
  },
}
</script>

<style>

</style>
