export interface ApiNews {
  _id: string;

  title: string;
  preview: string;
  author: string;

  createdAt?: Date;

  fullInfo: ApiNewsFullInfo[];
  comments?: ApiNewsComment[];
}

export interface ApiNewsComment {
  username: string;
  createdAt?: Date;
  description: string;
}

interface ApiNewsFullInfo {
  title?: string;
  preview?: string;
  description: string;
}

// === READ ↴

export type ApiAllNewsGetQuery = {
  limit?: number;
  title?: string;
};
export type ApiAllNewsGetResponse = ApiNews[];

// === READ ↴

export type ApiNewsGetQuery = Pick<ApiNews, '_id'>;
export type ApiNewsGetResponse = ApiNews;

// === ADD COMMENT ↴

export type ApiNewsByIdPatchBody = Pick<ApiNews, '_id'> & Pick<ApiNewsFullInfo, 'description'>;
export type ApiNewsByIdPatchResponse = ApiNews;
