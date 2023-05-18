import { FC } from 'react';
import { IntrospectionInputTypeRef, IntrospectionOutputTypeRef } from 'graphql';

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
