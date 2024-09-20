import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <img
      className={css.cardImage}
      src={image.urls.small}
      onClick={handleClick}
      alt={image.alt_description}
    />
  );
};

export default ImageCard;
