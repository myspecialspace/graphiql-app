import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface ErrorsInterface {
  inputEmail: string;
  password: string;
}

export const SigninForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ErrorsInterface>();

  const { t } = useTranslation();

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className="flex flex-col">
      <h3>{t('loginTitle')}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="">
          {t('inputEmail')}
          <input
            {...register('inputEmail', {
              required: 'Please input your E-mail!',
              minLength: {
                value: 8,
                message: 'E-mail should be minimum 8 symbols',
              },
            })}
          />
          {errors?.inputEmail && (
            <p>{errors?.inputEmail?.message || 'Error!'}</p>
          )}
        </label>
        <label htmlFor="">
          {t('inputPassword')}
          <input
            {...register('password', {
              required: 'Please input your password!',
              minLength: {
                value: 8,
                message: ' E-mail should be minimum 8 symbols',
              },
            })}
          />
          {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
