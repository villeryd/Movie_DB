import { useState } from "react";
import axios from "axios";
import he from "he";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function SearchBar({ setResults, results, setValue }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `${
          process.env.REACT_APP_TMDB_URL
        }/search/movie?&language=en-US&query=${he.encode(query)}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setResults(res.data.results);
        console.log(res.data.results);
      });
    if (results !== null) {
      setValue("");
      navigate(`/search/results/${query}`);
    }
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
