import { Layout } from '@/components/common/Layout';
import { FC } from 'react';
import { SideBar } from '@/components/SideBar/SideBar';
import QueryContainer from '@/components/QueryContainer/QueryContainer';
import { ApiSelector } from '@/components/ApiSelector/ApiSelector';

export const MainPage: FC = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div>
          <ApiSelector />
        </div>
        <div className="flex flex-col sm:flex-row">
          <SideBar />
          <QueryContainer />
        </div>
      </div>
    </Layout>
  );
};
