<template>
    <div>
      <header class="header">
        <TopSearch />
        <ul class="am-flexbox nav weui_cells">
          <li class="am-flexbox-item active"><router-link to="/quote">沪深</router-link></li>
          <li class="am-flexbox-item "><a href="行情-港股.html">港股</a></li>
          <li class="am-flexbox-item"><a href="行情-沪港通.html">沪港通</a></li>
          <li class="am-flexbox-item"><a href="行情-美股.html">美股</a></li>
          <li class="am-flexbox-item"><a href="行情-其他.html">其他</a></li>
        </ul>
      </header>
      <!--头部结束-->
      <section class="pd-t79 pd-bottom46">
        <Index />
        <Block />
        <Sort />
      </section>
    </div>
</template>

<style>

</style>

<script>
    import TopSearch from '../common/TopSearch'
    import Index from './Index'
    import Block from './Block'
    import Sort from './Sort'
    export default{
        data(){
            return{}
        },
        components:{
            TopSearch,Index,Block,Sort
        }
    }
</script>
