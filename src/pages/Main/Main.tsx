import { Layout } from '@/components/common/Layout';
import { FC, useEffect, useState } from 'react';
import { SideBar } from '@/components/SideBar/SideBar';
import { ApiSelector } from '@/components/ApiSelector/ApiSelector';
import TabList from '@/components/TabList/TabList';
import { QueryEditor } from '@/components/QueryEditor/QueryEditor';
import QueryResponse from '@/components/QueryResponse/QueryResponse';

export const MainPage: FC = () => {
  const [response, setResponse] = useState<string>('');
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tabValues, setTabValues] = useState<string[]>(['']);

  useEffect(() => {
    const currentTab = localStorage.getItem('CURRENT_TAB');
    const tabValues = localStorage.getItem('TAB_VALUES');
    if (currentTab) {
      setCurrentTab(JSON.parse(currentTab));
    }
    if (tabValues) {
      setTabValues(JSON.parse(tabValues));
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-col">
        <div>
          <ApiSelector />
        </div>
        <div className="flex flex-col sm:flex-row">
          <SideBar />
          {tabValues && tabValues.length > 1 && (
            <TabList
              tabValues={tabValues}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              setTabValues={setTabValues}
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
        </div>
      </div>
    </Layout>
  );
};
