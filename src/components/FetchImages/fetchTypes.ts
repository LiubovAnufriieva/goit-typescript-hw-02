export interface ImageResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    [key: string]: string;
  };
  likes: number;
  user: {
    name: string;
    [key: string]: any;
  };
}
