import _ from 'lodash';
export * from '@/utils';
import { getQueryString } from '@/utils';

export const show = (key: string): string => {
  console.log(_.last([111, 222, 333]));
  console.log(getQueryString);

  return `${key}_levi`;
};
