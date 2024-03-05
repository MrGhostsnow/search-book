export interface IBook {
    id: string;
    title: string;
    publishedDate?: string;
    description?: string;
    volumeInfo?: {
      title: string;
      description: string;
      publishedDate: string;
      infoLink: string;
      imageLinks?: {
        thumbnail: string;
      };
    };
  }
