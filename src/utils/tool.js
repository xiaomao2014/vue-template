/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
// JSON字符串
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
// JSON
export const getStoreWithJson = name => {
  if (!name) return
  return JSON.parse(window.localStorage.getItem(name))
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 设置 cookie
 * @param name
 * @param value
 */
export const setCookie = (name, value, times) => {
  if (value instanceof Object) {
    value = JSON.stringify(value)
  }
  let expires
  if (times) {
    let date = new Date()
    date.setTime(date.getTime() + (times * 24 * 60 * 60 * 1000))
    expires = `; expires=${date.toGMTString()}`
  } else {
    expires = ''
  }
  document.cookie = `${name}=${value}${expires};path=/`
}

/**
 * 获取cookie
 * @param name
 * @returns {string}
 */
export const getCookie = name => {
  let cookies = document.cookie
  if (cookies.length > 0) {
    let start = cookies.indexOf(`${name}=`)
    if (start < 0) {
      return ''
    }
    let end = cookies.indexOf(';', start)
    if (end < 0) {
      end = cookies.length
    }
    return cookies.substring(start + name.length + 1, end)
  }
}

/**
 * 获取cookie(转obj)
 * @param name
 * @returns {any}
 */
export const getCookieWithJSON = name => {
  if (getCookie(name)) {
    return JSON.parse(getCookie(name))
  }
}
/**
 * 删除cookie
 * @param name
 */
export const removeCookie = name => {
  setCookie(name, '', -1)
}

/**
 * 时间格式化
 * @date 要格式化的时间戳
 * @methods:
 *  'normal'：通用格式（2018-01-01 11：02：23）
 *  'date': 只取日期（2018-01-01）
 *  'time'：只取时间（11：02：23）
 *  'BIH': 国际标准时分秒 (09ˋ40′32″)
 */
export const timeFilter = (date, methods, daySplitSymbol = '-') => {
  function formatTime (time) {
    return `${time}`.padStart(2, '0')
  }

  let filterTime
  date = new Date(date)
  let newDate
  let year = date.getFullYear()
  let month = formatTime(date.getMonth() + 1)
  let day = formatTime(date.getDate())

  newDate = `${year}${daySplitSymbol}${month}${daySplitSymbol}${day} `

  let hour = formatTime(date.getHours())
  let minute = formatTime(date.getMinutes())
  let second = formatTime(date.getSeconds())

  const time = hour + ':' + minute + ':' + second
  const BIHTime = hour + 'ˋ' + minute + '′' + second + '″'
  switch (methods) {
    case 'normal':
      filterTime = newDate + time
      break
    case 'date':
      filterTime = newDate
      break
    case 'time':
      filterTime = time
      break
    case 'BIH':
      filterTime = BIHTime
      break
  }
  return filterTime
}
/**
 * 截取2位小数
 * @param number
 * @returns {*}
 */
export const keep2Num = number => {
  return (number - 0).toFixed(2) - 0
}
