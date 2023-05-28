import ReactCodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { useState } from 'react';
import { ChevronDownIcon } from '../common/icons/ChevronDownIcon';
import { ChevronUpIcon } from '../common/icons/ChevronUpIcon';
import { ButtonTheme, HeaderButton } from '../common/HeaderButton';
import { PlayIcon } from '../common/icons/PlayIcon';
import { CopyIcon } from '../common/icons/CopyIcon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { api } from '@/api';
import PlusIcon from '../common/icons/PlusIcon';
import { useResponsive } from '@/hooks/responsive';
import { useAppSelector } from '@/store/store';

interface QueryEditorProps {
  tabValues: string[] | undefined;
  currentTab: number;
  setResponse: (response: string) => void;
  setCurrentTab: (tab: number) => void;
  setTabValues: (tabValues: string[]) => void;
}

export const QueryEditor = ({
  setResponse,
  setTabValues,
  setCurrentTab,
  tabValues,
  currentTab,
}: QueryEditorProps) => {
  const url = useAppSelector((state) => state.main.url);
  const [headersValue, setHeadersValue] = useState<string>(
    JSON.stringify({ 'Content-Type': 'application/json' })
  );
  const [variablesValue, setVariablesValue] = useState<string>(
    JSON.stringify({})
  );
  const [isOpen, setIsOpen] = useState(false);
  const [variables, setVariables] = useState(true);
  const { isMobile } = useResponsive();

  const handleClick = () => {
    setIsOpen(!isOpen ? true : false);
  };

  const onChange = (value: string) => {
    if (tabValues) {
      const updatedValues = tabValues.map((tabValue, index) => {
        if (index === currentTab) {
          return value;
        }
        return tabValue;
      });
      setTabValues(updatedValues);
      localStorage.setItem('TAB_VALUES', JSON.stringify(updatedValues));
    }
  };

  const onHeadersChange = (value: string) => {
    setHeadersValue(value);
  };

  const onVariablesChange = (value: string) => {
    setVariablesValue(value);
  };

  const onClick = () => {
    setResponse('');
    if (tabValues) {
      api(url, {
        method: 'POST',
        headers: JSON.parse(headersValue),
        data: JSON.stringify({
          query: tabValues[currentTab],
          variables: JSON.parse(variablesValue),
        }),
      })
        .then((res) => res.data)
        .then((data) => setResponse(JSON.stringify(data, null, 2)))
        .catch((error) => {
          setResponse(JSON.stringify(error.response.data, null, 2));
        });
    }
  };

  const onAddNewTab = () => {
    if (tabValues) {
      const newTabValues = [...tabValues, ''];
      setTabValues(newTabValues);
      localStorage.setItem('TAB_VALUES', JSON.stringify(newTabValues));
    }
    setCurrentTab(currentTab + 1);
    localStorage.setItem('CURRENT_TAB', JSON.stringify(currentTab + 1));
  };

  return (
    <div className="text-left grow sm:max-w-[50%]">
      <div className="flex">
        <div
          className="flex overflow-auto w-full sm:h-full"
          style={{ height: isMobile ? '' : 'calc(100vh)' }}
        >
          <ReactCodeMirror
            value={tabValues ? tabValues[currentTab] : ''}
            theme="light"
            height="100%"
            placeholder={'Type a Query'}
            basicSetup={true}
            extensions={[graphql()]}
            onChange={onChange}
            className={'grow'}
          />
        </div>
        <div className="flex flex-col">
          <HeaderButton onClick={onClick} text="">
            <PlayIcon />
          </HeaderButton>

          <CopyToClipboard text={tabValues ? tabValues[currentTab] : ''}>
            <HeaderButton text="" theme={ButtonTheme.SECONDARY}>
              <CopyIcon />
            </HeaderButton>
          </CopyToClipboard>

          <HeaderButton
            onClick={onAddNewTab}
            text=""
            theme={ButtonTheme.SECONDARY}
          >
            <PlusIcon />
          </HeaderButton>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-5 p-5 text-gray-700">
          <button onClick={() => setVariables(true)}>Variables</button>
          <button onClick={() => setVariables(false)}>Headers</button>
        </div>
        <button onClick={handleClick}>
          {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </button>
      </div>
      {isOpen && (
        <div>
          {variables ? (
            <div>
              <ReactCodeMirror
                value={variablesValue}
                theme="light"
                placeholder={' '}
                basicSetup={true}
                extensions={[graphql()]}
                onChange={onVariablesChange}
                className={'grow'}
              />
            </div>
          ) : (
            <div>
              <ReactCodeMirror
                value={headersValue}
                theme="light"
                placeholder={' '}
                basicSetup={true}
                extensions={[graphql()]}
                onChange={onHeadersChange}
                className={'grow'}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
