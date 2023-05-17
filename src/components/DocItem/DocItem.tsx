import { FC } from 'react';
import {
  IntrospectionType,
  IntrospectionField,
  IntrospectionInputTypeRef,
  IntrospectionOutputTypeRef,
} from 'graphql';

interface Props {
  item: IntrospectionType;
  onSelect: OnSelectFn;
}

export type OnSelectFn = (item: IntrospectionType) => void;

// TODO to file component
// компонент кот. рисует return type (Continent, [Continent!]!)
export const FieldType: FC<{
  type: IntrospectionOutputTypeRef | IntrospectionInputTypeRef;
}> = ({ type }) => {
  if (type.kind === 'NON_NULL') {
    return <span>{<FieldType type={type.ofType} />}!</span>;
  }

  if (type.kind === 'LIST') {
    return <span>[{<FieldType type={type.ofType} />}]</span>;
  }

  return (
    <span className="cursor-pointer text-orange-400 hover:underline">
      {type.name}
    </span>
  );
};

// TODO to file component
// отдельный  компонент с филдами принимает 1 филд
export const DocItemField: FC<{ field: IntrospectionField }> = ({ field }) => {
  return (
    <div className="flex whitespace-nowrap">
      <span className="cursor-pointer text-cyan-600 hover:underline">
        {field.name}
      </span>
      <span className="flex">
        (
        <span>
          {field.args.map((arg) => (
            <span className="text-green-600" key={arg.name}>
              {arg.name}: {<FieldType type={arg.type} />}{' '}
              {arg.defaultValue == null ? '' : ' = ' + arg.defaultValue}
            </span>
          ))}
        </span>
        )
      </span>
      <span>
        : <FieldType type={field.type} />
      </span>
    </div>
  );
};
// компонент рисует вьюшку
export const DocItem: FC<Props> = ({ item, onSelect }) => {
  console.log('render', item);

  if (item.kind === 'OBJECT') {
    return (
      <div>
        <div>Fields:</div>
        {item.fields.map((field) => (
          <DocItemField key={field.name} field={field} />
        ))}
      </div>
    );
  }

  return null;
};
