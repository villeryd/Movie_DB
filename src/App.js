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

function App() {
  const [results, setResults] = useState(null);
  const client = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <NavBar setResults={setResults} results={results} />
        <Routes>
          <Route
            path='/'
            element={<Home setResults={setResults} result={results} />}
          ></Route>
          <Route path='/movies' element={<Movie />}></Route>
          <Route path='/tv' element={<Movie />}></Route>
          <Route path='/people' element={<Movie />}></Route>
          <Route
            path='/search/results/:query'
            element={<SearchResults />}
          ></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
