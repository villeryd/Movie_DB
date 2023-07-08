import "./App.css";

import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NavBar } from "./Components/Navigation";
import { Movie, MoviePopular } from "./Pages/Movie";
import { SearchResults } from "./Pages/SearchResults";
import { TVPopular } from "./Pages/TV";
import { TVShow } from "./Pages/Movie";
import { NotFound } from "./Pages/NotFound";
import { Person, PeoplePopular } from "./Pages/People";

function App() {
  const [results, setResults] = useState(null);
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <NavBar setResults={setResults} results={results} />
        <div className='App'>
          <Routes>
            <Route
              path='/'
              element={<Home setResults={setResults} result={results} />}
            ></Route>
            <Route path='/:id' element={<Movie />}></Route>
            <Route path='/movies' element={<MoviePopular />}></Route>
            <Route path='/tv' element={<TVPopular />}></Route>
            <Route path='/tv/:id' element={<TVShow />}></Route>
            <Route path='/people' element={<PeoplePopular />}></Route>

            <Route path='/person/:id' element={<Person />}></Route>
            <Route
              path='/search/results/:query'
              element={
                <SearchResults results={results} setResults={setResults} />
              }
            ></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
