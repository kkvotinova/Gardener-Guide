import { FieldError, FieldValues, RegisterOptions, ValidationRule } from 'react-hook-form';
import { useCallback } from 'react';

import Alerter from '@/utils/Alerter/Alerter';

export type RulesVariants = RegisterOptions<FieldValues, string> & {
  maxNumber?: ValidationRule<number | string>;
};

const useFormValidation = (rules?: RulesVariants) => {
  const getDescriptionValue = useCallback(
    (error: FieldError) => {
      if (error.message) return error.message;

      switch (error.type) {
        case 'email':
          return 'Неверный адрес электронной почты';

        case 'validate':
          return 'Неверное значение';

        case 'required':
          return 'Обязательное поле';

        case 'minLength':
          return `Должно быть не менее ${rules?.minLength} символов`;

        case 'maxLength':
          return `Должно быть не более ${rules?.maxLength} символов`;

        default:
          return 'Неверное значение';
      }
    },
    [rules?.maxLength, rules?.minLength],
  );

  const fieldValidate = useCallback(
    (error?: FieldError) => {
      const result = {
        isError: false,
        description: '',
      };

      if (error) {
        try {
          result.isError = Boolean(error);
          result.description = getDescriptionValue(error);
        } catch (error) {
          Alerter.logError('useValidation hook');
        }
      }

      return result;
    },
    [getDescriptionValue],
  );

  return { fieldValidate };
};

export default useFormValidation;
