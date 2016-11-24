import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//需要维护的值
const state = {
   myToken:''
}

//定义需要导出的函数
const mutations ={
  //获取并激活当前Token值
  QUERY_ACTIVE_TOKEN(state){
      state.myToken = sessionStorage.getItem("myToken");
  },
  UPDATE_ACTIVE_TOKEN(state){

  }
}

//导出需要外部组件所需的依赖
export default new Vuex.Store({
  state,
  mutations
});

