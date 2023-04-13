import { useNavigate } from 'react-router-dom';
import Image from 'mui-image';
import { Button, Stack, Typography } from '@mui/material';

import Slider from '@/pages/MainPage/components/Slider';
import { content } from '@/pages/MainPage/api';
import { StyledMainInfo, StyledDescription } from '@/pages/MainPage/MainPageStyled';

import ImagePlantLeaf from '@/images/ImagePlantLeaf.png';

import routes from '@/resources/routes';

import useAuthorization from '@/hooks/useAuthorization';

import ModalLogin from '@/modals/ModalLogin/ModalLogin';

const MainPage = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useAuthorization();

  const onLogin = (defaultIsLogout: boolean) => () => {
    ModalLogin.show({ defaultIsLogout });
  };

  const onCreateGarden = () => {
    navigate(routes.profile.path);
  };

  return (
    <>
      <StyledMainInfo>
        <Slider content={content} />
        <StyledDescription>
          <div>
            <Typography variant='h5' marginBottom={2}>
              Помощник садовода
            </Typography>
            <Typography lineHeight={1.6}>
              Создайте свой идеальный сад с помощью нашего сайта! Здесь вы найдете справочник по
              растениям, уроки садоводства, календарь садовых работ, новости и планировщик сада.
            </Typography>
          </div>

          <Image src={ImagePlantLeaf} duration={600} width={80} height={80} />

          {isAuthorized ? (
            <Button fullWidth variant='contained' onClick={onCreateGarden}>
              Создать сад
            </Button>
          ) : (
            <Stack direction='column' spacing={2.5}>
              <Button fullWidth variant='outlined' onClick={onLogin(false)}>
                Войти
              </Button>
              <Button fullWidth variant='contained' onClick={onLogin(true)}>
                Зарегистрироваться
              </Button>
            </Stack>
          )}
        </StyledDescription>
      </StyledMainInfo>
    </>
  );
};

export default MainPage;
