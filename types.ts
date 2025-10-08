export interface BlogPost {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  summary: string;
  content: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
  isApproved: boolean;
  replies?: Comment[];
}