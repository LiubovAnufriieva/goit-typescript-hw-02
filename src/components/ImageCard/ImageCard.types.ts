import { Image } from "../App/App.types";

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}
