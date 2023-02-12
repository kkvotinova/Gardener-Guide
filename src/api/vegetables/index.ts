import Cucumber from '@/api/vegetables/cucumber.json';
import { ApiPlant, PossibleQuickInfo } from '@/api/types';

export const VEGETABLES: ApiPlant[] = [Cucumber].map((plant) => {
  const quickInfo = plant.quickInfo.map((info) => ({
    ...info,
    type: info.type as PossibleQuickInfo,
  }));
  return {
    ...plant,
    variant: 'vegetable',
    quickInfo,
  };
});
