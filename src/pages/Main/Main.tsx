import { QueryEditor } from '@/components/QueryEditor/QueryEditor';
import QueryResponse from '@/components/QueryResponse/QueryResponse';
import { FC, useState } from 'react';

export const MainPage: FC = () => {
  const [response, setResponse] = useState<string>('');

  return (
    <div className="flex text-left">
      <QueryEditor setResponse={setResponse} />
      <QueryResponse response={response} />
    </div>
  );
};
