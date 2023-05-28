import { IntrospectionType } from 'graphql';
import { FC } from 'react';
import { SchemaFieldsIcon } from '../common/icons/SchemaFieldsIcon';
import { OnSelectFn, SelectType } from '../DocItem/DocItem';
import { DocItemName } from '../DocItemName/DocItemName';
import { ItemField } from '../ItemField/ItemField';

interface Props {
  item: IntrospectionType;
  onSelect: OnSelectFn;
}

export const DocItemAnyType: FC<Props> = ({ item, onSelect }) => {
  if (item.kind === 'SCALAR') {
    return (
      <div>
        <DocItemName name={item.name} />
        <div>{item.description}</div>
      </div>
    );
  }

  if (item.kind === 'INPUT_OBJECT' || item.kind === 'OBJECT') {
    return (
      <div>
        <DocItemName name={item.name} />
        <div className="flex items-center text-gray-600">
          <SchemaFieldsIcon />
          <div className="ml-2">Fields</div>
        </div>
        {'inputFields' in item &&
          item.inputFields?.map((field) => (
            <ItemField
              key={field.name}
              field={field}
              selectType={SelectType.INPUT_FIELD}
              onSelect={onSelect}
            />
          ))}
        {'fields' in item &&
          item.fields?.map((field) => (
            <ItemField
              key={field.name}
              field={field}
              selectType={SelectType.FIELD}
              onSelect={onSelect}
            />
          ))}
      </div>
    );
  }

  if (item.kind === 'ENUM') {
    return (
      <div>
        <DocItemName name={item.name} />
        <div className="flex items-center text-gray-600">
          <SchemaFieldsIcon />
          <div className="ml-2">Enum values</div>
        </div>
        {(item.enumValues || []).map((enumValue) => (
          <div key={enumValue.name} className="text-sky-600 mb-4">
            {enumValue.name}
          </div>
        ))}
      </div>
    );
  }

  return null;
};
