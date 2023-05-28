import { MAIN_ROUTE } from '@/helpers/constants';
import { useAuth } from '@/store/hooks/auth';
import { FirebaseError } from 'firebase/app';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

interface SignUpFormInterface {
  name: string;
  email: string;
  password: string;
}

export const SignupForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<SignUpFormInterface>({
    mode: 'onBlur',
  });
  const auth = useAuth();
  const { t } = useTranslation<string>();
  const navigate = useNavigate();

  const onSubmit = async (data: SignUpFormInterface) => {
    try {
      await auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (auth.isLoggedIn) {
        reset();
        navigate(MAIN_ROUTE);
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError('root.submit', { message: error.message });
      }
    }
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
              required: t('errorInputName')!,
              minLength: {
                value: 3,
                message: t('errorName'),
              },
            })}
            className="form__input"
            id="name"
            placeholder={t('enterName')!}
          />
          <div className="form__error">
            {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
          </div>
        </label>
        <label htmlFor="inputEmail">
          <input
            {...register('email', {
              required: t('errorInputEmail')!,
              minLength: {
                value: 8,
                message: t('error'),
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.,])[A-Za-z\d@$!%*#?&.,]{8,}$/,
                message: t('error'),
              },
            })}
            type="email"
            id="inputEmail"
            className="form__input"
            placeholder={t('inputYourEmail')!}
          />
          <div className="form__error">
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
          </div>
        </label>
        <label htmlFor="inputPassword">
          <input
            {...register('password', {
              required: t('errorInputPassword')!,
              minLength: {
                value: 8,
                message: t('error'),
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.,])[A-Za-z\d@$!%*#?&.,]{8,}$/,
                message: t('error'),
              },
            })}
            type="password"
            id="inputPassword"
            className="form__input"
            placeholder={t('enterPassword')!}
          />
          <div className="form__error">
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
        </label>
        <button type="submit" className="form__button">
          {t('registerContinue')}
        </button>
        <div className="form__error mt-2">
          {errors?.root && <p>{errors?.root?.submit.message || 'Error!'}</p>}
        </div>
        <div className="border mt-4"></div>
        <div>
          <span className="text-purple-900 text-sm mr-2">
            {t('haveAccount')}
          </span>
          <Link
            to="/signin"
            className="text-purple-900 text-sm font-bold cursor-pointer hover:text-purple-500"
          >
            {t('logIn')}
          </Link>
        </div>
      </form>
    </div>
  );
};
