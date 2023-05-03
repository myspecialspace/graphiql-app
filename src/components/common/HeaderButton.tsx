import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
  text: string;
  path: string;
}

export const HeaderButton: FC<LinkProps> = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 m-0.5 text-slate-100 text-xl text-center rounded-md"
    >
      {text}
    </Link>
  );
};
