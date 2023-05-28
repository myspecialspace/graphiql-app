import ReactCodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { useState } from 'react';
import { ChevronDownIcon } from '../common/icons/ChevronDownIcon';
import { ChevronUpIcon } from '../common/icons/ChevronUpIcon';
import { ButtonTheme, CustomButton } from '../common/CustomButton';
import { PlayIcon } from '../common/icons/PlayIcon';
import { CopyIcon } from '../common/icons/CopyIcon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { api } from '@/api';
import PlusIcon from '../common/icons/PlusIcon';
import { useResponsive } from '@/hooks/responsive';
import { useAppSelector } from '@/store/store';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
    <div className="text-left border shadow-2xl mx-3 mb-10 rounded-lg shadow-gray-500/50 grow sm:max-w-[50%]">
      <div className="flex p-3">
        <div
          className="flex overflow-auto w-full sm:h-full"
          style={{ height: isMobile ? '' : 'calc(100vh - 235px)' }}
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
          <CustomButton onClick={onClick}>
            <PlayIcon />
          </CustomButton>
          <CopyToClipboard text={tabValues ? tabValues[currentTab] : ''}>
            <CustomButton theme={ButtonTheme.SECONDARY}>
              <CopyIcon />
            </CustomButton>
          </CopyToClipboard>
          <CustomButton onClick={onAddNewTab} theme={ButtonTheme.SECONDARY}>
            <PlusIcon />
          </CustomButton>
        </div>
      </div>
      <div className="h-px bg-gray-200"></div>
      <div className="flex justify-between p-3">
        <div className="flex gap-x-5 p-3 text-gray-700">
          <button onClick={() => setVariables(true)}>{t('variables')}</button>
          <button onClick={() => setVariables(false)}>{t('headers')}</button>
        </div>
        <button onClick={handleClick}>
          {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="p-3">
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
