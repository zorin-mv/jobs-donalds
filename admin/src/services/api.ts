import axios, { AxiosResponse } from 'axios';

import { BASE_URL } from '../constants/config';

export const POST = async <T, B>(
  endPoint: string,
  data: B
): Promise<AxiosResponse<T>> => axios.post(`${BASE_URL}${endPoint}`, data);
