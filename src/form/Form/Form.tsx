import { useForm, FormProvider } from 'react-hook-form';

import Loader from '@/components/Loader';

import { FormWithContextProps, FormForContextProps, FormProps } from '@/form/Form/FormTypes';
import { StyledForm } from '@/form/Form/FormStyled';

const FormWithContext = ({
  onSubmit,
  children,
  isFlexible,
  defaultValues = {},
  ...restProps
}: FormWithContextProps) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <StyledForm {...restProps} $isFlexible={isFlexible} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </StyledForm>
    </FormProvider>
  );
};

const FormForContext = ({
  onSubmit,
  children,
  contextMethods,
  isFlexible,
  ...restProps
}: FormForContextProps) => {
  const methods = contextMethods;

  return (
    <FormProvider {...methods}>
      <StyledForm {...restProps} $isFlexible={isFlexible} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </StyledForm>
    </FormProvider>
  );
};

const Form = ({ children, isLoading, ...restProps }: FormProps) => {
  const markup = (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );

  if ('contextMethods' in restProps && restProps.contextMethods) {
    return <FormForContext {...restProps}>{markup}</FormForContext>;
  }

  return <FormWithContext {...restProps}>{markup}</FormWithContext>;
};

export default Form;
