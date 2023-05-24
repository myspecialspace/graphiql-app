import ReactCodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import useDebounceState from '../../hooks/useDebounceState';
import { useState } from 'react';
import { ChevronDownIcon } from '../common/icons/ChevronDownIcon';
import { ChevronUpIcon } from '../common/icons/ChevronUpIcon';

interface QueryEditorProps {
  setResponse: (response: string) => void;
}

export const QueryEditor = ({ setResponse }: QueryEditorProps) => {
  const [stateValue, debounceSetState] = useDebounceState<string>();
  const [headersValue, setHeadersValue] = useState<string>(
    JSON.stringify({ 'Content-Type': 'application/json' })
  );
  const [variablesValue, setVariablesValue] = useState<string>(
    JSON.stringify({})
  );
  const [isOpen, setIsOpen] = useState(false);
  const [variables, setVariables] = useState(true);

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
    fetch('https://countries.trevorblades.com', {
      method: 'POST',
      headers: JSON.parse(headersValue),
      body: JSON.stringify({
        query: stateValue,
        variables: JSON.parse(variablesValue),
      }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(JSON.stringify(data, null, 2)));
  };

  return (
    <div className="text-left grow">
      <div>
        <ReactCodeMirror
          value={stateValue}
          theme="light"
          placeholder={'Type a Query'}
          basicSetup={true}
          extensions={[graphql()]}
          onChange={onChange}
          className={'grow'}
        />
        <button className="bg-black w-12 h-12" onClick={onClick}></button>
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
