// 参数的数据格式分两种
// 1.json对象类型  {name:1,password:1356565}
// 2.字符串类型    name:1,password:1356598   (需要下载qs插件进行转换)

import axios from 'axios'
import Qs from 'qs' //（如果只是get请求就不需要引qs）
import { Message, Loading } from 'element-ui' //引入element中的弹窗，这个不是必须的可根据项目来
import { baseURL } from './config.js'

axios.defaults.withCredentials = false; //false  不跨域  true 跨域
axios.defaults.headers.common['token'] = sessionStorage.getItem('token'); //设置请求头，这个是不是必须的
var loadingInstance;
export default function(url, params, method = 'get', type = "json") {
    //设置请求头
    if (method == "post") {
        if (type = "json") { //参数是json类型
            axios.defaults.headers = { 'content-type': 'application/json' }
        } else { //参数是字符串类型
            axios.defaults.headers = { 'content-type': 'application/x-www-form-urlencoded' }
            params = Qs.stringify(params)
        }
    }
    console.log(method)
        // 添加请求拦截器，在发送请求之前做些什么
    axios.interceptors.request.use(function(config) {
        // 显示loading
        loadingInstance = Loading.service({ fullscreen: true })
        return config
    }, function(error) {
        // 请求错误时弹框提示，或做些其他事
        return Promise.reject(error)
    })


    //当出现某些情况的时候设置响应拦截
    axios.interceptors.response.use(response => {
        // if (response.data.statusCode == 20009) { //这里的状态码是根据后台设置的来
        //     Message.error({ message: '登录过期，请重新登录' })
        // }
        return response;
    }, error => {
        return Promise.resolve(error.response)
    })

    //发送请求
    return new Promise((resolve, reject) => {
        axios({
            url: baseURL + url,
            method: method,
            type,
            data: params,
            timeout: 6000,
        }).then(result => {
            loadingInstance.close()
            resolve(result.data)
        }).catch(err => {
            loadingInstance.close()
            reject(err)
        })
    })
}
