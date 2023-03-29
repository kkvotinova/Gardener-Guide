import isEmail from 'validator/lib/isEmail';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Modal from '@/components/Modal';

import { AUTH_TOKEN } from '@/resources/constants';

import clearAllCache from '@/utils/clearAllCache';
import LocalStorage from '@/utils/LocalStorage';

import {
  useLazyGetMeQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} from '@/redux/services/auth/auth';
import withStaticModal, { StaticModalWrappedComponent } from '@/modals/withStaticModal';
import { FormModalLoginData, FormModalLoginValues } from '@/modals/ModalLogin/ModalLoginTypes';
import { StyledTypography } from '@/modals/ModalLogin/ModalLoginStyled';
import FormElement from '@/form/FormElement';
import Form from '@/form/Form';

const ModalLogin: StaticModalWrappedComponent = (props) => {
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);

  const [getMe] = useLazyGetMeQuery();
  const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();
  const [registerUser, { isLoading: isRegisterLoading }] = useRegisterUserMutation();

  const handleSubmit = useCallback(
    async (data: FormModalLoginData) => {
      clearAllCache(dispatch);

      const response = isLogin ? await loginUser(data) : await registerUser(data);

      if ('data' in response) {
        LocalStorage.set(AUTH_TOKEN, response.data.token);
        getMe();
        props.onClose();
      }
    },
    [dispatch, getMe, isLogin, loginUser, props, registerUser],
  );

  const title = isLogin ? 'Авторизоваться на сайте' : 'Зарегистрироваться на сайте';
  const buttonText = isLogin ? 'Войти' : 'Зарегистрироваться';
  const questionText = isLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?';

  const isLoading = isLoginLoading || isRegisterLoading;

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

        {!isLogin && (
          <FormElement
            label='Регистрационное имя'
            component='input'
            rules={{ required: true, minLength: 4 }}
            name={FormModalLoginValues.USERNAME}
          />
        )}

        <FormElement
          type='password'
          label='Пароль'
          component='input'
          rules={{ required: true, minLength: 8 }}
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
