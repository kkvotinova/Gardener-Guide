import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import { ChangeEvent, FocusEvent, useCallback, useMemo } from 'react';
import { TextField } from '@mui/material';

import useFormValidation from '@/hooks/useFormValidation';

import { FormElementInputProps } from '@/types/form';

const FormElementInput = ({
  size,
  mask,
  name,
  label,
  type,
  rules,
  disabled,
  isNumber,
  isDecimalNumber,
  maxLength,
  maskPlaceholder,
  hideHelperText = false,
  description: propsDescription,
}: FormElementInputProps) => {
  const { control } = useFormContext();
  const { fieldValidate } = useFormValidation(rules);

  const numberProps = useMemo(() => {
    if (isNumber) {
      return {
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.replace(/[^\d]/gm, '');
        },
      };
    }

    if (isDecimalNumber) {
      return {
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.replace(/^\.|[^\d+\\.]/gm, '');

          e.target.value = e.target.value.replace(/\.{2,}/gm, '.');
          e.target.value = e.target.value.replace(/(\..*)\./gm, '$1');
          e.target.value = e.target.value.replace(/(\d+\.\d{0,2}).*/gm, '$1');
        },
      };
    }

    return {};
  }, [isNumber, isDecimalNumber]);

  const render: ControllerProps['render'] = useCallback(
    ({ field: { ref, ...field }, fieldState }) => {
      const value = field.value || '';
      const { isError, description: validateDescription } = fieldValidate(fieldState.error);

      const description = !hideHelperText ? validateDescription || propsDescription : undefined;

      const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
        const cleanedValue = event.target.value.trim();
        field.onChange(cleanedValue);
        field.onBlur();
      };

      return (
        <TextField
          {...field}
          fullWidth
          type={type}
          size={size}
          value={value}
          label={label}
          inputRef={ref}
          variant='outlined'
          disabled={disabled}
          onBlur={handleOnBlur}
          inputProps={{ maxLength, ...numberProps }}
          error={isError}
          helperText={description}
        />
      );
    },
    [
      disabled,
      fieldValidate,
      hideHelperText,
      label,
      maxLength,
      numberProps,
      propsDescription,
      size,
      type,
    ],
  );

  return <Controller name={name} rules={rules} control={control} render={render} />;
};

export default FormElementInput;
