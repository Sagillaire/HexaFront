export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.slice(0, length) + "..." : str;
};
