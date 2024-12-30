import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchTerm(search);
  };
  return (
    <section className="search-form-container">
      <h1 className="title">Images Searcher</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          name="search"
          placeholder="Cat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-icon">
          <CiSearch />
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
