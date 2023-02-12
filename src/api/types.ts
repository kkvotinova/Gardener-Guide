export interface ApiPlant {
  id: string;
  name: string;
  variant: 'vegetable' | 'flower';
  preview: string;
  description: string;
  gallery: string[];
  quickInfo: ApiPlantQuickInfo[];
  neighbors: ApiPlantNeighbors;
  fullInfo: ApiPlantFullInfo[];
}

type NeighborInfo = Pick<ApiPlant, 'id' | 'name' | 'preview'>;

interface ApiPlantNeighbors {
  companion: NeighborInfo[];
  combative: NeighborInfo[];
}

interface ApiPlantFullInfo {
  title: string;
  description: string;
}

export interface ApiPlantQuickInfo {
  type: PossibleQuickInfo;
  value: string;
  description?: string;
}

export enum PossibleQuickInfo {
  DEPTH = 'DEPTH',
  SUN = 'SUN',
  WATER = 'WATER',
  SEASON = 'SEASON',
  FROST = 'FROST',
  GERMINATION = 'GERMINATION',
  SPROUT_TO_HARVEST = 'SPROUT_TO_HARVEST',
}
