
export interface SelectedImage {
  imageUrl: string;
  altDescription: string;
  authorName: string;
  likes: number;
}

export interface ImageResponse {
  total: number;
  total_pages: number;
  results: Image[];
  page: number;
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

export type HandleSubmit= (query: string) => void;

export type HandleLoadMore = () => void;

export type HandleModalOpen = <SelectedImage>(image: Image) => void;

export type HandleModalClose = () => void;