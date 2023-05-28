import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { mainSlice } from '@/store/slices/main';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ApiSelector: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const url = useAppSelector((state) => state.main.url);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(mainSlice.actions.setUrl(value));
  };

  return (
    <div className="flex">
      <div className="sm:w-80 sm:ml-auto sm:mr-4 sm:mb-2 w-full mx-2">
        <input
          type="text"
          value={url}
          className="form__input !shadow-none"
          onChange={onChange}
          placeholder={t('enterApi')!}
        />
      </div>
    </div>
  );
};
