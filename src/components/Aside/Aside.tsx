import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SchemaButton } from '../common/SchemaButton';

export const Aside: FC = () => {
  const [title, setTitle] = useState('Docs')
  const { t } = useTranslation();

  return (
    <section>
      <h2 className='text-3xl font-bold text-gray-600'>{title}</h2>
      <p className='text-gray-600'>{t('schemaDescription')}</p>
      <div>Icon <span> Root Types</span></div>
      <div>
        <span className='text-purple-800 font-semibold'>query: </span>
        <SchemaButton text="Query" onClick={() => setTitle('Query')}/>
      </div>
    </section>
  )
};