import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';

import { NewsCommentProps } from '@/components/NewsComment/NewsCommentTypes';

const NewsComment = ({ comment, isLast }: NewsCommentProps) => {
  const formattedDate = dayjs(comment.createdAt || Date()).format('DD.MM.YYYY');

  return (
    <>
      <Stack direction='column'>
        <Stack direction='row' spacing={2} alignItems='center'>
          <PersonIcon color='secondary' sx={{ width: 50, height: 50 }} />
          <Stack direction='column'>
            <Typography fontWeight={500}>{comment.username}</Typography>
            <Typography color='secondary.main'>{formattedDate}</Typography>
          </Stack>
        </Stack>
        <Typography>{comment.description}</Typography>
      </Stack>

      {!isLast && <Divider sx={{ mt: 6 }} />}
    </>
  );
};

export default NewsComment;
