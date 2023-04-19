export interface ApiPlant {
  _id: string;
  name: string;
  type: ApiPlantType;
  preview: string;
  description: string;
  gallery: string[];
  quickInfo: ApiPlantQuickInfo[];
  neighbors: ApiPlantNeighbors;
  fullInfo: ApiPlantFullInfo[];
}

export enum ApiPlantType {
  VEGETABLE = 'vegetable',
  HERB = 'herb',
}

export type NeighborInfo = Pick<ApiPlant, '_id' | 'type' | 'name' | 'preview'>;

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

// === READ ↴

export type ApiAllPlantsGetQuery = {
  type: ApiPlantType;
  name?: string;
};
export type ApiAllPlantsGetResponse = ApiPlant[];

// === READ ↴

export type ApiPlantsGetQuery = Pick<ApiPlant, '_id' | 'type'>;
export type ApiPlantsGetResponse = ApiPlant;
