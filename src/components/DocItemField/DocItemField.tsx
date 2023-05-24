import { IntrospectionField, IntrospectionInputValue } from 'graphql';
import { FC } from 'react';
import { SchemaArgumentsIcon } from '../common/icons/SchemaArgumentsIcon';
import { SchemaTypeIcon } from '../common/icons/SchemaTypeIcon';
import { OnSelectFn, SelectType } from '../DocItem/DocItem';
import { DocItemName } from '../DocItemName/DocItemName';
import { FieldType } from '../FieldType/FieldType';
import { ItemFieldArgs } from '../ItemFieldArgs/ItemFieldArgs';

interface Props {
  item: IntrospectionField | IntrospectionInputValue;
  onSelect: OnSelectFn;
}

export const DocItemField: FC<Props> = ({ item, onSelect }) => {
  return (
    <div className="flex flex-col">
      <DocItemName name={item.name} />
      <div className="flex items-center text-gray-600">
        <SchemaTypeIcon />
        <div className="ml-2">Type</div>
      </div>
      <FieldType
        item={item.type}
        onSelect={onSelect}
        selectType={SelectType.OUTPUT}
      />

      {'args' in item && !!item.args?.length && (
        <>
          <div className="flex items-center text-gray-600">
            <SchemaArgumentsIcon />
            <div className="ml-2">Arguments</div>
          </div>
          <div>
            <ItemFieldArgs args={item.args} onSelect={onSelect} />
          </div>
        </>
      )}
    </div>
  );
};
