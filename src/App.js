import "./App.css";
import axios from "axios";
import { useState } from "react";
import he from "he";

function App() {
  const [results, setResults] = useState(null);
  return (
    <div className='App'>
      Movie Database!!!
      <SearchBar setResults={setResults} />
      <br />
      {results &&
        (results.length > 0 ? (
          results.map((r) => (
            <>
              <div key={r.id}>{r.original_title}</div>
              <img
                key={r.backdrop_path}
                src={
                  r.backdrop_path == null
                    ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                    : `https://image.tmdb.org/t/p/w500/${r.backdrop_path}`
                }
                alt=''
              />
            </>
          ))
        ) : (
          <>
            <div>No results found</div>
          </>
        ))}
    </div>
  );
}

function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `${process.env.REACT_APP_TMDB_URL}/search/movie?query=${he.encode(
          query
        )}?language=en-US`,
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

export default App;
