export interface IBlogPost {
  title: string;
  slug: string;
  content: {
    html: string;
  };
  date: string;
  id: string;
}
