<template>
          <!--列表新闻-->
        <div>
          <div class="weui_cells am-mt-10">

              <a class="am-list-item am-flexbox">
                <div class="am-list-icon "><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAgBAMAAABqY9zEAAAAJFBMVEUAAADzmCbzmCbzmCbzmCbzmCbzmCbzmCbzmCbzmCbzmCbzmCaXxp7LAAAAC3RSTlMAOwzFu/KtJu/8oRnZx6gAAABySURBVCjPY2BP3Y0MwgoYGCp2o4J2BoZsNKFtDAzRaEJbGRh2owOqCwkwgID07o0MjFiEhpeNuxQYGJgsUYQ2AUnlLSgaNwAVWTuhCoEUKaAKgRWhCoEUoQmBFaFE7QawIpQEsAmsCCWZbIYoQklMEEUABmBDfLY+esgAAAAASUVORK5CYII=" width="17" alt=""></div>
                <div class="am-list-content am-ft-sm  am-flexbox-item am-ft-black">财经头条</div>
                <div class="am-flexbox">
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                </div>
              </a>

          </div>
          <ul v-for="news in newsResData">
            <li class="pd-tb-9 display-webkit border-bottom">
              <div class="newsImg" ><img :src="news.image" /></div>
              <div class="news-title am-flexbox-item">
                <p class="am-ft-md am-ft-black am-ft-ellipsis">{{news.title}}</p>
                <p class="am-ft-smm am-ft-darkgray">{{news.digest}}</p>
              </div>
              <div class=" am-ft-darkgray news-bottom-tips">{{new Date().formatTime(news.pubTime)}}</div>
            </li>
          </ul>
        </div>
          <!--列表新闻end-->
</template>

<style>

</style>


<script>

    import * as Config from 'assets/js/my-config'

    export default{
        name:'home-information',
        mounted () {
            this.getNewsInfo();
        },
        data(){
            return{
              newsResData:[]
            }
        },
        components:{},
        methods:{
            getNewsInfo : function () {
                var options = {
                        params : {
                            pageNo:1,
                            pageSize:5
                        }
                    }
                var _self = this;
                this.$http.get(Config.NEWS_URL,options).then((response) => {
                    _self.newsResData = response.data;
                }).catch(function(response) {
                    console.log(response)
                })
            }
        }

    }
</script>
