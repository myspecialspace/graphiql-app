import { api } from '@/api';
import { FC, useEffect, useState } from 'react';

export const Notification: FC = () => {
  const [message, setMessage] = useState('');

  const close = () => setMessage('');

  useEffect(() => {
    api.interceptors.response.use(
      (res) => res,
      (err) => {
        setMessage('Произошла ошибка');
        window.setTimeout(() => {
          close();
        }, 5000);

        return Promise.reject(err);
      }
    );
  });

  return message ? (
    <div
      className="fixed top-20 right-10 mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-red-200 p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap cursor-pointer shadow-lg z-10"
      onClick={() => close()}
    >
      <div className="inline-flex items-center text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          ></path>
        </svg>
        {message}
      </div>
    </div>
  ) : null;
};
