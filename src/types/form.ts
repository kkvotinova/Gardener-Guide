import { CSSProperties, ReactElement, ReactNode } from 'react';

import { RulesVariants } from '@/hooks/useFormValidation';

interface FormElementCommon {
  name: string;
  style?: CSSProperties;
  label?: string;

  size?: 'medium' | 'small';

  disabled?: boolean;
  maxLength?: number;
  rules?: RulesVariants;

  className?: string;
  children?: ReactNode | ReactNode[];

  endIcon?: ReactElement;
}

interface FormElementInnerCommon {
  label: string;
}

interface FormElementInner extends Omit<FormElementCommon, 'label'>, FormElementInnerCommon {}

export interface FormElementInputProps extends FormElementInner {
  component: 'input';
  description?: string;
  type?: string;

  mask?: string;
  maskPlaceholder?: string;

  isNumber?: boolean;
  isDecimalNumber?: boolean;

  isPassword?: boolean;
  isPhoneInput?: boolean;

  hideHelperText?: boolean;
}
