import { QueryEditor } from '@/components/QueryEditor/QueryEditor';
import QueryResponse from '@/components/QueryResponse/QueryResponse';
import { Layout } from '@/components/common/Layout';
import { FC, useState } from 'react';
import { SideBar } from '@/components/SideBar/SideBar';
import { ApiSelector } from '@/components/ApiSelector/ApiSelector';

export const MainPage: FC = () => {
  const [response, setResponse] = useState<string>('');

  return (
    <Layout>
      <div className="flex flex-col">
        <div>
          <ApiSelector />
        </div>
        <div className="flex flex-col sm:flex-row">
          <SideBar />
          <QueryEditor setResponse={setResponse} />
          <QueryResponse response={response} />
        </div>
      </div>
    </Layout>
  );
};
