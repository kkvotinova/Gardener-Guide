import { Typography } from '@mui/material';

import { ItemCardProps } from '@/components/ItemCard/ItemCardTypes';
import { StyledItemWrapper, StyledImage } from '@/components/ItemCard/ItemCardStyled';

const ItemCard = ({ title, imgUrl, linkToView }: ItemCardProps) => {
  return (
    <StyledItemWrapper to={linkToView}>
      <StyledImage src={imgUrl} alt='logo' />
      <Typography sx={{ fontWeight: 500 }}>{title}</Typography>
    </StyledItemWrapper>
  );
};

export default ItemCard;
