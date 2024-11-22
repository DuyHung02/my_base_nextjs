import { FORMAT_DATE_SLASH, MIN_PASSWORD_LENGTH } from '@/constants/constant';
import moment from 'moment';
import toast from 'react-hot-toast';
import { get } from 'lodash';
import Cookies from 'js-cookie';

export const checkDate = (date1: string, date2: string) => {
  const momentDate1 = moment(date1, FORMAT_DATE_SLASH);
  const momentDate2 = moment(date2, FORMAT_DATE_SLASH);
  return momentDate1.isAfter(momentDate2);
};

export class Helper {
  static validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  static validatePhoneNumber = (phoneNumber: string) => {
    return phoneNumber.length === 11 && /^\d+$/.test(phoneNumber);
  };

  static formatPhoneNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const { length } = numericValue;

    if (length <= 3) {
      return numericValue;
    }
    if (length <= 7) {
      return `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
    }
    return `${numericValue.slice(0, 3)}-${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`;
  };

  static formatBirthday = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const { length } = numericValue;

    if (length <= 4) {
      return numericValue;
    }
    if (length <= 6) {
      return `${numericValue.slice(0, 4)}/${numericValue.slice(4)}`;
    }
    return `${numericValue.slice(0, 4)}/${numericValue.slice(4, 6)}/${numericValue.slice(6, 8)}`;
  };

  static validateFormatBirthday = (date: string) => {
    const regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
    return regex.test(date);
  };

  static validatePassword = (password: string) => {
    const lengthPass: number = (password || '').length;
    return lengthPass >= MIN_PASSWORD_LENGTH;
  };
}

export const imageUrlToBase64 = async (url: string) => {
  try {
    const data = await fetch(url);
    const blob = await data.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
      reader.onerror = reject;
    });
  } catch (e) {
    toast.error(get(e, 'message', 'Server error'), {
      position: 'top-right',
    });
    return '';
  }
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value);
};

export const checkExistsToken = () => {
  try {
    const cookieData = Cookies.get('persist:authCookie');
    if (cookieData) {
      const tokenData = JSON.parse(cookieData);
      if (tokenData && tokenData.token && !!JSON.parse(tokenData.token)) {
        return true;
      }
    }

    return false;
  } catch (e) {
    return false;
  }
};
