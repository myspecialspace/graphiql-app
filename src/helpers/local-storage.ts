export enum LSKey {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
  IS_LOGGED_IN = 'isLoggedIn',
  LANG = 'lang',
}
// перегрузка функции (для описания типов)
//getItem берет значение в Local Storage и типизирует его
function getItem<TReturn>(key: LSKey): TReturn | null; //объявляются типы
function getItem<TReturn>(key: LSKey, def: TReturn): TReturn; //объявляются типы
//сама реализация ф-ции
function getItem<TReturn>(key: LSKey, def?: TReturn): TReturn | null {
  const raw = localStorage.getItem(key); // возвращает string | null
  // условие под null
  try {
    return JSON.parse(raw || '');
  } catch (error) {
    return def ?? null;
  }
}
const setItem = (key: LSKey, value: string): void =>
  localStorage.setItem(key, value);

export const getAccessToken = (): string => {
  return getItem(LSKey.ACCESS_TOKEN) || '';
};

export const setAccessToken = (value: string) => {
  setItem(LSKey.ACCESS_TOKEN, value);
};

export const getRefreshToken = (): string => {
  return getItem(LSKey.REFRESH_TOKEN) || '';
};

export const setRefreshToken = (value: string) => {
  setItem(LSKey.REFRESH_TOKEN, value);
};

export const getLoggedIn = (): boolean =>
  getItem<boolean>(LSKey.IS_LOGGED_IN, false); //объявляем дженерик <boolean>, по дефолту false на logged in
export const setLoggedIn = (value: boolean) =>
  setItem(LSKey.IS_LOGGED_IN, String(value));

export const getLang = (): string => getItem<string>(LSKey.LANG) || '';
export const setLang = (value: string): void => setItem(LSKey.LANG, value);
