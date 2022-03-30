// api key: 9d7c8a56b9e82d09e332892cba0cda4b
// v4 authen: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDdjOGE1NmI5ZTgyZDA5ZTMzMjg5MmNiYTBjZGE0YiIsInN1YiI6IjYyNDI3NDQxMGU1YWJhMDA4ZmQyNWFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dPN1mDEs8iz35sj4x4xeNYA8rhAl1GKdw3SgmyW2OKk

const api_key = "9d7c8a56b9e82d09e332892cba0cda4b";

const fetchURL = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
};

export default fetchURL;
