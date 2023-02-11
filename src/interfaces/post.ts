import { AuthorInterface } from './author';
import { CategoryInterface } from './category';

export interface PostInterface {
  author: AuthorInterface;
  createdAt: Date;
  title: string;
  description: string;
  photoUrl: string;
  category: CategoryInterface;
  readingTime: number;
  body?: string;
  hero?: string;
}
