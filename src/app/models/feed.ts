export interface Feed {
  description: string;
  generator: string;
  items: [
    {
      author: string,
      author_id: string,
      date_taken: string,
      description: string,
      link: string,
      media: {
        m: string
      }
    }
    ];
  link: string;
  modified: string;
  title: string;
}
