import { FC } from 'react';
import {
  IntrospectionField,
  IntrospectionInputType,
  IntrospectionInputValue,
  IntrospectionNamedTypeRef,
  IntrospectionOutputType,
  IntrospectionType,
} from 'graphql';
import { SchemaFieldsIcon } from '../common/icons/SchemaFieldsIcon';
import { ItemField } from '../ItemField/ItemField';
import { DocItemName } from '../DocItemName/DocItemName';

interface Props {
  item: IntrospectionType;
  onSelect: OnSelectFn;
}

export enum SelectType {
  FIELD = 'field',
  INPUT_FIELD = 'input_field',
  INPUT = 'input',
  OUTPUT = 'output',
  ROOT = 'root',
}

export type OnSelectData =
  | {
      item: IntrospectionField;
      type: SelectType.FIELD;
    }
  | {
      item: IntrospectionInputValue;
      type: SelectType.INPUT_FIELD;
    }
  | {
      item: IntrospectionNamedTypeRef<IntrospectionInputType>;
      type: SelectType.INPUT;
    }
  | {
      item: IntrospectionNamedTypeRef<IntrospectionOutputType>;
      type: SelectType.OUTPUT;
    }
  | {
      item: IntrospectionType;
      type: SelectType.ROOT;
    };

export type OnSelectFn = (data: OnSelectData) => void;

export const DocItem: FC<Props> = ({ item, onSelect }) => {
  if (item.kind === 'OBJECT') {
    return (
      <div>
        <DocItemName name={item.name} />
        <div className="flex items-center text-gray-600">
          <SchemaFieldsIcon />
          <span className="ml-1.5">Fields:</span>
        </div>
        {item.fields.map((field) => (
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

  return null;
};
