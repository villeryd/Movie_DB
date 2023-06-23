import "./App.css";
import axios from "axios";
import { useState } from "react";
import he from "he";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NavBar } from "./Components/Navigation";
import { Movie } from "./Pages/Movie";
import { SearchResults } from "./Pages/SearchResults";
import { TVPopular } from "./Pages/TV";
import { TVShow } from "./Pages/Movie";

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
            <Route path='/movies' element={<Movie />}></Route>
            <Route path='/tv' element={<TVPopular />}></Route>
            <Route path='/tv/:id' element={<TVShow />}></Route>
            <Route path='/people' element={<Movie />}></Route>
            <Route
              path='/search/results/:query'
              element={<SearchResults results={results} />}
            ></Route>
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
