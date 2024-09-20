import css from "./SearchBar.module.css";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import { FiSearch } from 'react-icons/fi';

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  function handleSubmitInput(evt: React.ChangeEvent<HTMLInputElement>): void {
    setQuery(evt.target.value);
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  }
  return (
    <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleSubmitInput}
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
            <FiSearch size="16px" className={css.icon} />
          </button>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </form>
    </header>
  );
};

export default SearchBar;
