import { useState } from "react";

import { useNavigate } from "react-router-dom";

export function SearchBar({ setResults, results, setValue }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue("");
    navigate(`/search/results/${query}`);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='search-bar'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
