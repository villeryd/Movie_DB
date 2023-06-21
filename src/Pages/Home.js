import { useState } from "react";
import { SearchBar } from "../Components/searchBar";

export function Home() {
  const [results, setResults] = useState(null);
  return (
    <>
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
    </>
  );
}
