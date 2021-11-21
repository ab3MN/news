export interface INews {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  url: string;
}

export interface INewSelectorsProps {
  news: INews[];
  isLoading: boolean;
  error: any;
  oneNews: INews[];
}
