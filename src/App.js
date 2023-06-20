import "./App.css";
import axios from "axios";
import { useState } from "react";
import he from "he";

function App() {
  return (
    <div className='App'>
      Movie Database!!!
      <SearchBar />
    </div>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${he.encode(query)}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.results);
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
