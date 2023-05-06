import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ErrorsInterface {
  inputEmail: string;
  password: string;
}

export const SigninForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ErrorsInterface>({
    mode: 'onBlur',
  });

  const { t } = useTranslation<string>();

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <div className="flex flex-col items-center my-5">
      <h2 className="text-2xl text-purple-900 font-bold my-4">
        {t('loginTitle')}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80">
        <label htmlFor="inputEmail">
          <input
            {...register('inputEmail', {
              required: 'Please input your E-mail!',
              minLength: {
                value: 8,
                message: t('error'),
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: t('error'),
              },
            })}
            className="form__input"
            placeholder="Input you email..."
          />
          <div className="form__error">
            {errors?.inputEmail && (
              <p>{errors?.inputEmail?.message || 'Error!'}</p>
            )}
          </div>
        </label>
        <label htmlFor="inputPassword">
          <input
            {...register('password', {
              required: 'Please input your password!',
              minLength: {
                value: 8,
                message: t('error'),
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: t('error'),
              },
            })}
            className="form__input"
            placeholder="Input your password..."
          />
          <div className="form__error">
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
        </label>
        <button type="submit" className="form__button">
          {t('login')}
        </button>
        <div className="border mt-4"></div>
        <div className="">
          <span className="text-purple-900 text-sm mr-2">
            {t('notAccount')}
          </span>
          <Link
            to="/signup"
            className="text-purple-900 text-sm font-bold cursor-pointer hover:text-purple-500"
          >
            {t('register')}
          </Link>
        </div>
      </form>
    </div>
  );
};
