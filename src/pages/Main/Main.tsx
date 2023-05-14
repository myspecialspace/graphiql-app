import { FC } from 'react';
import { QueryEditor } from '@/components/QueryEditor/QueryEditor';
import { Layout } from '@/components/common/Layout';
import { SideBar } from '@/components/SideBar/SideBar';

export const MainPage: FC = () => {
  return (
    <Layout>
      <div className='flex'>
        <SideBar />
        <QueryEditor />;
      </div>
    </Layout>
  )
};
