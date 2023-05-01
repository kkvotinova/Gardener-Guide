import Image from 'mui-image';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

import {
  StyledCardWrapper,
  StyledCardInfo,
  StyledTypography,
  StyledInfoWrapper,
} from '@/components/NewsCard/NewsCardStyled';

import routes from '@/resources/routes';

import { ApiNews } from '@/redux/services/news/news.types';

const NewsCard = ({ _id, title, preview, comments, ...restProps }: ApiNews) => {
  const formattedDate = dayjs(restProps.createdAt || restProps.updatedAt || Date()).format(
    'DD.MM.YYYY',
  );

  return (
    <StyledCardWrapper to={routes.news.detailPath(_id)}>
      <Image src={preview} duration={100} height={160} />

      <StyledCardInfo>
        <StyledTypography>{title}</StyledTypography>

        <StyledInfoWrapper>
          <Typography color='rgba(0, 0, 0, 0.26)' variant='body2'>
            {formattedDate}
          </Typography>

          <StyledInfoWrapper>
            <SmsOutlinedIcon color='disabled' />
            <Typography color='rgba(0, 0, 0, 0.26)' variant='body2'>
              {comments?.length || 0}
            </Typography>
          </StyledInfoWrapper>
        </StyledInfoWrapper>
      </StyledCardInfo>
    </StyledCardWrapper>
  );
};

export default NewsCard;
