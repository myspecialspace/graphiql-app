import ReactCodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

interface QueryResponseProps {
  response: string;
}

const EMPTY_VALUE = [1, 2, 3, 4, 5].map(() => '\n').join('');

const QueryResponse = ({ response }: QueryResponseProps) => {
  return (
    <ReactCodeMirror
      value={response || EMPTY_VALUE}
      theme="light"
      placeholder={'Response here'}
      basicSetup={true}
      extensions={[json()]}
      className={'grow text-left max-w-[50%]'}
      readOnly
    />
  );
};

export default QueryResponse;
