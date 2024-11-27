<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    /> 
  </div>
</template>

<script>
import { parseTime } from "@htyh/utils"
export default {
  name: 'App',
  data(){
    return {
      queryParams:{
        pageNum:1,
        pageSize:10
      },
      total:21
    }
  },
  created(){
    console.log(parseTime,'--')
  },
  methods:{
    getList(){}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
