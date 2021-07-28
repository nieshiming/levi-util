import _ from 'lodash';
import { getQueryString } from './utils/index';

export const show = (key: string): string => {
  console.log(getQueryString);
  console.log(_.last([111, 222, 333]));

  return `${key}_levi`;
};
