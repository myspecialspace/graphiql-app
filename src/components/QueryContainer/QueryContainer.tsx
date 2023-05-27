import useDebounceState from '@/hooks/useDebounceState';
import { useState } from 'react';
import { QueryEditor } from '../QueryEditor/QueryEditor';
import QueryResponse from '../QueryResponse/QueryResponse';
import TabList from '../TabList/TabList';

const QueryContainer = () => {
  const [response, setResponse] = useState<string>('');
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tabValues, setTabValues] = useDebounceState<string[]>(['']);
  return (
    <>
      {tabValues && tabValues.length > 1 && (
        <TabList
          tabs={tabValues}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      )}
      <QueryEditor
        setResponse={setResponse}
        setTabValues={setTabValues}
        tabValues={tabValues}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <QueryResponse response={response} />
    </>
  );
};

export default QueryContainer;
