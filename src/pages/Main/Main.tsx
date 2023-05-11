import { FC } from 'react';
import { Aside } from '@/components/Aside/Aside';
import { QueryEditor } from '@/components/QueryEditor/QueryEditor';
import { Layout } from '@/components/common/Layout';

export const MainPage: FC = () => {
  return (
    <Layout>
      <div className='flex'>
        <Aside />
        <QueryEditor />;
      </div>
    </Layout>
  )
};
