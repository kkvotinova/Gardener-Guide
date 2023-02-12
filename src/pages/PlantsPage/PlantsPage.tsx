import { useMemo } from 'react';
import { Typography } from '@mui/material';

import { StyledList } from '@/pages/PlantsPage/PlantsPageStyled';

import Search from '@/components/Search';
import PlantCard from '@/components/PlantCard';
import Loader from '@/components/Loader';

import routes from '@/resources/routes';

import { PlantsPageProp } from '@/types';
import { VEGETABLES } from '@/api/vegetables';

const PlantsPage = ({ isHerbPage }: PlantsPageProp) => {
  const config = useMemo(() => {
    if (isHerbPage) return [];

    return VEGETABLES.map((plant) => {
      const linkToView = routes.vegetables.detailPath(plant.id);
      return <PlantCard key={plant.id} linkToView={linkToView} {...plant} />;
    });
  }, [isHerbPage]);

  const isLoading = false;

  const MainInfo = useMemo(() => {
    const queryName = isHerbPage ? 'herb' : 'vegetable';
    return (
      <>
        <Typography variant='h5' sx={{ mb: 7 }}>
          Сад и Огород
        </Typography>

        <Search queryName={queryName} />
      </>
    );
  }, [isHerbPage]);

  if (isLoading) {
    return (
      <>
        {MainInfo}
        <Loader color='primary' />
      </>
    );
  }

  if (!config.length) {
    return (
      <>
        {MainInfo}
        <Typography textAlign='center' fontSize={20} color='text.secondary' mt={30}>
          По вашему запросу ничего не найдено
        </Typography>
      </>
    );
  }

  return (
    <>
      {MainInfo}
      <StyledList>{config}</StyledList>
    </>
  );
};

export default PlantsPage;
