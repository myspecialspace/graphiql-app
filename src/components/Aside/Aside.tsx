import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocItem, OnSelectFn } from '../DocItem/DocItem';
// import { DOCS_ROOT_ITEM, isRootItem } from './constants';
import { IntrospectionSchema, IntrospectionType } from 'graphql';
import { DocItemRoot } from '../DocItemRoot/DocItemRoot';

interface AsideInterface {
  isSchemaOpen: boolean;
  schema: IntrospectionSchema;
}

export const Aside: FC<AsideInterface> = ({ isSchemaOpen, schema }) => {
  const [title, setTitle] = useState('Docs');
  const { t } = useTranslation();
  const [docItems, setDocItems] = useState<IntrospectionType[]>([]); //наш пройденный путь, закидываем рутовый объект по умолчанию  // DOCS_ROOT_ITEM,

  // текущий элемент = последний элемент из хлебных крошек
  const docItem = docItems[docItems.length - 1];
  // предыдущий элемент
  const prevDocItem = docItems[docItems.length - 2];
  //в Types находим name: Query = типов нет?! т.к. запрос описываем по-своему
  const findType = (name: string) => {
    return schema.types.find((type) => type.name === name);
  };

  //обработчик клика
  const onSelect: OnSelectFn = (item) => {
    console.log('onSelect', item);
  };

  const onSelectRoot = (name: string) => {
    // findType by name in schema
    const type = findType(name)!;

    // set nextDocItems = [...docItems, type];
    setDocItems([...docItems, type]);
  };

  console.log({ schema });

  return (
    <section
      className={isSchemaOpen ? 'block max-w-sm p-2 text-left' : 'hidden'}
    >
      <h2 className="text-3xl font-bold text-gray-600">{title}</h2>
      <p className="text-gray-600 py-2">{t('schemaDescription')}</p>
      {docItem ? (
        <DocItem item={docItem} onSelect={onSelect} />
      ) : (
        <DocItemRoot name={schema?.queryType.name} onSelect={onSelectRoot} />
      )}
    </section>
  );
};
