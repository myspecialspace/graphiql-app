import classNames from 'classnames';
import React, { FC } from 'react';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACTIVE = 'active',
}
interface LinkProps {
  onClick?: (event: React.MouseEvent) => void;
  children?: JSX.Element;
  theme?: ButtonTheme;
}

const classesByTheme = {
  [ButtonTheme.PRIMARY]:
    'bg-gradient-to-r from-purple-600 to-blue-500 text-center hover:from-pink-500 hover:to-yellow-500',
  [ButtonTheme.SECONDARY]:
    'text-slate-500 hover:bg-slate-100 active:bg-slate-200',
  [ButtonTheme.ACTIVE]:
    'text-slate-500 bg-slate-200 hover:bg-slate-100 active:bg-slate-200',
};

export const CustomButton: FC<LinkProps> = ({
  children,
  theme = ButtonTheme.PRIMARY,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        'p-3 m-0.5 text-slate-100 text-xl rounded-md flex items-center justify-center hover:cursor-pointer',
        classesByTheme[theme]
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
