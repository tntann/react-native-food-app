import axios from "@/api/axios";

export const registerAPI = (name: string, email: string, password: string) => {
  const url = `/api/v1/auth/register`;
  return axios.post<IBackendRes<IRegister>>(url, { name, email, password });
};
