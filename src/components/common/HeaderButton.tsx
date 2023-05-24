import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface LinkProps {
  text: string;
  path?: string;
  onClick?: (event: React.MouseEvent) => void;
  children?: JSX.Element;
  theme?: ButtonTheme;
}

const classesByTheme = {
  [ButtonTheme.PRIMARY]:
    'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-pink-500 hover:to-yellow-500',
  [ButtonTheme.SECONDARY]:
    'text-slate-500 hover:bg-slate-100 active:bg-slate-200',
};

export const HeaderButton: FC<LinkProps> = ({
  text,
  path,
  children,
  theme = ButtonTheme.PRIMARY,
  onClick,
}) => {
  const Tag = path ? Link : 'div';

  return (
    <Tag
      to={path || ''}
      className={classNames(
        'p-3 m-0.5 text-slate-100 text-xl text-center rounded-md flex items-center hover:cursor-pointer',
        classesByTheme[theme]
      )}
      onClick={onClick}
    >
      {text || children}
    </Tag>
  );
};
