<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{name: 'CreateView'}">[Create]</router-link>
    <br>
    <button @click="getArticles">목록 "줘"</button>
    <ArticleList/>
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList';

export default {
  name: 'ArticleView',
  components: {
    ArticleList
  },
  computed:{
  },
  created() {
    this.$store.dispatch('getArticles')
  },
  methods: {
    getArticles() {
      this.$store.dispatch('getArticles')
    }
  },
}
</script>

<style>

</style>
