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
import InfoCard from '@/components/InfoCard';

import routes from '@/resources/routes';

import { PlantPageProp } from '@/types';
import NotFound from '@/routes/NotFound';
import { VEGETABLES } from '@/api/vegetables';

const PlantPage = ({ isHerbPage }: PlantPageProp) => {
  const { id } = useParams();

  const vegetable = VEGETABLES.find((a) => a.id === id);

  const configForQuickInfo = useMemo(() => {
    return vegetable?.quickInfo.map((info) => <InfoCard key={info.type} {...info} />);
  }, [vegetable?.quickInfo]);

  const getNeighborsList = useCallback(
    (key: 'companion' | 'combative') => {
      return vegetable?.neighbors[key].map((plant) => {
        const linkToView = routes.vegetables.detailPath(plant.id);
        return <PlantCard key={plant.id} linkToView={linkToView} {...plant} hasSmallSize />;
      });
    },
    [vegetable?.neighbors],
  );

  const configForFullInfo = useMemo(() => {
    return vegetable?.fullInfo.map(({ title, description }, i) => (
      <Stack key={i} direction='column' spacing={1}>
        <Typography variant='h5'>{title}</Typography>
        <Typography>{description}</Typography>
      </Stack>
    ));
  }, [vegetable?.fullInfo]);

  if (!vegetable || isHerbPage) {
    return <NotFound hideIcon />;
  }

  return (
    <>
      <StyledStack direction='row' spacing={10}>
        <Swiper altText={id} items={vegetable.gallery} />

        <StyledMainInfo direction='column' spacing={4}>
          <Typography variant='h4'>{vegetable.name}</Typography>
          <Typography>{vegetable.description}</Typography>
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
