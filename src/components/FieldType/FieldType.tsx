import { FC } from 'react';
import {
  IntrospectionInputType,
  IntrospectionInputTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionOutputTypeRef,
} from 'graphql';
import { OnSelectFn, SelectType } from '../DocItem/DocItem';
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
        <span>[</span>
        {
          <FieldType
            item={item.ofType}
            selectType={selectType}
            onSelect={onSelect}
          />
        }
        <span>]</span>
      </span>
    );
  }

  const safeItem = item as IntrospectionNamedTypeRef<IntrospectionInputType>;
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
