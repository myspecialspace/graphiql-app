import { QueryEditor } from '@/components/QueryEditor/QueryEditor';
import QueryResponse from '@/components/QueryResponse/QueryResponse';
import { Layout } from '@/components/common/Layout';
import { FC, useState } from 'react';
import { SideBar } from '@/components/SideBar/SideBar';

export const MainPage: FC = () => {
  const [response, setResponse] = useState<string>('');

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row">
        <SideBar />
        <QueryEditor setResponse={setResponse} />
        <QueryResponse response={response} />
      </div>
    </Layout>
  );
};
