// eslint-disable-next-line import/no-extraneous-dependencies
import { RuleObject } from 'rc-field-form/es/interface';
import moment from 'moment';

export const checkValidateDate = (rule: RuleObject, value: moment.Moment) => {
  if (value && value.isAfter(moment())) {
    return Promise.reject(
      new Error('Date of birth cannot be greater than the current date!'),
    );
  }
  return Promise.resolve();
};

export const checkPassword = (rule: RuleObject, value: string) => {
  if (value && value.length < 6) {
    return Promise.reject(
      new Error('The password must be at least 6 characters long.'),
    );
  }
  return Promise.resolve();
};

export const checkTrimValue = (messageError: string) => {
  return (rule: RuleObject, value: string) => {
    if (value && value.trim().length === 0) {
      return Promise.reject(messageError);
    }
    return Promise.resolve();
  };
};
