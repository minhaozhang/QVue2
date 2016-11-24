<template>
        <footer class="am-footer am-flexbox border_cells am-ft-smmm ">
            <router-link to="/index" active-class="active" class="am-grid-item am-flexbox-item">
                <p class="am-pt-5"><i class="ico-footer home-ico"></i></p>
                <p><span class="am-ft-center ">首页</span></p>
            </router-link>
            <router-link to="/optional" active-class="active" class="am-grid-item am-flexbox-item">
                <p class="am-pt-5"><i class="ico-footer price-ico"></i></p>
                <p><span class="am-ft-center">自选</span></p>
            </router-link>
            <router-link to="/hs-quote" active-class="active" class="am-grid-item am-flexbox-item">
                <p class="am-pt-5"><i class="ico-footer transaction-ico"></i></p>
                <p><span class="am-ft-center">行情</span></p>
            </router-link>
        </footer>
</template>

<style>
</style>

<script>
  export default{
      name:'common-footer',
      data(){
         return {}
      }
  }
</script>
