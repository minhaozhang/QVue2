<template>
    <div>
      <section style="padding-bottom: 44px">
        <div class="bd am-bg-white" >
          <home-index/>
          <home-block/>
        </div>
        <div class="am-mt-10">
          <home-sundry/>
          <home-information />
        </div>
      </section>
    </div>
</template>

<style>

</style>

<script>

    import Swiper from 'swiper'
    import HomeIndex from 'views/home/Home-index'
    import HomeBlock from 'views/home/Home-block'
    import HomeSundry from 'views/home/Home-sundry'
    import HomeInformation from 'views/home/Home-information'

    export default{
        mounted () {
            this.initSwiper();
        },
        name:'home',
        data(){
            return {}
        },
        components : {
            HomeIndex,
            HomeBlock,
            HomeSundry,
            HomeInformation
        },
        methods : {
            initSwiper : function () {
                var swiper = new Swiper('.ad-swiper-container', {
                  pagination: '.swiper-pagination',
                  slidesPerView: 1,
                  paginationClickable: true,
                  spaceBetween: 0,
                  centeredSlides: true,
                  autoplay: 4500,
                  autoplayDisableOnInteraction: false,
                  loop: true
                })
            }
        }
    }
</script>
