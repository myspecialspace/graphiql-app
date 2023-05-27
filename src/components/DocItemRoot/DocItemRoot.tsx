import { FC } from 'react';
import { SchemaWaveIcon } from '../common/icons/SchemaWaveIcon';

interface Props {
  onSelect: OnSelectFn;
  name: string;
}

export type OnSelectFn = (name: string) => void;

export const DocItemRoot: FC<Props> = ({ name, onSelect }) => {
  return (
    <div>
      <div className="flex items-center text-gray-600">
        <SchemaWaveIcon />
        <span className="px-2">Root Types</span>
      </div>
      <div>
        <span className="text-sky-600">query: </span>
        <span
          className="cursor-pointer text-orange-400 hover:underline"
          onClick={() => onSelect(name)}
        >
          {name}
        </span>
      </div>
    </div>
  );
};
