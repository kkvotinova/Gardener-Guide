import { PossibleQuickInfo } from '@/api/types';

export const DEFAULT_ERROR_MESSAGE = 'Ошибка запроса к серверу';

export const Months = [
  { label: 'Январь', translate: 'январе', value: 'january' },
  { label: 'Февраль', translate: 'феврале', value: 'february' },
  { label: 'Март', translate: 'марте', value: 'march' },
  { label: 'Апрель', translate: 'апреле', value: 'april' },
  { label: 'Май', translate: 'мае', value: 'may' },
  { label: 'Июнь', translate: 'июне', value: 'june' },
  { label: 'Июль', translate: 'июле', value: 'july' },
  { label: 'Август', translate: 'августе', value: 'august' },
  { label: 'Сентябрь', translate: 'сентябре', value: 'september' },
  { label: 'Октябрь', translate: 'октябре', value: 'october' },
  { label: 'Ноябрь', translate: 'ноябре', value: 'november' },
  { label: 'Декабрь', translate: 'декабре', value: 'december' },
];

export const translateMonth = (month: string | null) => {
  return Months.find((a) => a.value === month)?.translate || Months[0].translate;
};

export const moonLabels = ['Растущая луна', 'Полнолуние', 'Убывающая луна', 'Новолуние'];
export const dayLabels = ['Самые благоприятные', 'Благоприятные', 'Нейтральные', 'Нежелательные'];

export const textColors = ['#008000', '#008000', '#212126', '#ff0000'];
export const bgColors = ['#a5ea894d', '#a5ea894d', '#989fa61a', '#ff5a5a33'];

export const moonPhasePositions = ['-401px -240px', '-160px 0', '-482px 0', '-320px -160px'];

export const translateQuickInfoTitle = (title: PossibleQuickInfo) => {
  switch (title) {
    case PossibleQuickInfo.DEPTH:
      return 'Глубина';
    case PossibleQuickInfo.SUN:
      return 'Солнце';
    case PossibleQuickInfo.WATER:
      return 'Вода';
    case PossibleQuickInfo.SEASON:
      return 'Сезон';
    case PossibleQuickInfo.FROST:
      return 'Мороз';
    case PossibleQuickInfo.GERMINATION:
      return 'Прорастание';
    case PossibleQuickInfo.SPROUT_TO_HARVEST:
      return 'Сбор урожая';
    default:
      return title;
  }
};
