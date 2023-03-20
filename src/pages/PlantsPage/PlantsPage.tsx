import { useMemo } from 'react';
import { Typography } from '@mui/material';

import { StyledList } from '@/pages/PlantsPage/PlantsPageStyled';

import Search from '@/components/Search';
import PlantCard from '@/components/PlantCard';
import Loader from '@/components/Loader';

import routes from '@/resources/routes';

import { PlantsPageProp } from '@/types';
import { ApiPlantType } from '@/redux/services/plants/plants.type';
import { useGetAllPlantsQuery } from '@/redux/services/plants/plants';

const PlantsPage = ({ isHerbPage }: PlantsPageProp) => {
  const plantsType = isHerbPage ? ApiPlantType.HERB : ApiPlantType.VEGETABLE;

  const { data: plants, isLoading } = useGetAllPlantsQuery(plantsType);

  const config = useMemo(() => {
    if (!plants) return [];

    return plants.map((plant) => {
      const linkToView = routes.vegetables.detailPath(plant._id);
      return <PlantCard key={plant._id} linkToView={linkToView} {...plant} />;
    });
  }, [plants]);

  const MainInfo = useMemo(() => {
    return (
      <>
        <Typography variant='h5' sx={{ mb: 7 }}>
          Сад и Огород
        </Typography>

        <Search queryName={plantsType} />
      </>
    );
  }, [plantsType]);

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