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
    console.log(JSON.stringify(stateValue));
  };

  const onHeadersChange = (value: string) => {
    setHeadersValue(value);
    console.log(JSON.stringify(headersValue));
  };

  const onVariablesChange = (value: string) => {
    setVariablesValue(value);
    console.log(JSON.stringify(variablesValue));
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
    <div className="text-left">
      <div>
        <ReactCodeMirror
          value={stateValue}
          theme="light"
          placeholder={'Type a Query'}
          basicSetup={true}
          extensions={[graphql()]} // graphql schema
          onChange={onChange}
          width={'500px'}
        />
        <button className="bg-black w-12 h-12" onClick={onClick}></button>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-5 p-5 text-gray-700">
          <button onClick={() => setVariables(true)}>Variables</button>
          <button onClick={() => setVariables(false)}>Headers</button>
        </div>
        <button onClick={handleClick}>
          {!isOpen ? (
            <ChevronDownIcon />
          ) : (
            <ChevronUpIcon />
          )}
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
                width={'500px'}
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
                width={'500px'}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
