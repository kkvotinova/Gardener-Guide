import { useMemo } from 'react';
import Typography from '@mui/material/Typography';

import { StyledNewsList } from '@/pages/NewsPage/NewsPageStyled';

import Search from '@/components/Search';
import NewsCard from '@/components/NewsCard';
import Loader from '@/components/Loader';

import { ApiNews } from '@/redux/services/news/news.types';

const queryName = 'title';
const isLoading = false;

export const TEST: ApiNews[] = [
  {
    _id: '1',
    author: 'ksuvot',
    title: 'Как обрабатывать плодовый сад без химии. Программа биозащиты с апреля по октябрь',
    preview: 'https://img.7dach.ru/image/1200/44/42/48/2019/03/27/f515e1-nomark.jpg',
    fullInfo: [
      {
        description:
          'Очень часто на конференциях и семинарах, в которых участвуют владельцы приусадебных хозяйств, дачники и садоводы-любители, звучит вопрос: возможно ли выращивание яблонь, груш, вишен, слив без применения химических средств защиты растений?',
      },
      {
        description:
          'Сомнения в положительном решении вопроса понятны, так как в последнее время в плодовых садах наблюдается победоносное шествие огромного количества вредителей. Это гусеницы различных бабочек, как многоядных, так и «специалистов» по конкретной культуре, причем одни из них повреждают листья, другие — плоды; третьи — древесину. Это и ложногусеницы пилильщиков, тли разных видов и форм, трипсы, клопы,  жуки-долгоносики (цветоед, казарки, букарки), медяница, щитовки.',
      },
      {
        title: 'Вооружитесь литературой',
        description:
          'Каждому садоводу надо хорошо представлять вредные объекты, которые могут угрожать урожаю. Первые очаги вредителей и болезней в таких случаях можно уничтожить механическим путем при условии ежедневного мониторинга посадок. Учитывайте при этом, что симптомы недугов могут быть скрытыми, иногда косвенными, и только внимательный дачник их не пропустит.',
        preview: 'https://img.7dach.ru/image/1200/44/42/48/2019/03/27/e32a57-nomark.jpg',
      },
    ],
    comments: [
      {
        username: 'test',
        description: 'qwertyuio',
      },

      {
        username: 'Рауд Андрей',
        description:
          'У Меня есть такой цветок. редко правда поливаю, но он живет, терпеливый. Только на солнце листья обожглись.',
      },
    ],
  },
];

const NewsPage = () => {
  const config = useMemo(() => {
    return TEST.map((news) => <NewsCard key={news._id} {...news} />);
  }, []);

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
