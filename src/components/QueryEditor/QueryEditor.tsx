import ReactCodeMirror from '@uiw/react-codemirror';
import debounce from 'lodash.debounce';
import { graphql } from 'cm6-graphql';
import { useState } from 'react';

export const QueryEditor = () => {
  const [value, setValue] = useState<string>();

  const debouceSetValue = debounce((value: string) => {
    setValue(value);
  }, 500);

  const onChange = (value: string) => {
    debouceSetValue(value);
  };

  return (
    <ReactCodeMirror
      value={value}
      theme="dark"
      placeholder={'Type a Query'}
      basicSetup={true}
      extensions={[graphql()]} // graphql schema
      onChange={onChange}
    />
  );
};
