import { mainSlice } from '@/store/slices/main';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ChangeEvent, FC } from 'react';

export const ApiSelector: FC = () => {
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
          placeholder="Enter graphql API"
        />
      </div>
    </div>
  );
};
