import { useParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { Stack, Typography } from '@mui/material';

import {
  StyledQuickInfo,
  StyledStack,
  StyledMainInfo,
  StyledNeighborsList,
} from '@/pages/PlantPage/PlantPageStyled';

import Swiper from '@/components/Swiper';
import PlantCard from '@/components/PlantCard';
import Loader from '@/components/Loader';
import InfoCard from '@/components/InfoCard';

import routes from '@/resources/routes';

import { PlantPageProp } from '@/types';
import NotFound from '@/routes/NotFound';
import { ApiPlantType } from '@/redux/services/plants/plants.type';
import { useGetPlantQuery } from '@/redux/services/plants/plants';

const PlantPage = ({ isHerbPage }: PlantPageProp) => {
  const { id } = useParams();

  const plantsType = isHerbPage ? ApiPlantType.HERB : ApiPlantType.VEGETABLE;

  const { data: plant, isLoading } = useGetPlantQuery({ type: plantsType, _id: String(id) });

  const configForQuickInfo = useMemo(() => {
    return plant?.quickInfo.map((info) => <InfoCard key={info.type} {...info} />);
  }, [plant?.quickInfo]);

  const getNeighborsList = useCallback(
    (key: 'companion' | 'combative') => {
      if (!plant?.neighbors[key].length) {
        return <Typography color='text.secondary'>Нет известных</Typography>;
      }

      return plant.neighbors[key].map((item) => {
        const linkToView = routes.vegetables.detailPath(item._id);
        return <PlantCard key={item._id} linkToView={linkToView} {...item} hasSmallSize />;
      });
    },
    [plant?.neighbors],
  );

  const configForFullInfo = useMemo(() => {
    return plant?.fullInfo.map(({ title, description }, i) => (
      <Stack key={i} direction='column' spacing={1}>
        <Typography variant='h5'>{title}</Typography>
        <Typography>{description}</Typography>
      </Stack>
    ));
  }, [plant?.fullInfo]);

  if (isLoading) {
    return <Loader color='primary' />;
  }

  if (!plant) {
    return <NotFound hideIcon />;
  }

  return (
    <>
      <StyledStack direction='row' spacing={10}>
        <Swiper altText={id} items={plant.gallery} />

        <StyledMainInfo direction='column' spacing={4}>
          <Typography variant='h4'>{plant.name}</Typography>
          <Typography>{plant.description}</Typography>
        </StyledMainInfo>
      </StyledStack>

      <Typography variant='h5'>Краткая информация</Typography>
      <StyledQuickInfo>{configForQuickInfo}</StyledQuickInfo>

      <StyledStack direction='row' spacing={20}>
        <Stack direction='column' spacing={4}>
          <Typography variant='h5'>Хорошие соседи 🤝</Typography>
          <Stack direction='row' spacing={4}>
            {getNeighborsList('companion')}
          </Stack>
        </Stack>

        <StyledNeighborsList direction='column' spacing={4}>
          <Typography variant='h5'>Плохие соседи 🤬</Typography>
          <Stack direction='row' spacing={4}>
            {getNeighborsList('combative')}
          </Stack>
        </StyledNeighborsList>
      </StyledStack>

      <Stack direction='column' spacing={4}>
        {configForFullInfo}
      </Stack>
    </>
  );
};

export default PlantPage;
