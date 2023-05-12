import { DebouncedFunc } from 'lodash';
import debounce from 'lodash.debounce';
import { useState } from 'react';

const useDebounceState = <T>(
  value?: T,
  wait = 500
): [T | undefined, DebouncedFunc<(value: T) => void>] => {
  const [stateValue, setStateValue] = useState(value);

  const debounceSetState = debounce((value: T) => {
    setStateValue(value);
  }, wait);

  return [stateValue, debounceSetState];
};

export default useDebounceState;
