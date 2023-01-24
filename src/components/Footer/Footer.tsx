import { Typography } from '@mui/material';

import { StyledFooter } from '@/components/Footer/FooterStyled';

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant='body2' color='white'>
        ® Помощник Садовода 2022 — 2023
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
