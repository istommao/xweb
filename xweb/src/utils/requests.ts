import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const APP_BASE_API = ''

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : APP_BASE_API,
  timeout: 60000,
  validateStatus: (status) => status < 500
})

export const Get = <T = any>(url: string, options?: AxiosRequestConfig) =>
  instance.get<T>(url, options)

export const Post = <T = any>(
  url: string,
  data?: Record<string, any>,
  options?: AxiosRequestConfig
) => instance.post<T>(url, data, options)


export type HttpResponse<ResponseData> = AxiosResponse<{
  error_code: number;
  message: string;
  data: ResponseData;
  success: boolean;
}>;


export type HttpResultResponse<ResponseData> = AxiosResponse<{
  code: number;
  message: string;
  result: ResponseData;
}>;


export type ListResponse<RecordData> = HttpResponse<{
  total: number;
  data: RecordData[];
}>;
