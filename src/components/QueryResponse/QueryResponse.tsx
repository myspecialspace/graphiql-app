import ReactCodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

interface QueryResponseProps {
  response: string;
}

const QueryResponse = ({ response }: QueryResponseProps) => {
  return (
    <ReactCodeMirror
      value={response}
      theme="dark"
      placeholder={'Type a Query'}
      basicSetup={true}
      extensions={[json()]} // graphql schema
      width={'500px'}
      readOnly
    />
  );
};

export default QueryResponse;
