import { Topic } from './topic';

export interface Discussion {
  id: number;
  name: string;
  description: string;
  topics_count: number;
  posts_count: number;
  category_id: number;
  topics?: Topic[]
}
