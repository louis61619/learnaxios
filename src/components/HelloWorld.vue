<template>
  <h2>{{categories}}</h2>
</template>

<script>
import {request} from '../network/request'

export default {
  data() {
    return {
      categories: ''
    }
  },
  created() {
    request({
      url: '/category'
    }).then(res => {
      this.categories = res;
    })
  },
}
</script>

<style>

</style>