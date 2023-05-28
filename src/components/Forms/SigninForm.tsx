import { MAIN_ROUTE } from '@/helpers/constants';
import { useAuth } from '@/store/hooks/auth';
import { FirebaseError } from 'firebase/app';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

interface SignInFormInterface {
  email: string;
  password: string;
}

export const SigninForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<SignInFormInterface>({
    mode: 'onBlur',
  });

  const auth = useAuth();
  const navigate = useNavigate();

  const { t } = useTranslation<string>();

  const onSubmit = async (data: SignInFormInterface) => {
    try {
      await auth.signIn({ email: data.email, password: data.password });
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
        {t('loginTitle')}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80">
        <label htmlFor="email">
          <input
            {...register('email', {
              required: t('errorInputEmail')!,
              pattern: {
                value:
                /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i,
                message: t('errorEmail'),
              },
            })}
            type="email"
            id="email"
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
          {t('login')}
        </button>
        <div className="form__error mt-2">
          {errors?.root && <p>{errors?.root?.submit.message || 'Error!'}</p>}
        </div>
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
