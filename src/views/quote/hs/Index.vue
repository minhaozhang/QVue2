<template>
      <div class="am-flexbox exponent border-bottom">
        <div class="am-flexbox-item" :class="{'am-bg-red':shzsRedColor,'am-bg-green':shzsGreenColor}">
          <h3 class="am-ft-smm am-mt-5">上证指数</h3>
          <div class="am-ft-md am-pt-5">
            {{$mathRound2(shzsResData[filedsMap['last_px']])}}
          </div>
          <p class="am-ft-smm">
            <span>
                {{$mathRound2(shzsResData[filedsMap['px_change']])}}
            </span>
            <span class="am-left-5" v-if="$mathRound2(shzsResData[filedsMap['px_change']]) >= 0 ">
                +{{$mathRound2(shzsResData[filedsMap['px_change_rate']])}}%
            </span>
            <span class="am-left-5" v-else>
                {{$mathRound2(shzsResData[filedsMap['px_change_rate']])}}%
            </span>
          </p>
        </div>
        <div class="am-flexbox-item" :class="{'am-bg-red':szzsRedColor,'am-bg-green':szzsGreenColor}">
          <h3 class="am-ft-smm am-mt-5">深证成指</h3>
          <div class="am-ft-md am-pt-5">
            {{$mathRound2(szzsResData[filedsMap['last_px']])}}
          </div>
          <p class="am-ft-smm">
              <span>
                {{$mathRound2(szzsResData[filedsMap['px_change']])}}
              </span>
              <span class="am-left-5" v-if="$mathRound2(szzsResData[filedsMap['px_change']]) >= 0 ">
                +{{$mathRound2(szzsResData[filedsMap['px_change_rate']])}}%
              </span>
              <span v-else>
                {{$mathRound2(szzsResData[filedsMap['px_change_rate']])}}%
              </span>
          </p>
        </div>
        <div class="infiniteCarousel am-flexbox-item">
          <div class="wrapper_info">
            <div class="am-left-10" :class="{'am-bg-red':cybzRedColor,'am-bg-green':cybzGreenColor}">
                <h3 class="am-ft-smm am-pt-5">创业板指</h3>
                <div class="am-ft-md am-pt-5">
                  {{$mathRound2(cybzResData[filedsMap['last_px']])}}
                </div>
                <p class="am-ft-smm">
                  <span>
                      {{$mathRound2(cybzResData[filedsMap['px_change']])}}
                  </span>
                  <span class="am-left-5" v-if="$mathRound2(cybzResData[filedsMap['px_change']]) >= 0 ">
                      +{{$mathRound2(cybzResData[filedsMap['px_change_rate']])}}%
                  </span>
                  <span v-else>
                      {{$mathRound2(cybzResData[filedsMap['px_change_rate']])}}%
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
        mounted(){
            this.hsInitIndexData();
        },
        data(){
            return{
                shzsResData:[],
                szzsResData:[],
                cybzResData:[],
                filedsMap:[],
                shzsRedColor:false,
                shzsGreenColor:false,
                szzsRedColor:false,
                szzsGreenColor:false,
                cybzRedColor:false,
                cybzGreenColor:false
            }
        },
        components:{},
        methods:{
            hsInitIndexData: function(){
               var options = {
                        params : {
                            "fields":"last_px,preclose_px,px_change_rate,px_change",
                            "en_prod_code":"1A0001.SS,2A01.SZ,399006.SZ",
                            "access_token":window.sessionStorage.getItem("access_token"),
                            "_v":new Date().getTime()
                        }
                    }
              this.hsGetIndex(options);
              var vm = this;
              $reFresh(function(){vm.hsGetIndex(options)},Config.DATA_FRESH_TIMES);
            },
            hsGetIndex : function (options) {
                var _self = this;
                this.$http.get(Config.OPENAPI_REAL_URL,options).then((response) => {
                    _self.filedsMap = $getJsonFields(response.body.data.snapshot.fields);
                    _self.shzsResData = response.body.data.snapshot["1A0001.SS"];
                    _self.szzsResData = response.body.data.snapshot["2A01.SZ"];
                    _self.cybzResData = response.body.data.snapshot["399006.SZ"];
                    if((_self.shzsResData[_self.filedsMap['px_change_rate']]) >= 0 ){ _self.shzsRedColor = true; }else{ _self.shzsGreenColor = true; }
                    if((_self.szzsResData[_self.filedsMap['px_change_rate']]) >= 0 ){ _self.szzsRedColor = true; }else{ _self.szzsGreenColor = true; }
                    if((_self.cybzResData[_self.filedsMap['px_change_rate']]) >= 0 ){ _self.cybzRedColor = true; }else{ _self.cybzGreenColor = true; }
                }).catch(function(response) {
                    console.log(response)
                })
            }
        }
    }
</script>
