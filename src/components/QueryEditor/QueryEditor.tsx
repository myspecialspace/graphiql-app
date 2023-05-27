import ReactCodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import useDebounceState from '../../hooks/useDebounceState';
import { useState } from 'react';
import { ChevronDownIcon } from '../common/icons/ChevronDownIcon';
import { ChevronUpIcon } from '../common/icons/ChevronUpIcon';
import { ButtonTheme, HeaderButton } from '../common/HeaderButton';
import { PlayIcon } from '../common/icons/PlayIcon';
import { CopyIcon } from '../common/icons/CopyIcon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { api } from '@/api';
import { useResponsive } from '@/hooks/responsive';
import { useAppSelector } from '@/store/store';
import { useTranslation } from 'react-i18next';

interface QueryEditorProps {
  setResponse: (response: string) => void;
}

export const QueryEditor = ({ setResponse }: QueryEditorProps) => {
  const { t } = useTranslation();
  const url = useAppSelector((state) => state.main.url);
  const [stateValue, debounceSetState] = useDebounceState<string>(
    [1, 2, 3, 4, 5].map(() => '\n').join('')
  );
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
    debounceSetState(value);
  };

  const onHeadersChange = (value: string) => {
    setHeadersValue(value);
  };

  const onVariablesChange = (value: string) => {
    setVariablesValue(value);
  };

  const onClick = () => {
    setResponse('');

    api(url, {
      method: 'POST',
      headers: JSON.parse(headersValue),
      data: JSON.stringify({
        query: stateValue,
        variables: JSON.parse(variablesValue),
      }),
    })
      .then((res) => res.data)
      .then((data) => setResponse(JSON.stringify(data, null, 2)))
      .catch((error) => {
        setResponse(JSON.stringify(error.response.data, null, 2));
      });
  };

  return (
    <div className="text-left grow sm:max-w-[50%]">
      <div className="flex">
        <div
          className="flex overflow-auto h-full w-full"
          style={{ height: isMobile ? '' : 'calc(100vh - 236px)' }}
        >
          <ReactCodeMirror
            value={stateValue}
            theme="light"
            placeholder={'Type a Query'}
            basicSetup={true}
            extensions={[graphql()]}
            onChange={onChange}
            className={'grow'}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col sticky sm:static top-16 pt-1 sm:pt-0">
            <HeaderButton onClick={onClick} text="">
              <PlayIcon />
            </HeaderButton>

            <CopyToClipboard text={stateValue || ''}>
              <HeaderButton text="" theme={ButtonTheme.SECONDARY}>
                <CopyIcon />
              </HeaderButton>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-5 p-5 text-gray-700">
          <button onClick={() => setVariables(true)}>{t('variables')}</button>
          <button onClick={() => setVariables(false)}>{t('headers')}</button>
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
