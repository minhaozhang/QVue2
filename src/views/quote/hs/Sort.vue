<template>
    <div>
      <div class="xn-title am-flexbox">
        <div class="am-flexbox-item"><div class="triangle-down-blue triangle-down-red "></div>涨幅榜</div>
        <div class="am-flexbox height35">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <ul class="itme itme3  weui_cells" v-for="(sort,key,index) in increaseSortData" v-if="key != 'fields'">
        <li class="am-flexbox weui_cell">
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-md">
              {{sort[increaseFiledsMap['prod_name']]}}
            </p>
            <section class="am-ft-lightgray am-ft-smm">
              {{key}}
            </section>
          </div>
          <div class="am-flexbox-item am-ft-xxl am-right-5">
            {{$mathRound2(sort[increaseFiledsMap['last_px']])}}
          </div>
          <div class="am-flexbox-item">
            <section class="am-ft-xl  am-float-right am-ft-red" v-if="sort[increaseFiledsMap['px_change_rate']] >= 0">
              +{{$mathRound2(sort[increaseFiledsMap['px_change_rate']])}}%
            </section>
            <section class="am-ft-xl  am-float-right am-ft-green" v-else>
              {{$mathRound2(sort[increaseFiledsMap['px_change_rate']])}}%
            </section>
          </div>
        </li>
      </ul>
      <div class="xn-title am-flexbox">
        <div class="am-flexbox-item"><div class="triangle-down-blue triangle-down-green"></div>跌幅榜</div>
        <div class="am-flexbox height35">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <ul class="itme itme3  weui_cells" v-for="(sort,key,index) in fallSortData" v-if="key != 'fields'">
        <li class="am-flexbox weui_cell">
          <div class="am-flexbox-item">
            <p class="am-ft-15 am-ft-md">
              {{sort[fallFiledsMap['prod_name']]}}
            </p>
            <section class="am-ft-lightgray am-ft-smm">
              {{key}}
            </section>
          </div>
          <div class="am-flexbox-item am-ft-xxl am-right-5">
            {{$mathRound2(sort[fallFiledsMap['last_px']])}}
          </div>
          <div class="am-flexbox-item">
            <section class="am-ft-xl  am-float-right am-ft-red" v-if="sort[fallFiledsMap['px_change_rate']] >= 0">
              +{{$mathRound2(sort[fallFiledsMap['px_change_rate']])}}%
            </section>
            <section class="am-ft-xl  am-float-right am-ft-green" v-else>
              {{$mathRound2(sort[fallFiledsMap['px_change_rate']])}}%
            </section>
          </div>
        </li>
      </ul>
    </div>
</template>

<style>

</style>

<script>

    import * as Config from 'assets/js/my-config'

    export default{
        mounted(){
            this.hsInitIncreaseSortData();
            this.hsInitFallSortData();
        },
        data(){
            return{
                increaseSortData:[],
                fallSortData:[],
                increaseFiledsMap:[],
                fallFiledsMap:[]
            }
        },
        components:{},
        methods:{
            hsInitIncreaseSortData: function(){
               var increaseOptions = {
                        params : {
                            "fields":"last_px,preclose_px,prod_name,hq_type_code",
                            "sort_field_name":"px_change_rate",
                            "en_hq_type_code":"SZ.esa,SS.esa",
                            "sort_type":"1",
                            "data_count":"5",
                            "access_token":window.sessionStorage.getItem("access_token"),
                            "_v":new Date().getTime()
                        }
                    }
              this.hsGetIncreaseSortData(increaseOptions);
              var vm = this;
              $reFresh(function(){vm.hsGetIncreaseSortData(increaseOptions)},Config.DATA_FRESH_TIMES);
            },
            hsGetIncreaseSortData : function (options) {
                var _self = this;
                this.$http.get(Config.OPENAPI_SORT_URL,options).then((response) => {
                    _self.increaseFiledsMap = $getJsonFields(response.body.data.sort.fields);
                    _self.increaseSortData = response.body.data.sort;
                }).catch(function(response) {
                    console.log(response)
                })
            },
            hsInitFallSortData:function (){
                var options = {
                    params : {
                            "fields":"last_px,preclose_px,prod_name,hq_type_code",
                            "sort_field_name":"px_change_rate",
                            "en_hq_type_code":"SZ.esa,SS.esa",
                            "sort_type":"0",
                            "data_count":"5",
                            "access_token":window.sessionStorage.getItem("access_token"),
                            "_v":new Date().getTime()
                        }
                    }
                this.hsGetFallSortData(options);
                var vm = this;
                $reFresh(function(){vm.hsGetFallSortData(options)},Config.DATA_FRESH_TIMES);
            },
            hsGetFallSortData:function (options){
                var _self = this;
                this.$http.get(Config.OPENAPI_SORT_URL,options).then((response) => {
                    _self.fallFiledsMap = $getJsonFields(response.body.data.sort.fields);
                    _self.fallSortData = response.body.data.sort;
                }).catch(function(response) {
                    console.log(response)
                })
            }
        }

    }


</script>
