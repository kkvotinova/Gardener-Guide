export interface ApiNews {
  _id: string;

  title: string;
  preview: string;
  author: string;

  createdAt?: Date;
  updatedAt?: Date;

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
