<template>
    <div>
      <router-view></router-view>
      <Foo />
    </div>
</template>

<style>
</style>

<script>
  import 'assets/global'
  import Foo from 'views/common/Footer'
  export default {
    name: 'app',
    data() {
      return {}
    },
    mounted () {},
    components : {
      Foo
    },
    methods : {}
  }
</script>


