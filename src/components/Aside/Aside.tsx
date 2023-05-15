import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SchemaButton } from '../common/SchemaButton';

interface AsideInterface {
  isSchemaOpen: boolean;
}

export const Aside: FC<AsideInterface> = ({ isSchemaOpen }) => {
  const [title, setTitle] = useState('Docs');
  const { t } = useTranslation();

  return (
    <section
      className={isSchemaOpen ? 'block max-w-sm p-2 text-left' : 'hidden'}
    >
      <h2 className="text-3xl font-bold text-gray-600">{title}</h2>
      <p className="text-gray-600 py-2">{t('schemaDescription')}</p>
      <div>
        Icon <span> Root Types</span>
      </div>
      <div className="pl-2">
        <span className="text-purple-800 font-semibold">query: </span>
        {
          //result &&
          <SchemaButton
            text=/*{result.data.__schema.queryType.name}*/ "Query"
            onClick={() =>
              setTitle(/*{result.data.__schema.queryType.name}*/ 'Query')
            }
          />
        }
      </div>
    </section>
  );
};
