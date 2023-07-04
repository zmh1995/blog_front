import axios from "../utils/request";

// 用户登录表单
export interface LoginReqForm {
  email: string;
  password: string;
}
// 登录成功后返回的token
export interface LoginResData {
  token: string;
}

// 用户登录
export const login = (params: LoginReqForm) => {
  // 返回的数据格式可以和服务端约定
  return axios.post<LoginResData>("/auth/login", params);
};
