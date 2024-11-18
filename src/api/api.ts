import axios from "@/api/axios";

export const registerAPI = (name: string, email: string, password: string) => {
  const url = `/api/v1/auth/register`;
  return axios.post<IBackendRes<IRegister>>(url, { name, email, password });
};

export const verifyCodeAPI = (email: string, code: string) => {
  const url = `/api/v1/auth/verify-code`;
  return axios.post<IBackendRes<IRegister>>(url, { email, code });
};

export const resendCodeAPI = (email: string) => {
  const url = `/api/v1/auth/verify-email`;
  return axios.post<IBackendRes<IRegister>>(url, { email });
};

export const loginAPI = (email: string, password: string) => {
  const url = `/api/v1/auth/login`;
  return axios.post<IBackendRes<IRegister>>(url, { username: email, password });
};
