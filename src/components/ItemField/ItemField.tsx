import { FC } from 'react';
import { IntrospectionField, IntrospectionInputValue } from 'graphql';
import { FieldType } from '../FieldType/FieldType';
import { OnSelectData, OnSelectFn, SelectType } from '../DocItem/DocItem';
import { ItemFieldArgs } from '../ItemFieldArgs/ItemFieldArgs';

interface Props {
  field: IntrospectionField | IntrospectionInputValue;
  selectType: SelectType.FIELD | SelectType.INPUT_FIELD;
  onSelect: OnSelectFn;
}

export const ItemField: FC<Props> = ({ field, selectType, onSelect }) => {
  return (
    <div className="flex whitespace-nowrap">
      <span
        className="cursor-pointer text-sky-600 hover:underline"
        onClick={() =>
          onSelect({ item: field, type: selectType } as OnSelectData)
        }
      >
        {field.name}
      </span>
      {'args' in field && !!field.args?.length && (
        <span className="flex">
          (<ItemFieldArgs args={field.args} onSelect={onSelect} />)
        </span>
      )}
      <span>
        :{' '}
        <FieldType
          item={field.type}
          selectType={SelectType.OUTPUT}
          onSelect={onSelect}
        />
      </span>
    </div>
  );
};
