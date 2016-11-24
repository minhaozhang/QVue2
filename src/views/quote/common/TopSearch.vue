<template>
    <aside class="self_search">
      <div class="am-search-input btn-border">
        <span class="am-search-input-icon"><i class=" type-ico2"></i></span>
        <input class="text-input" type="text" id="input_stock_code" value="" onkeyup="stockBlurSearch()" placeholder="输入搜索内容">
        <a href="javascript:void(0);" onclick="javascript:alert('弹弹弹x');" class="close-ico"></a>
      </div>
    </aside>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return{}
        },
        components:{}
    }
</script>
