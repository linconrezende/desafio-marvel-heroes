import Vue from 'vue'
import md5 from 'md5'
const vm = Vue.prototype
const e = process.env
const api_url = `${e.VUE_APP_API_PROTOCOL}://${e.VUE_APP_API_ROOT}/`
const request = (_method, _api, _data) => {
  console.debug(_method, _api, _data)
  return new Promise((resolve, reject) => {
    let _ts = 1
    let _hash = md5(
      `${_ts}${e.VUE_APP_API_PRIVATE_KEY}${e.VUE_APP_API_PUBLIC_KEY}`
    )
    console.log(_ts, _hash)
    vm.axios({
      method: _method,
      url: `${api_url}${_api}?ts=${_ts}&hash=${_hash}&apikey=${e.VUE_APP_API_PUBLIC_KEY}`,
      crossDomain: true,
      data: _data
    })
      .then(function(response) {
        if (response && response.data) {
          resolve(response.data)
        } else {
          resolve(response)
        }
      })
      .catch(function(error) {
        console.log('ERROR')
        reject(error)
      })
  })
}

export default {
  Request: request
}
