import axios from 'axios';

const { protocol, hostname } = window.location;
const port = 8000;
const baseURL = `${protocol}//${hostname}:${port}`;
const instance = axios.create({
  baseURL
})

// 拦截请求
instance.interceptors.request.use(config => {
  return config
})

// 拦截相应
instance.interceptors.response.use(res => {
  if (res.status === 200) {
    return res.data;
  }

  console.error('请求失败');
  return res.status;
}, err => {
  console.error(err);
})

export default instance;