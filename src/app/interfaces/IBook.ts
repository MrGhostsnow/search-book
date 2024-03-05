export interface IBook {
    id: string;
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
