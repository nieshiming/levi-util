export const getQueryString = (name: string): string | null => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(decodeURI(r[2]));
  }
  return null;
};

export const sum = (arr: number[]): number => arr.reduce((prev, cur) => prev + cur);