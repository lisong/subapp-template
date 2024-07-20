import { AxiosResponse } from 'axios'
import request from '../request'
import { GetListParams } from '../types/demo'

export function getTest (params?: GetListParams): Promise<AxiosResponse<any>> {
  return request.get('/api/test', { params })
}
