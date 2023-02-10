export interface ApiPlant {
  id: string;
  name: string;
  preview: string;
  description: string;
  gallery: string[];
  quickInfo: ApiQuickInfo[];
  plants: {
    companion: Pick<ApiPlant, 'id' | 'name' | 'preview'>[];
    combative: Pick<ApiPlant, 'id' | 'name' | 'preview'>[];
  };
  fullInfo: CommonInfo[];
}

export interface CommonInfo {
  title: string;
  description: string;
}

export interface ApiQuickInfo {
  type: PossibleQuickInfo;
  value: string;
  info?: CommonInfo;
}

export enum PossibleQuickInfo {
  DEPTH = 'depth',
  SUN = 'sun',
  WATER = 'water',
  SEASON = 'season',
  FROST = 'frost',
  GERMINATION = 'germination',
  SPROUT_TO_HARVEST = 'sproutToHarvest',
}
