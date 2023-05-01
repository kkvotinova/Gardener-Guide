import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import Typography from '@mui/material/Typography';

import { StyledNewsList } from '@/pages/NewsPage/NewsPageStyled';

import Search from '@/components/Search';
import NewsCard from '@/components/NewsCard';
import Loader from '@/components/Loader';

import { useGetAllNewsQuery } from '@/redux/services/news/news';

const queryName = 'title';

const NewsPage = () => {
  const [searchParams] = useSearchParams();

  const queryValue = searchParams.get(queryName);

  const { data, isLoading } = useGetAllNewsQuery({
    title: queryValue || undefined,
  });

  const config = useMemo(() => {
    return (data || []).map((news) => <NewsCard key={news._id} {...news} />);
  }, [data]);

  const MainInfo = useMemo(() => {
    return (
      <>
        <Typography variant='h5' sx={{ mb: 7 }}>
          Новости
        </Typography>

        <Search queryName={queryName} />
      </>
    );
  }, []);

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
      <StyledNewsList>{config}</StyledNewsList>
    </>
  );
};

export default NewsPage;
