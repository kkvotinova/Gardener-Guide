import { PossibleQuickInfo } from '@/api/types';

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

export const translateQuickInfoDescriptionTitle = (title?: PossibleQuickInfo) => {
  switch (title) {
    case PossibleQuickInfo.DEPTH:
      return 'Глубина посадки';
    case PossibleQuickInfo.SUN:
      return 'Оптимальное солнце';
    case PossibleQuickInfo.WATER:
      return 'Вода';
    case PossibleQuickInfo.SEASON:
      return 'Период роста';
    case PossibleQuickInfo.FROST:
      return 'Морозостойкость';
    case PossibleQuickInfo.GERMINATION:
      return 'Время проростания';
    case PossibleQuickInfo.SPROUT_TO_HARVEST:
      return 'Время проростания';
    default:
      return title;
  }
};
