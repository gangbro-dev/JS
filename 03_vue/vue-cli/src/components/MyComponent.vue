<template>
  <div class="border">
    <h1>SSAFY</h1>
    <p>내가 만든 새로운 컴포넌트</p>
    <MyComponentItem
      static-props="MyComponent에서 보낸 데이터"
      :dynamic-props="dynamicProps"
      @give-me-ma-money="paretnGetEvent"
    />
  </div>
  
</template>

<script>
import MyComponentItem from '@/components/MyComponentItem'


export default {
  name: 'MyComponent',
  components: {
    MyComponentItem,
  },
  data: function () {
    return {
      dynamicProps: "이건 동적인 데이터"
    }
  },
  methods: {
    paretnGetEvent: function () {
      console.log('용돈없어!!')
      return "용돈없어!!"
    }
  }
}
</script>

<style>
  .border {
    border: solid 1px black;
  }
</style>