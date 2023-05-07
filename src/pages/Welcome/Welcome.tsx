import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/common/Layout';

export const WelcomePage: FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>
        <section className="flex flex-col lg:flex-row items-center max-screen-xl mx-auto my-5">
          <img
            className="w-4/4 lg:w-2/4 object-contain"
            src="src/assets/image/api.png"
            alt="Api picture"
          />
          <p className="w-4/4 lg:w-2/4 ml-5 lg:ml-20 text-2xl sm:text-3xl text-left text-purple-950 font-bold">
            {t('about')}
          </p>
        </section>
      </div>
    </Layout>
  );
};
