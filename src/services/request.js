const API_KEY = "bbd4cbf30b4db1252182844eded615bf";

export default {
  trendingMovies: `/trending/all/week?api_key=${API_KEY}`,
  topRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  thrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  mysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  sciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  dramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  TVMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  animationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  
};
