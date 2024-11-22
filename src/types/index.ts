import { Rule } from 'antd/lib/form';
import { ColumnType } from 'antd/es/table';

export type ICustomField<T> = {
  field?: keyof T;
  label?: string;
  value?: string | number;
  rules?: Rule[];
  required?: boolean;
  messageError?: string;
  messageCheckbox?: React.ReactNode;
};

export type ICustomColumnType<T> = ColumnType<T>[];

export type IApiError = {
  [key: string]: string[];
};

export type IPagination = {
  pagination?: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
};

export type IDetailResponse<T> = {
  data: T;
  success?: {
    message?: string;
  };
};

export const IStatusCreate = {
  SUCCESS: 'Create successfully',
  FAILED: 'Something wrongs',
};
