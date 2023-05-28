import ReactCodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useTranslation } from 'react-i18next';

interface QueryResponseProps {
  response: string;
}

const QueryResponse = ({ response }: QueryResponseProps) => {
  const { t } = useTranslation();
  return (
    <ReactCodeMirror
      value={response}
      height="100%"
      theme="light"
      placeholder={t('responseHere')!}
      basicSetup={true}
      extensions={[json()]}
      className={'grow text-left w-full sm:max-w-[50%] max-h-[81vh]'}
      readOnly
    />
  );
};

export default QueryResponse;
