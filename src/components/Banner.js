import React, { useEffect, useState } from "react";
import axios from "./Instance";
import fetchURL from "./request";
import "./styling/banner.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchURL.fetchNetflixOriginals);
      setMovies(
        req.data.results[
          Math.floor(Math.random() * (req.data.results.length - 1))
        ]
      );
      return req;
    }
    fetchData();
  }, []);
  //   console.log(movies);
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

  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: "1",
    },
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const style = {
    backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
    )`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <>
      <div className="banner" style={style}>
        <div className="banner-contents">
          <h1 className="banner-title">
            {movies?.title ||
              movies?.original_title ||
              movies?.name ||
              movies?.original_name}
          </h1>
          <div className="banner-buttons">
            <button
              className="banner-button"
              onClick={() => handleClick(movies)}
            >
              play
            </button>
            <button className="banner-button">My List</button>
          </div>
          <div className="banner-des">{truncate(movies?.overview, 150)}</div>
        </div>
        <div className="banner-fadebottom" />
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </>
  );
};

export default Banner;
