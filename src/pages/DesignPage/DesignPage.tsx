import { Typography } from '@mui/material';

import { StyledImage } from '@/pages/DesignPage/DesignPageStyled';

import ImageLego from '@/images/ImageLego.gif';

const DesignPage = () => {
  return (
    <>
      <Typography variant='h5' sx={{ mb: 7 }}>
        Дачный дизайн
      </Typography>

      <Typography variant='h6' color='GrayText' textAlign='center' sx={{ mb: 1 }}>
        Страница находится в разработке
      </Typography>

      <StyledImage src={ImageLego} alt='lego' />
    </>
  );
};

export default DesignPage;
