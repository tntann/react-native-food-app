import axios from "@/api/axios.customize";

export const registerAPI = (name: string, email: string, password: string) => {
  const url = `/api/v1/auth/register`;
  return axios.post(url, { name, email, password });
};
