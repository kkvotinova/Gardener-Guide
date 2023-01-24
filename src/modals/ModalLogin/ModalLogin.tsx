import isEmail from 'validator/lib/isEmail';
import { useCallback, useState } from 'react';
import { DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Modal from '@/components/Modal';

import withStaticModal, { StaticModalWrappedComponent } from '@/modals/withStaticModal';
import { FormModalLoginValues } from '@/modals/ModalLogin/ModalLoginTypes';
import { StyledTypography } from '@/modals/ModalLogin/ModalLoginStyled';
import FormElement from '@/form/FormElement';
import Form from '@/form/Form';

const ModalLogin: StaticModalWrappedComponent = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = useCallback(() => {}, []);

  const title = isLogin ? 'Авторизоваться на сайте' : 'Зарегистрироваться на сайте';
  const buttonText = isLogin ? 'Войти' : 'Зарегистрироваться';
  const questionText = isLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?';

  const isLoading = false;

  return (
    <Modal {...props} title={title}>
      <Form onSubmit={handleSubmit}>
        <FormElement
          type='email'
          label='Почта'
          component='input'
          rules={{ required: true, validate: { email: isEmail } }}
          name={FormModalLoginValues.EMAIL}
        />

        <FormElement
          type='password'
          label='Пароль'
          component='input'
          rules={{ required: true, minLength: 6 }}
          name={FormModalLoginValues.PASSWORD}
        />

        <StyledTypography onClick={() => setIsLogin((prevState) => !prevState)}>
          {questionText}
        </StyledTypography>

        <DialogActions>
          <LoadingButton variant='contained' type='submit' loading={isLoading}>
            {buttonText}
          </LoadingButton>
        </DialogActions>
      </Form>
    </Modal>
  );
};

export default withStaticModal(ModalLogin);
