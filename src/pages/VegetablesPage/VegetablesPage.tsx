import { useMemo } from 'react';
import { Typography } from '@mui/material';

import { StyledList } from '@/pages/VegetablesPage/VegetablesPageStyled';

import Search from '@/components/Search';
import ItemCard from '@/components/ItemCard';

import routes from '@/resources/routes';

const VEGETABLES = [
  {
    title: 'Огурец',
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/7119/7119784.png',
    linkToView: routes.vegetables.detailPath('cucumber'),
  },
  {
    title: 'Баклажан',
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/8856/8856252.png',
    linkToView: routes.vegetables.detailPath('eggplant'),
  },
  {
    title: 'Капуста',
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/8856/8856299.png',
    linkToView: routes.vegetables.detailPath('cabbage'),
  },
];

const VegetablesPage = () => {
  const config = useMemo(() => {
    return VEGETABLES.map((a) => {
      return <ItemCard key={a.title} {...a} />;
    });
  }, []);

  return (
    <>
      <Typography variant='h5' sx={{ mb: 7 }}>
        Сад и Огород
      </Typography>

      <Search queryName='vegetable' />

      <StyledList>{config}</StyledList>
    </>
  );
};

export default VegetablesPage;
