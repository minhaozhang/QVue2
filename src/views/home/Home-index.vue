<template>
    <div class="am-flexbox exponent am-ft-center am-bg-background am-ft-white">
        <div class="am-flexbox-item">
            <h3 class="am-ft-smm am-mt-5">上证指数</h3>
              <div class="am-ft-xl" :class="{'am-ft-red':shzsRedColor,'am-ft-green':shzsGreenColor}">
                {{$mathRound2(shzsResData[filedsMap['last_px']])}}
              </div>
            <p class="am-ft-smmm am-pb-5">
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
        <div class="am-flexbox-item ">
            <h3 class="am-ft-smm am-mt-5">深证指数</h3>
            <div class="am-ft-xl" :class="{'am-ft-red':szzsRedColor,'am-ft-green':szzsGreenColor}">
              {{$mathRound2(szzsResData[filedsMap['last_px']])}}
            </div>
            <p class="am-ft-smmm am-pb-5">
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
        <div class="am-flexbox-item ">
            <h3 class="am-ft-smm am-mt-5">创业板指</h3>
            <div class="am-ft-xl" :class="{'am-ft-red':cybzRedColor,'am-ft-green':cybzGreenColor}">
              {{$mathRound2(cybzResData[filedsMap['last_px']])}}
            </div>
            <p class="am-ft-smmm am-pb-5">
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
</template>

<style>
</style>


<script>

    import * as Config from 'assets/js/my-config'

    export default{
        name:'home-index',
        mounted () {
            this.initIndexData();
        },
        data() {
            return {
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
        methods: {
            initIndexData: function(){
               var options = {
                        params : {
                            "fields":"last_px,preclose_px,px_change_rate,px_change",
                            "en_prod_code":"1A0001.SS,2A01.SZ,399006.SZ",
                            "access_token":window.sessionStorage.getItem("access_token"),
                            "_v":new Date().getTime()
                        }
                    }
              this.getIndex(options);
              var vm = this;
              $reFresh(function(){vm.getIndex(options)},Config.DATA_FRESH_TIMES);
            },
            getIndex : function (options) {
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
