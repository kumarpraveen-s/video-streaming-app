import React from "react";
import "./App.css";
import Row from "./components/Row";
import fetchURL from "./components/request";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={fetchURL.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={fetchURL.fetchTrending} />
      <Row title="Top Rated" fetchURL={fetchURL.fetchTopRated} />
      <Row title="Action movies" fetchURL={fetchURL.fetchActionMovies} />
      <Row title="Comedy movies" fetchURL={fetchURL.fetchComedyMovies} />
      <Row title="Horror movies" fetchURL={fetchURL.fetchHorrorMovies} />
      <Row title="Romantic movies" fetchURL={fetchURL.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={fetchURL.fetchDocumantaries} />
    </div>
  );
};

export default App;
