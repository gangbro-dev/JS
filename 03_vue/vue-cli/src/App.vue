<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyComponent/>
    <HelloWorld message="Welcome to Your Vue.js app"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from '@/components/MyComponent'

// @ -> src 폴더 절대경로
// 모든 component는 .vue 확장자이므로 확장자 생략 

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent,
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
