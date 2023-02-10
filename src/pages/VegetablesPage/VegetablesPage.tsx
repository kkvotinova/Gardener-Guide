import { useMemo } from 'react';
import { Typography } from '@mui/material';

import { StyledList } from '@/pages/VegetablesPage/VegetablesPageStyled';

import Search from '@/components/Search';
import PlantCard from '@/components/PlantCard';
import Loader from '@/components/Loader';

import routes from '@/resources/routes';

import { VEGETABLES } from '@/api/vegetables';

const VegetablesPage = () => {
  const config = useMemo(() => {
    return VEGETABLES.map((plant) => {
      const linkToView = routes.vegetables.detailPath(plant.id);
      return <PlantCard key={plant.id} linkToView={linkToView} {...plant} />;
    });
  }, []);

  const isLoading = false;

  return (
    <>
      <Typography variant='h5' sx={{ mb: 7 }}>
        Сад и Огород
      </Typography>

      <Search queryName='vegetable' />

      {isLoading ? <Loader color='primary' /> : <StyledList>{config}</StyledList>}
    </>
  );
};

export default VegetablesPage;
