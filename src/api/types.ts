export interface ApiPlant {
  name: string;
  preview: string;
  description: string;
  gallery: string[];
  quickInfo: ApiQuickInfo[];
  plants: {
    companion: string[];
    combative: string[];
  };
  fullInfo: CoomonInfo[];
}

export interface CoomonInfo {
  title: string;
  description: string;
}

export interface ApiQuickInfo {
  type: PossibleQuickInfo;
  value: string;
  info?: CoomonInfo;
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
