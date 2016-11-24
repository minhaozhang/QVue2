<template>
    <div>
      <div class="xn-title am-flexbox">
        <!--右边箭头把triangle-right-blue替换triangle-right-blue-->
        <div class="am-flexbox-item"><div class="triangle-down-blue triangle-right-blue"></div>热门行业</div>
        <div class="am-flexbox height35">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="wrap weui_cells am-ft-gray">
          <div class="am-flexbox tab-list am-ft-smm" >
              <div class="am-flexbox-item weui_grid" v-for="(block,key,index) in blockData" v-if="key != 'fields' && index < 4">
                <h3 class="am-ft-sm am-ft-black">{{block[filedsMap['prod_name']]}}</h3>
                <p class="am-ft-xl am-ft-red" v-if="$mathRound2(block[filedsMap['px_change_rate']]) >= 0">
                  +{{$mathRound2(block[filedsMap['px_change_rate']])}}%
                </p>
                <p class="am-ft-xl am-ft-green" v-else>
                  {{$mathRound2(block[filedsMap['px_change_rate']])}}%
                </p>
                <h2 class="am-ft-smm">
                  {{block[filedsMap['rise_first_grp']].split(",")[1]}}
                </h2>
                <p class="am-ft-smm">
                  <span>
                    {{$mathRound2(block[filedsMap['rise_first_grp']].split(",")[2])}}
                  </span>
                  <span class="am-left-5" v-if="block[filedsMap['rise_first_grp']].split(',')[3] >= 0">
                    +{{$mathRound2(block[filedsMap['rise_first_grp']].split(",")[3])}}%
                  </span>
                  <span v-else>
                    {{$mathRound2(block[filedsMap['rise_first_grp']].split(",")[3])}}%
                  </span>
                </p>
              </div>
          </div>
          <div class="am-flexbox tab-list am-ft-smm">
              <div class="am-flexbox-item weui_grid" v-for="(block,key,index) in blockData" v-if="key != 'fields' && index > 3">
                <h3 class="am-ft-sm am-ft-black">{{block[filedsMap['prod_name']]}}</h3>
                <p class="am-ft-xl am-ft-red" v-if="$mathRound2(block[filedsMap['px_change_rate']]) >= 0">
                  +{{$mathRound2(block[filedsMap['px_change_rate']])}}%
                </p>
                <p class="am-ft-xl am-ft-green" v-else>
                  {{$mathRound2(block[filedsMap['px_change_rate']])}}%
                </p>
                <h2 class="am-ft-smm">
                  {{block[filedsMap['rise_first_grp']].split(",")[1]}}
                </h2>
                <p class="am-ft-smm">
                  <span>
                    {{$mathRound2(block[filedsMap['rise_first_grp']].split(",")[2])}}
                  </span>
                  <span class="am-left-5" v-if="block[filedsMap['rise_first_grp']].split(',')[3] >= 0">
                    +{{$mathRound2(block[filedsMap['rise_first_grp']].split(",")[3])}}%
                  </span>
                  <span v-else>
                    {{$mathRound2(block[filedsMap['rise_first_grp']].split(",")[3])}}%
                  </span>
                </p>
              </div>
          </div>
        </div>
      </div>
</template>

<style>

</style>

<script>
    import * as Config from 'assets/js/my-config'
    export default{
        mounted(){this.hsInitBlockData();},
        data(){ return{ filedsMap:[],blockData:[] } },
        components:{},
        methods:{
            hsInitBlockData : function (){
                var options = {
                        params : {
                            "fields":"prod_name,px_change_rate,rise_first_grp,last_px",
                            "sort_field_name":"px_change_rate", "data_count":"6",
                            "en_hq_type_code":"XBHS.HY",
                            "access_token":window.sessionStorage.getItem("access_token"),
                            "_v":new Date().getTime()
                        }
                    }
              this.hsGetBlockData(options); var vm = this; $reFresh(function(){vm.hsGetBlockData(options)},Config.DATA_FRESH_TIMES);
            },
            hsGetBlockData : function (options) {
                var _self = this;
                this.$http.get(Config.OPENAPI_SORT_URL,options).then((response) => {
                    _self.filedsMap = $getJsonFields(response.body.data.sort.fields); _self.blockData = response.body.data.sort;
                }).catch(function(response) {
                    console.log(response)
                })
            }
        }
    }
</script>
