import { ReactNode } from 'react';

import { SelectValue } from '@/hooks/useControlSelectValue';

import { SelectItem } from '@/types/form';

export interface SelectProps<Multiple extends boolean = false> {
  maxWidth?: number | 'auto';
  minWidth?: number | string;
  width?: number | string;

  withAll?: boolean;
  initialValue?: SelectValue<Multiple>;

  value?: SelectValue<Multiple>;
  label?: string;
  emptyOptionMessage?: string;

  options: SelectItem<string | ReactNode>[];
  filteredValues?: { value?: string }[];
  onSelect?: (value: SelectValue<Multiple>) => void;

  withCanAwait?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  isError?: boolean;

  className?: string;
  size?: 'small' | 'medium';

  isClearable?: boolean;
  isMultiple?: boolean;
  disableAutofill?: boolean;

  isControlFromProp?: boolean;
  checkboxColors?: string[];
}
