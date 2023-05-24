import { IntrospectionInputValue } from 'graphql';
import { FC } from 'react';
import { OnSelectFn, SelectType } from '../DocItem/DocItem';
import { FieldType } from '../FieldType/FieldType';

interface Props {
  args: ReadonlyArray<IntrospectionInputValue>;
  onSelect: OnSelectFn;
}

export const ItemFieldArgs: FC<Props> = ({ args, onSelect }) => {
  return (
    <span>
      {args.map((arg) => (
        <span className="text-rose-500" key={arg.name}>
          {arg.name}
        </span>
      ))}
      <span>: </span>
      {args.map((arg) => (
        <span key={arg.name}>
          {
            <FieldType
              item={arg.type}
              selectType={SelectType.INPUT}
              onSelect={onSelect}
            />
          }{' '}
        </span>
      ))}
      {args.map((arg) => (
        <span key={arg.name}>{arg.defaultValue == null ? '' : ' = '}</span>
      ))}

      {args.map((arg) => (
        <span className="text-green-500" key={arg.name}>
          {arg.defaultValue == null ? '' : arg.defaultValue}
        </span>
      ))}
    </span>
  );
};
