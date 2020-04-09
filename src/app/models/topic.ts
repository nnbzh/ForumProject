export interface Topic {
  id: number;
  unread: number;
  title: string;
  description?: string;
  author: string;
  date: Date;
  replies: number;
  views: number;
  last_author: string;
  last_date: Date;
  comment?: string;
  discussion_id: number;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  author: string;
  date: Date;
}
