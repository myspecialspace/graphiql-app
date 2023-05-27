import { useState } from 'react';
import { QueryEditor } from '../QueryEditor/QueryEditor';
import QueryResponse from '../QueryResponse/QueryResponse';

const QueryContainer = () => {
  const [response, setResponse] = useState<string>('');

  return (
    <>
      <QueryEditor setResponse={setResponse} />
      <QueryResponse response={response} />
    </>
  );
};

export default QueryContainer;
