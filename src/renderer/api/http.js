/**
 * Created by yinshipeng on 2016/11/4.
 */
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080/'

const respSuccess = function (resp, resolve, reject) {
    console.log(resp)
    if (resp.status != '200') {
        reject(resp.data)
    } else {
        resolve(resp.data)
    }
}

const respError = function (error, reject) {
    reject()
}


export default {
  get: function (url, body) {
      body = body || {};
      return new Promise((resolve, reject) => {
      axios.get(url, body).then((resp) => {
          respSuccess(resp, resolve, reject)
      }).catch((error) => {
          respError(error, reject)
      })
    })
  },
  post: function (url, body) {
    return new Promise((resolve, reject) => {
      axios.post(url, body).then((resp) => {
          respSuccess(resp, resolve, reject)
      }).catch((error) => {
          respError(error, reject)
      })
    })
  }
}
