import { Typography } from '@mui/material';

import { StyledFooter } from '@/components/Footer/FooterStyled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Typography variant='body2' color='white'>
        ® Помощник Садовода 2022 — {currentYear}
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
