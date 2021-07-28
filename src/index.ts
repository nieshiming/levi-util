import _ from 'lodash';
import { age } from './controller';

export const show = (key: string): string => {
  console.log(age);
  console.log(_.last([111, 222, 333]));

  return `${key}_levi`;
};
