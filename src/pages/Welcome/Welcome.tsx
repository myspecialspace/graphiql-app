import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/common/Layout';
import image from '../../assets/image/api.png';

export const WelcomePage: FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>
        <section className="flex flex-col lg:flex-row items-center max-screen-xl mx-auto my-5">
          <img
            className="w-4/4 lg:w-2/4 object-contain"
            src={image}
            alt="Api picture"
          />
          <p className="w-4/4 lg:w-2/4 ml-5 lg:ml-20 text-2xl sm:text-3xl text-left text-purple-950 font-bold">
            {t('about')}
          </p>
        </section>
        <section className="my-5">
          <h2 className="mb-20 text-4xl font-extrabold text-fuchsia-950">
            {t('developers')}
          </h2>
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col items-center w-3/3 sm:w-1/3 p-3">
              <img
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/6096602?v=4"
                alt="photo"
                width="100px"
                height="100px"
              />
              <h3 className="font-semibold text-gray-600">{t('teamLead')}</h3>
              <p className="font-bold text-gray-900">{t('name_1')}</p>
              <div className="flex justify-center">
                <small className="italic text-gray-600">(myspecialspace)</small>
              </div>
              <p className="text-purple-900">
                {t('aboutDeveloper_1')} <br />
                {t('aboutDeveloper_2')}
              </p>
            </div>
            <div className="flex flex-col items-center w-3/3 sm:w-1/3 p-3">
              <img
                className="rounded-full"
                src=""
                alt="photo"
                width="100px"
                height="100px"
              />
              <h3 className="font-semibold text-gray-600">{t('developer')}</h3>
              <p className="font-bold text-gray-900"> {t('name_2')}</p>
              <div className="flex justify-center">
                <small className="italic text-gray-600">(Clearenough)</small>
              </div>
              <p className="text-purple-900">{t('aboutDeveloper_3')}</p>
            </div>
            <div className="flex flex-col items-center w-3/3 sm:w-1/3 p-3">
              <img
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/68753041?s=400&u=15b40651dda5853b8d12859960611dfe8c36ba13&v=4"
                alt="photo"
                width="100px"
                height="100px"
              />
              <h3 className="font-semibold text-gray-600">{t('developer')}</h3>
              <p className="font-bold text-gray-900">{t('name_3')}</p>
              <div className="flex justify-center items-center">
                <small className="italic text-gray-600">(ElizabethT7)</small>
              </div>
              <p className="text-purple-900">{t('aboutDeveloper_4')}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
