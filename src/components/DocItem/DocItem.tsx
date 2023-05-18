import { FC } from 'react';
import { IntrospectionType } from 'graphql';
import { SchemaFieldsIcon } from '../common/icons/SchemaFieldsIcon';
import { DocItemField } from '../DocItemField/DocItemField';

interface Props {
  item: IntrospectionType;
  onSelect: OnSelectFn;
}

export type OnSelectFn = (item: IntrospectionType) => void;

// компонент рисует вьюшку
export const DocItem: FC<Props> = ({ item }) => {
  console.log('render', item);

  if (item.kind === 'OBJECT') {
    return (
      <div>
        <div className="flex items-center text-gray-600">
          <SchemaFieldsIcon />
          <span className="ml-1.5">Fields:</span>
        </div>
        {item.fields.map((field) => (
          <DocItemField key={field.name} field={field} />
        ))}
      </div>
    );
  }

  return null;
};
