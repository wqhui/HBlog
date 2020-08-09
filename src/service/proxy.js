function encodeParam (value = '', isEncodeURI = false) {
  if (typeof value === 'object') {
    return isEncodeURI ? encodeURIComponent(JSON.stringify(value)) : JSON.stringify(value)
  } else {
    return isEncodeURI ? encodeURIComponent(value) : value
  }
}

function responseJson (response) {
  const { ok, redirected } = response
  if (redirected) {
    console.warn('already redirected!!!')
  }
  if (ok) {
    return response.json()
  } else {
    console.error('response error:', response.statusText)
  }
}

const BASE_URL = 'http://localhost:8900/'
function postApi (url, data) {
  // Default options are marked with *
  url = BASE_URL + url
  return window.fetch(url, {
    body: encodeParam(data), // must match 'Content-Type' header
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // cookie发送 include可跨域发送, same-origin//同源发送, *omit不发送
    headers: {
      'Content-Type': 'application/json;charset=utf-8;',
      ajax: true
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors' // no-cors,只允许使用GET、HEAD、POST； cors,以cors的形式跨域； *same-origin不允许跨域
    // redirect: 'follow', // manual阻止重定向, *follow跟随跳转, error阻止重定向并抛出异常
    // referrer: 'client' // *client, no-referrer // 来源页面请求
  }).then(response => responseJson(response))// parses response to JSON
}

export function getApi (url) {
  // Default options are marked with *
  url = BASE_URL + url
  return window.fetch(url, {
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include跨域, same-origin//仅当前, *omit
    headers: {
      'Content-Type': 'application/json;charset=utf-8;'
    },
    mode: 'cors' // no-cors, cors, *same-origin
  }).then(response => responseJson(response))// parses response to JSON
}

function simpleGetApi (url) {
  // Default options are marked with *
  url = BASE_URL + url
  return window.fetch(url, {
    credentials: 'include', // cookie发送 include可跨域发送, same-origin//同源发送, *omit不发送
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    mode: 'cors' // no-cors,只允许使用GET、HEAD、POST； cors,以cors的形式跨域； *same-origin不允许跨域
  }).then(response => responseJson(response))// parses response to JSON
}

export function invokeGetSrevice (url, { args }) {
  return new Promise((resolve, reject) => {
    // dispatch = dispatch || window.store.dispatch
    getApi(url, args).then(data => {
      // doPostActions(pageId, data, dispatch)
      resolve(data)
    }).catch(error => {
      console.error('invokeAction:', error)
      reject(error)
    })
  })
}

export function invokePostSrevice (url, { args }) {
  return new Promise((resolve, reject) => {
    // dispatch = dispatch || window.store.dispatch
    postApi(url, args).then(data => {
      // doPostActions(pageId, data, dispatch)
      resolve(data)
    }).catch(error => {
      console.error('invokeAction error:', error)
      reject(error)
    })
  })
}

export function invokeSimpleGetSrevice (url, { args }) {
  return new Promise((resolve, reject) => {
    // dispatch = dispatch || window.store.dispatch
    simpleGetApi(url, args).then(data => {
      // doPostActions(pageId, data, dispatch)
      resolve(data)
    }).catch(error => {
      console.error('invokeAction:', error)
      reject(error)
    })
  })
}
