import { FC } from 'react';

interface Props {
  children: JSX.Element;
}
export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <header className="h-16 bg-slate-200 shrink-0 sticky top-0 left-0"></header>
      <div className="content grow">{children}</div>
      <footer className="h-28 bg-slate-500 shrink-0"></footer>
    </div>
  );
};
