import { get, post, put } from '../utils/request'
// 获得天气信息
// export const getWeatherAJAX = params => get('v1/simpleWeather/query', params)
export const getWeatherAJAX = params => get('v1/api/getWeather', params)
// 获得加油站信息
// export const getOilAJAX = params => post('v1/oil/region', params)
export const getOilAJAX = params => post('v1/api/getOil', params)
// 获得手机归属地
export const getPhoneAJAX = params => put('v1/api/getPhonePlace', params)
