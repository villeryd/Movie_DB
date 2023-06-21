import { useState } from "react";
import axios from "axios";
import he from "he";
import { useQuery } from "@tanstack/react-query";

export function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");
  const {} = useQuery({});
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `${process.env.REACT_APP_TMDB_URL}/search/movie?query=${he.encode(
          query
        )}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.results);
        setResults(res.data.results);
      });
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
