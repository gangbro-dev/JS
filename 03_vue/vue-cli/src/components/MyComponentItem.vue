<template>
  <div>
    <p>나는 MyComponent의 하위 컴포넌트</p>
    <p>{{ staticProps }}</p>
    <p>{{ dynamicProps }}</p>
    <button @click="childToParent">클릭!</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponentItem',
  props: {
    staticProps: String,
    dynamicProps: String,
  },
  methods: {
    childToParent: function () {
      this.$emit('give-me-ma-money')
    }
  }
}
</script>

<style>

</style>