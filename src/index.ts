import _ from 'lodash';
export * from './utils';

export const show = (key: string): string => {
  console.log(_.last([111, 222, 333]));

  return `${key}_levi`;
};
