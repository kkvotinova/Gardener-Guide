import {
  FieldValues,
  UseFormWatch,
  RegisterOptions,
  UseFormSetValue,
  UseFormGetValues,
  UseFormClearErrors,
  UseFormReturn,
  SubmitHandler,
} from 'react-hook-form';
import { CSSProperties } from 'react';

export type FormValidationRules = RegisterOptions<FieldValues, string>;

interface FormCommonProps {
  title?: string;
  children?: any;
  className?: string;
  isLoading?: boolean;
  isRelative?: boolean;
  style?: CSSProperties;
  isFlexible?: boolean;
}

export interface FormForContextProps extends FormCommonProps {
  contextMethods: UseFormReturn<any>;
  onSubmit: SubmitHandler<any>;
}

export interface FormWithContextProps extends FormCommonProps {
  defaultValues?: any;
  onSubmit: SubmitHandler<any>;
}

export type FormProps = FormForContextProps | FormWithContextProps;

export interface FormValidationRulesProps {
  rules?: FormValidationRules;
}

export type PossibleConnectedChild<P> =
  | P
  | (P & {
      watch: UseFormWatch<FieldValues>;
      setValue: UseFormSetValue<FieldValues>;
      getValues: UseFormGetValues<FieldValues>;
      clearErrors: UseFormClearErrors<FieldValues>;
    });
