import "./App.css";
import axios from "axios";
import { useState } from "react";
import he from "he";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navigation";
import { Movie } from "./Pages/Movie";

function App() {
  const client = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:id' element={<Movie />}></Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
