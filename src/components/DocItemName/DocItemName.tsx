import { FC } from 'react';

export const DocItemName: FC<{ name: string }> = ({ name }) => {
  return <h2 className="text-3xl font-bold text-gray-600">{name}</h2>;
};
