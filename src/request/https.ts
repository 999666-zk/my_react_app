import axios from 'axios'

const httpBaseUrl = 'https://v1.hitokoto.cn'

const http = axios.create({
  baseURL: httpBaseUrl,
  timeout: 10000,
})

// const searchHttp = axios.create({
//   baseURL: searchBaseUrl,
//   timeout: 10000,
// })

export { http }
