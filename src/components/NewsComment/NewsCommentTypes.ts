import { ApiNewsComment } from '@/redux/services/news/news.types';

export interface NewsCommentProps {
  comment: ApiNewsComment;
  isLast: boolean;
}
