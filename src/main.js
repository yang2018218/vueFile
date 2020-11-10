// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import http from '@/api/axios.js'
Vue.prototype.$http = http
    // 导入axios
    // import axios from 'axios'
    // Vue.prototype.$http = axios

// 导入element
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

// 导入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 导入vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)
// import createPersistedState from 'vuex-persistedstate' //刷新保持vuex状态
// export default new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations,
//     plugins: [createPersistedState()] //此行为保存状态
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
