//config.js存放全局常量,方便维护
// axios中请求配置有baseURL选项，表示请求URL公共部分。
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
// export const baseURL = "http://aa.com/"
export const baseURL = process.env.API_ROOT
