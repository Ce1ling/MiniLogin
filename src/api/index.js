// 统一管理项目中ajax请求
import ajax from './ajax'

// 任何使用请求验证码，都可以调用此函数
export const reqVerifyCode = (phone) => ajax.post('http://localhost:3000/', {phone});