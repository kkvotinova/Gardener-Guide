import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { Button, Stack, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { TEST } from '@/pages/NewsPage/NewsPage';
import {
  StyledImage,
  StyledImageWrapper,
  StyledInput,
} from '@/pages/NewsDetailedPage/NewsDetailedPageStyled';

import NewsComment from '@/components/NewsComment';

import useAuthorization from '@/hooks/useAuthorization';

import ModalLogin from '@/modals/ModalLogin/ModalLogin';

const NewsDetailedPage = () => {
  const { id } = useParams();
  const { isAuthorized } = useAuthorization();

  const [userComment, setUserComment] = useState('');

  const news = TEST[0];
  const formattedDate = dayjs(news.createdAt || news.updatedAt || Date()).format('LLL');

  const handleAddComment = () => {
    if (!isAuthorized) {
      ModalLogin.show();
      return;
    }
  };

  const config = useMemo(() => {
    return news.fullInfo.map((a, i) => {
      if (!a.title) {
        return <Typography key={i}>{a.description}</Typography>;
      }

      const hasImage = !!a.preview;

      return (
        <Stack key={i} direction='column'>
          <Typography variant='h6'>{a.title}</Typography>
          <Typography marginBottom={hasImage ? 4 : 0}>{a.description}</Typography>
          {hasImage && (
            <StyledImageWrapper target='_blank' href={a.preview} rel='noreferrer'>
              <StyledImage src={a.preview!} duration={0} height={300} width={400} />
            </StyledImageWrapper>
          )}
        </Stack>
      );
    });
  }, [news.fullInfo]);

  const commentsConfig = useMemo(() => {
    if (!news.comments?.length) return [];

    return news.comments.map((comment, i) => (
      <NewsComment key={i} comment={comment} isLast={news.comments!.length - i === 1} />
    ));
  }, [news.comments]);

  return (
    <>
      <Typography variant='h2'>{news.title}</Typography>

      <Stack direction='row' spacing={2} marginBottom={2}>
        <Typography fontWeight={500} color='secondary.main'>
          Автор:
        </Typography>
        <Typography color='secondary.main'>
          {news.author} • {formattedDate}
        </Typography>
      </Stack>

      <StyledImage src={news.preview} duration={0} height={400} width={600} />

      <Stack direction='column' spacing={4} marginTop={6}>
        {config}
      </Stack>

      <Typography variant='h5' marginTop={10}>
        Комментарии ({news.comments?.length || 0})
      </Typography>

      <Stack spacing={4} marginTop={5}>
        <StyledInput
          multiline
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        />
        <Button
          variant='contained'
          sx={{ width: 240 }}
          disabled={!userComment}
          onClick={handleAddComment}
          endIcon={<ChevronRightIcon />}
        >
          Добавить комментарий
        </Button>
      </Stack>

      <Stack marginTop={8} direction='column' spacing={6}>
        {commentsConfig}
      </Stack>
    </>
  );
};

export default NewsDetailedPage;
