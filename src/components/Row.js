import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./Instance";
import "./styling/row.css";

// const base_url = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchURL);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchURL]);
  // console.log(movies);
  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: "1",
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          if (url === null) {
            setTrailerURL("FqnbVhfniys");
          } else {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerURL(urlParams.get("v"));
          }
        })
        .catch((error) => console.log("error"));
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-poster">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${
                isLargeRow
                  ? movie?.poster_path
                  : movie?.backdrop_path || movie?.poster_path
              }`}
              alt={movie.title}
              onClick={() => handleClick(movie)}
              className={`poster-img ${isLargeRow && "poster-img-Large"}`}
            />
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
