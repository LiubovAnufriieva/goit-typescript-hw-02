import React, { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import fetchImages from "../FetchImages/fetchImages";

import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import css from "./App.module.css";
import { SelectedImage, ImageResponse, Image, HandleLoadMore, HandleSubmit, HandleModalClose, HandleModalOpen } from './App.types'

const App: React.FC =() => {
const [images, setImages] = useState< Image[]>([]);
const [query, setQuery] = useState<string>("");
const [loader, setLoader] = useState<boolean>(false);
const [error, setError] = useState<boolean>(false);
const [page, setPage] = useState<number>(1);
const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
const [isVisible, setIsVisible] = useState<boolean>(false);
const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
const [isEmpty, setIsEmpty] = useState<boolean>(false);

useEffect(() => {
  if (!query) {
    return
  }
  const getImages = async () => {
    setLoader(true);
    try {
      setError(false);
      const data: ImageResponse = await fetchImages<ImageResponse>(query, page);
      console.log(data.results);
      
      if (data.results.length === 0) {
        setIsEmpty(true);
        setIsVisible(false);
        toast.error("Sorry. There are no images matching your query ... 😭");
      } else {
        setImages((prevImages) => [...prevImages, ...data.results]);
        setIsVisible(data.total_pages > 0 && data.total_pages !== page);
        console.log(data.total_pages);
        console.log(page);
      }
    } catch (error) {
      setError(true);
      toast.error("Oops! Something went wrong. Please try again later...");
    } finally {
      setLoader(false);
    }
  };
  getImages();
}, [query, page]);

const handleSubmit: HandleSubmit = (query: string) => {
  setQuery(query);
  setPage(1);
  setError(false);
  setImages([]);
  setIsVisible(false);
  setIsEmpty(false);
}

const handleLoadMore: HandleLoadMore = () => {
  setPage(page + 1);
}

const openModal: HandleModalOpen = (image: Image) => {
  setSelectedImage({
    imageUrl: image.urls.regular,
    altDescription: image.alt_description,
    authorName: image.user.name,
    likes: image.likes,
  });
  setModalIsOpen(true);
}

const closeModal: HandleModalClose = () => {
  setModalIsOpen(false);
  setSelectedImage(null)
}
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {!images.length && !isEmpty && (
        <p className={css.text}>Let`s begin search 🔎</p>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal}/>
      )}
      {error && <ErrorMassage message="Oops! Something went wrong."/>}
      {loader && <Loader/>}
      {images.length > 0 && !loader && isVisible && (
        <LoadMoreBtn onClick={handleLoadMore}/>
      )}
      {selectedImage && (
        <ImageModal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage.imageUrl}
        altDescription={selectedImage.altDescription}
        description={selectedImage.altDescription}
        likes={selectedImage.likes}
        user={selectedImage.authorName}
        />
      )}
    </div>
  );
}

export default App;
