import { FC } from 'react';
import { IntrospectionInputTypeRef, IntrospectionOutputTypeRef } from 'graphql';
import { OnSelectFn, SelectType } from '../DocItem/DocItem';

// компонент кот. рисует return type (Continent, [Continent!]!)
interface PropsWithInput {
  item: IntrospectionInputTypeRef;
  selectType: SelectType.INPUT;
  onSelect: OnSelectFn;
}
interface PropsWithOutput {
  item: IntrospectionOutputTypeRef;
  selectType: SelectType.OUTPUT;
  onSelect: OnSelectFn;
}
interface Props {
  item: IntrospectionInputTypeRef | IntrospectionOutputTypeRef;
  selectType: SelectType.INPUT | SelectType.OUTPUT;
  onSelect: OnSelectFn;
}
export const FieldType: FC<Props> = ({ item, selectType, onSelect }) => {
  if (item.kind === 'NON_NULL') {
    return (
      <span>
        {
          <FieldType
            item={item.ofType}
            selectType={selectType}
            onSelect={onSelect}
          />
        }
        !
      </span>
    );
  }

  if (item.kind === 'LIST') {
    return (
      <span>
        [
        {
          <FieldType
            item={item.ofType}
            selectType={selectType}
            onSelect={onSelect}
          />
        }
        ]
      </span>
    );
  }

  const safeItem = item as IntrospectionInputTypeRef;
  const st = selectType as SelectType.INPUT;

  return (
    <span
      className="cursor-pointer text-orange-400 hover:underline"
      onClick={() => onSelect({ item: safeItem, type: st })}
    >
      {item.name}
    </span>
  );
};
