import { useMemo } from 'react';

import FormElementInput from '@/form/FormElementInput';
import { FormElementProps } from '@/form/FormElement/FormElementTypes';
import { StyledFormElement } from '@/form/FormElement/FormElementStyled';

const isMarkedRequiredFields = false;

const FormElement = ({ name, rules, className, ...restProps }: FormElementProps) => {
  if (isMarkedRequiredFields) {
    if (rules?.required && 'label' in restProps && restProps.label) {
      restProps.label = restProps.label + '*';
    }
  }

  const Component = useMemo(() => {
    return <FormElementInput name={name} rules={rules} {...restProps} />;
  }, [name, restProps, rules]);

  return <StyledFormElement className={className}>{Component}</StyledFormElement>;
};

export default FormElement;
