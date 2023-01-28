import { Typography } from '@mui/material';

import Search from '@/components/Search';

const FlowersPage = () => {
  return (
    <>
      <Typography variant='h5' sx={{ mb: 7 }}>
        Цветы и Растения
      </Typography>

      <Search queryName='flowers' />
    </>
  );
};

export default FlowersPage;
