import ReactCodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

interface QueryResponseProps {
  response: string;
}

const QueryResponse = ({ response }: QueryResponseProps) => {
  return (
    <ReactCodeMirror
      value={response}
      height="100%"
      theme="light"
      placeholder={'Response here'}
      basicSetup={true}
      extensions={[json()]}
      className={'grow text-left w-full sm:max-w-[50%] max-h-[81vh]'}
      readOnly
    />
  );
};

export default QueryResponse;
