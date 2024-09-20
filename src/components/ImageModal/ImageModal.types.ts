export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
  altDescription: string;
  description: string;
  likes: number;
  user: string;
}
