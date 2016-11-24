import * as Config from './my-config'
import 'assets/js/my-lib'

var myVue;

const initToken = (Vue) => {
  myVue = Vue;
  $.ajax({
    type: 'GET',
    url: Config.TOKEN_URL,
    data: {},
    dataType: 'json',
    async:false,
    success: function(data){
      window.sessionStorage.setItem("access_token", data.access_token);
    },
    error: function(xhr, type){
      console.log(" Ajax Error !")
    }
  })
}

const doToken = () => {
    myVue.http.get(Config.TOKEN_URL).then((response) => {
      var tokenArr = JSON.parse(response.body);
      window.sessionStorage.setItem("access_token", tokenArr.access_token);
    }).catch(function(response) {
      console.log(response)
    })
}

$reFresh(doToken,Config.TOKEN_FRESH_TIMES);

export default initToken






