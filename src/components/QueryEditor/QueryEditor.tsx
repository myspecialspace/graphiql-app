import ReactCodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import useDebounceState from '../../hooks/useDebounceState';

export const QueryEditor = () => {
  const [stateValue, debounceSetState] = useDebounceState<string>();

  const onChange = (value: string) => {
    debounceSetState(value);
  };

  return (
    <ReactCodeMirror
      value={stateValue}
      theme="dark"
      placeholder={'Type a Query'}
      basicSetup={true}
      extensions={[graphql()]} // graphql schema
      onChange={onChange}
    />
  );
};
