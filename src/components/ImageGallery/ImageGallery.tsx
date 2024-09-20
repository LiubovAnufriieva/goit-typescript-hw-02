import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className={css.gallery}>
      <ul className={css.list}>
        {images.map((image) => (
          <li className={css.galleryItem} key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
