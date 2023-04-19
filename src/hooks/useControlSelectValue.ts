import { useEffect } from 'react';

import { SelectItem } from '@/types/form';

// TODO: Доработать логику для multiple
export type SelectValue<Multiple extends boolean = false> = Multiple extends true
  ? string[]
  : string;

interface HookChangeCallback<Multiple extends boolean> {
  (newValue: SelectValue<Multiple>): void;
}

const useControlSelectValue = <Multiple extends boolean>(
  isDisabled: boolean,
  options: SelectItem<any>[],
  currentValue: SelectValue<Multiple>,
  setValue: HookChangeCallback<Multiple>,
  isMultiple?: boolean,
  withAutoSelect?: boolean,
) => {
  useEffect(() => {
    if (isDisabled) return;

    if (isMultiple) return;
    if (!Array.isArray(options)) return;

    if (options.length === 0) {
      setValue('' as SelectValue<Multiple>);
      return;
    }

    if (currentValue) {
      const foundValue = isMultiple
        ? (currentValue as SelectValue<true>).map((a) =>
            options.find((option) => option.value === a),
          )
        : options.find((a) => a.value === currentValue);
      if (foundValue) return;
    }

    const withAutoSelectValue = withAutoSelect || options.length === 1;
    const newValue = withAutoSelectValue ? options[0].value : '';

    if (newValue === currentValue) return;

    setValue(newValue as SelectValue<Multiple>);
  }, [currentValue, options, setValue, isMultiple, withAutoSelect, isDisabled]);

  return null;
};

export default useControlSelectValue;
