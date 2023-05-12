import ReactCodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import useDebounceState from '../../hooks/useDebounceState';

interface QueryEditorProps {
  setResponse: (response: string) => void;
}

export const QueryEditor = ({ setResponse }: QueryEditorProps) => {
  const [stateValue, debounceSetState] = useDebounceState<string>();

  const onChange = (value: string) => {
    debounceSetState(value);
    console.log(JSON.stringify(stateValue));
  };

  const onClick = () => {
    fetch('https://countries.trevorblades.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: stateValue,
      }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(JSON.stringify(data, null, 2)));
  };

  return (
    <>
      <ReactCodeMirror
        value={stateValue}
        theme="dark"
        placeholder={'Type a Query'}
        basicSetup={true}
        extensions={[graphql()]} // graphql schema
        onChange={onChange}
        width={'500px'}
      />
      <button className="bg-black w-12 h-12" onClick={onClick}></button>
    </>
  );
};
