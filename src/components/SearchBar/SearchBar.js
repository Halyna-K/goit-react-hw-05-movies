import s from "./SearchBar.module.css";
import { useState } from "react";

export function SearchBar({ getQuery }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "query":
        setQuery(value);
        break;
      default:
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getQuery({ query });
    setQuery("");
  };

  return (
    <header className={s.SearchBar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>
        <input
          className={s.input}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
    </header>
  );
}
