export const isEmailValid = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isEmpty = (value: unknown): boolean => {
  return value === null || value === undefined || value === "";
};
