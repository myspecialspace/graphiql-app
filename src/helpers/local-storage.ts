export enum LSKey {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export const getAccessToken = (): string => {
  return localStorage.getItem(LSKey.ACCESS_TOKEN) || '';
};

export const setAccessToken = (value: string) => {
  localStorage.setItem(LSKey.ACCESS_TOKEN, value);
};

export const getRefreshToken = (): string => {
  return localStorage.getItem(LSKey.REFRESH_TOKEN) || '';
};

export const setRefreshToken = (value: string) => {
  localStorage.setItem(LSKey.REFRESH_TOKEN, value);
};
