import { LoadMoreBtnProps } from "./ LodeMoreBtn.types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      <p className={css.btn_text}>Load more</p>
    </button>
  );
};

export default LoadMoreBtn;
