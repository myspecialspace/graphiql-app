import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ErrorsInterface {
  name: string;
  inputEmail: string;
  password: string;
}

export const SignupForm: FC = () => {
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
        {t('signUpTitle')}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80">
        <label htmlFor="name">
          <input
            {...register('name', {
              required: 'Please input your name',
              minLength: {
                value: 3,
                message: 'Name should be minimum 3 symbols',
              },
            })}
            className="form__input"
            placeholder="Enter your name..."
          />
          <div className="form__error">
            {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
          </div>
        </label>
        <label htmlFor="inputEmail">
          <input
            {...register('inputEmail', {
              required: 'Please input your E-mail!',
              minLength: {
                value: 8,
                message: t('error'),
              },
            })}
            className="form__input"
            placeholder="Enter E-mail..."
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
            })}
            className="form__input"
            placeholder="Enter password"
          />
          <div className="form__error">
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
        </label>
        <button type="submit" className="form__button">
          {t('continue')}
        </button>
        <div className="border mt-4"></div>
        <div>
          <span className="text-purple-900 text-sm mr-2">
            {t('haveAccount')}
          </span>
          <Link
            to="/signin"
            className="text-purple-900 font-bold cursor-pointer hover:text-purple-500"
          >
            {t('logIn')}
          </Link>
        </div>
      </form>
    </div>
  );
};
