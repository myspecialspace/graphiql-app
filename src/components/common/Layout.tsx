import { FC } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

interface Props {
  children: JSX.Element;
}
export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="content grow">{children}</div>
      <Footer />
    </div>
  );
};
