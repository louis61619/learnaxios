import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })



// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //專門針對get請求的參數拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

//axios的併發請求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
//   .then(results => {
//     console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
//   })

// axios.defaults.baseURL = "http://152.136.185.210:8000/api/n3"
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 5
//   }
// })])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2)
//   }))

//   // //物件解構
//   // const obj = {
//   //   name: 'kobe',
//   //   age: 30
//   // }
//   // const {name, age} = obj; //拆成兩個物件
//   // console.log(name)
//   // console.log(age)

//   // //數組解構
//   // const names = ['why', 'kobe', 'james'] 
//   // const [name1, name2, name3] = names; //拆成三個物件
//   // console.log(name1)
//   // console.log(name2)
//   // console.log(name3)
//   // console.log(names)

  
//   // 不同的全局設定
//   axios.defaults.baseURL = 'http://222.111.33.33:8000'
//   axios.defaults.timeout = 10000

//   axios({
//     url: '/category'
//   })

// 創建對應的axios的實例
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:8000/api/n3',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

//5.封裝request模塊
import {request} from './network/request'

// request({
//   url: '/home/multidata'
// }, res => { //傳入參數
//   console.log(res) //等於success函數
// }, err => {
//   console.log(err)  //等於failure函數
// })

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function(res) {
//     console.log(res)
//   },
//   failure: function(err) {
//     console.log(err)
//   }

// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// request({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })