import axios from 'axios';
import { ILogin } from '@/types/auth';
import toast from 'react-hot-toast';
import { get } from 'lodash';
import axiosInstance from '../axios.service';

const PREFIX_URL = '/auth';

export const apiLogin = async (payload: ILogin) => {
  try {
    return await axiosInstance.post(`${PREFIX_URL}/login`, payload);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: error?.response?.status,
        data: error?.response?.data?.errors,
      };
    }
    toast.error(get(error, 'response.data.errors', 'サーバーエラー'), {
      position: 'top-right',
    });
    return null;
  }
};

export const apiLogout = async () => {
  try {
    return await axiosInstance.post(`${PREFIX_URL}/logout`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: error?.response?.status,
        data: error?.response?.data?.errors,
      };
    }
    toast.error(get(error, 'response.data.errors', 'サーバーエラー'), {
      position: 'top-right',
    });
    return null;
  }
};
