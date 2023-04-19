import { useCallback, useEffect, useMemo, useState } from 'react';
import { Checkbox, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

import { SelectProps } from '@/components/Select/SelectTypes';
import { StyledOption, StyledSelect, StyledClearIcon } from '@/components/Select/SelectStyled';

import useControlSelectValue, { SelectValue } from '@/hooks/useControlSelectValue';

const isCheckedOption = (value: string, selectedItems: string[]) => {
  return selectedItems.findIndex((a) => a === value) !== -1;
};

const Select = <Multiple extends boolean = false>({
  width,
  minWidth,
  size,
  withCanAwait,
  value: propValue,
  options,
  initialValue,
  withAll,
  emptyOptionMessage,
  label,
  onSelect,
  disabled,
  fullWidth,
  isControlFromProp,
  className,
  maxWidth,
  filteredValues,
  isClearable = false,
  isMultiple = false,
  disableAutofill = false,
  isError = false,
  checkboxColors,
}: SelectProps<Multiple>) => {
  const emptyValue = isMultiple ? [] : '';

  const [value, setValue] = useState<string | string[]>(propValue || initialValue || emptyValue);
  useControlSelectValue(Boolean(disableAutofill), options, value, setValue, isMultiple);

  const optionsElements = useMemo(() => {
    const newOptions = options.filter((a) => {
      if (a.value === value || a.value === propValue) return true;

      return !(filteredValues || []).find((b) => b.value === a.value);
    });

    // console.log(value);
    // console.log(newOptions);

    if (withAll) {
      newOptions.unshift({ label: 'Все', value: '' });
    }

    return newOptions.map((item, i) => (
      <StyledOption key={item.value} value={item.value}>
        {isMultiple && (
          <Checkbox
            checked={isCheckedOption(item.value, (propValue || value) as SelectValue<true>)}
            sx={
              checkboxColors
                ? {
                    color: checkboxColors[i],
                    '&.Mui-checked': {
                      color: checkboxColors[i],
                    },
                  }
                : undefined
            }
          />
        )}
        {item.label}
      </StyledOption>
    ));
  }, [checkboxColors, filteredValues, isMultiple, options, propValue, value, withAll]);

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const value = event.target.value as string;

      setValue(value);

      if (onSelect) onSelect(value as SelectValue<Multiple>);
    },
    [onSelect],
  );

  const memoizedValue = useMemo(() => {
    if (propValue && options.length) {
      if (isMultiple) {
        const foundValue = options.find((a) => propValue.includes(a.value));
        return foundValue ? propValue : [];
      }

      const foundValue = options.find((a) => a.value === propValue);
      return foundValue ? propValue : '';
    }

    return value;
  }, [isMultiple, options, propValue, value]);

  const onClear = useCallback(() => {
    const value = isMultiple ? [''] : '';
    if (onSelect) onSelect(value as SelectValue<Multiple>);
    setValue(value as SelectValue<Multiple>);
  }, [isMultiple, onSelect]);

  useEffect(() => {
    if (!memoizedValue && propValue && !withCanAwait) {
      const value = isMultiple ? [''] : '';
      if (onSelect) onSelect(value as SelectValue<Multiple>);
    }

    if (!propValue) {
      if (isControlFromProp) {
        setValue('');
      } else {
        if (memoizedValue && onSelect) {
          onSelect(memoizedValue as SelectValue<Multiple>);
        }
      }
    }
  }, [isControlFromProp, isMultiple, memoizedValue, onSelect, propValue, withCanAwait]);

  const isClearableProperty = useMemo(() => {
    if (disableAutofill) {
      return isClearable;
    }

    // NOTE
    // Условие optionsElements.length > 1,
    // т.к. при автозаполнении будет рекурсия выбора
    return isClearable && optionsElements.length > 1;
  }, [disableAutofill, isClearable, optionsElements.length]);

  const renderValue = useCallback(
    (value: Array<string>) => {
      return value
        .map((a) => {
          const option = options.find((b) => b.value === a);

          if (!option?.label) return a;

          return option.label;
        })
        .join(', ');
    },
    [options],
  );

  return (
    <FormControl
      style={{ maxWidth, width, minWidth }}
      fullWidth={fullWidth}
      className={className}
      size={size}
    >
      {label && (
        <InputLabel id={label} error={isError}>
          {label}
        </InputLabel>
      )}

      <StyledSelect
        id={label}
        label={label}
        error={isError}
        multiple={isMultiple}
        value={memoizedValue}
        disabled={disabled}
        // @ts-ignore
        onChange={handleChange}
        renderValue={isMultiple ? (value) => renderValue(value as Array<string>) : undefined}
      >
        {!optionsElements.length && (
          <StyledOption disabled value={''}>
            {emptyOptionMessage || 'Список опций пуст'}
          </StyledOption>
        )}

        {optionsElements}
      </StyledSelect>

      {isClearableProperty && memoizedValue && (
        <StyledClearIcon onClick={onClear} fontSize='small' />
      )}
    </FormControl>
  );
};

export default Select;
