import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DocItem,
  OnSelectData,
  OnSelectFn,
  SelectType,
} from '../DocItem/DocItem';
import { IntrospectionSchema } from 'graphql';
import { DocItemRoot } from '../DocItemRoot/DocItemRoot';
import { DocItemField } from '../DocItemField/DocItemField';
import { DocItemName } from '../DocItemName/DocItemName';
import { DocItemAnyType } from '../DocItemAnyType/DocItemAnyType';

interface AsideInterface {
  schema: IntrospectionSchema;
}

const Aside: FC<AsideInterface> = ({ schema }) => {
  const { t } = useTranslation();
  const [docItems, setDocItems] = useState<OnSelectData[]>([]);

  const docItem = docItems[docItems.length - 1];
  const prevDocItem = docItems[docItems.length - 2];

  const findType = (name: string) => {
    return schema.types.find((type) => type.name === name);
  };

  const onSelect: OnSelectFn = (data) => {
    setDocItems([...docItems, data]);
  };

  const onSelectRoot = (name: string) => {
    const item = findType(name)!;

    setDocItems([...docItems, { type: SelectType.ROOT, item }]);
  };

  const onBack = () => {
    setDocItems(docItems.slice(0, -1));
  };

  return (
    <section className="block p-2 text-left min-w-0">
      {!!docItems.length && (
        <div
          className="cursor-pointer hover:underline"
          onClick={() => onBack()}
        >
          {'< ' + (prevDocItem?.item.name || 'Docs')}
        </div>
      )}

      {!docItem && (
        <>
          <DocItemName name={'Docs'} />
          <p className="text-gray-600 py-2">{t('schemaDescription')}</p>
          <DocItemRoot name={schema?.queryType.name} onSelect={onSelectRoot} />
        </>
      )}
      {docItem?.type === SelectType.ROOT && (
        <DocItem item={docItem.item} onSelect={onSelect} />
      )}
      {(docItem?.type === SelectType.FIELD ||
        docItem?.type === SelectType.INPUT_FIELD) && (
        <DocItemField item={docItem.item} onSelect={onSelect} />
      )}
      {(docItem?.type === SelectType.INPUT ||
        docItem?.type === SelectType.OUTPUT) && (
        <DocItemAnyType
          item={findType(docItem.item.name)!}
          onSelect={onSelect}
        />
      )}
    </section>
  );
};

export default Aside;
