import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {
  StyledImage,
  StyledImageWrapper,
  StyledInput,
} from '@/pages/NewsDetailedPage/NewsDetailedPageStyled';

import NewsComment from '@/components/NewsComment';
import Loader from '@/components/Loader';

import useAuthorization from '@/hooks/useAuthorization';

import { useAddCommentMutation, useGetNewsQuery } from '@/redux/services/news/news';
import ModalLogin from '@/modals/ModalLogin/ModalLogin';

const NewsDetailedPage = () => {
  const { id } = useParams();
  const { isAuthorized } = useAuthorization();

  const [addComment, { isLoading: isUpdateLoading }] = useAddCommentMutation();
  const { data: news, isLoading } = useGetNewsQuery({ _id: String(id) });

  const [userComment, setUserComment] = useState('');

  const formattedDate = dayjs(news?.createdAt || Date()).format('LLL');

  const isAdaptive = window.innerWidth < 600;

  const handleAddComment = async () => {
    if (!isAuthorized) {
      ModalLogin.show();
      return;
    }

    const response = await addComment({
      _id: String(id),
      description: userComment,
    });

    if ('data' in response) {
      setUserComment('');
    }
  };

  const config = useMemo(() => {
    if (!news?.fullInfo.length) return [];

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
              <StyledImage
                src={a.preview!}
                duration={0}
                height={300}
                width={isAdaptive ? '80%' : 400}
                showLoading
              />
            </StyledImageWrapper>
          )}
        </Stack>
      );
    });
  }, [isAdaptive, news?.fullInfo]);

  const commentsConfig = useMemo(() => {
    if (!news?.comments?.length) return [];

    return news?.comments.map((comment, i) => (
      <NewsComment key={i} comment={comment} isLast={news?.comments!.length - i === 1} />
    ));
  }, [news?.comments]);

  if (isLoading) {
    return <Loader color='primary' />;
  }

  return (
    <>
      <Typography variant='h2'>{news?.title}</Typography>

      <Stack direction='row' spacing={2} marginBottom={2}>
        <Typography fontWeight={500} color='secondary.main'>
          Автор:
        </Typography>
        <Typography color='secondary.main'>
          {news?.author} • {formattedDate}
        </Typography>
      </Stack>

      <StyledImage
        src={String(news?.preview)}
        duration={0}
        width={isAdaptive ? '100%' : 600}
        height={400}
        showLoading
      />

      <Stack direction='column' spacing={4} marginTop={6}>
        {config}
      </Stack>

      <Typography variant='h5' marginTop={10}>
        Комментарии ({news?.comments?.length || 0})
      </Typography>

      <Stack spacing={4} marginTop={5}>
        <StyledInput
          multiline
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        />
        <LoadingButton
          variant='contained'
          sx={{ width: 240 }}
          disabled={!userComment}
          loading={isUpdateLoading}
          onClick={handleAddComment}
          endIcon={<ChevronRightIcon />}
        >
          Добавить комментарий
        </LoadingButton>
      </Stack>

      <Stack marginTop={8} direction='column' spacing={6}>
        {commentsConfig}
      </Stack>
    </>
  );
};

export default NewsDetailedPage;
