export interface Topic {
  id: number;
  unread: number;
  title: string;
  // nav_string: string;
  author: string;
  date: Date;
  replies: number;
  views: number;
  last_author: string;
  last_date: Date;
  comment?: string;
  discussion_id: number;
}
