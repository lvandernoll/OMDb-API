import { combineReducers } from 'redux';
import { searchMoviesReducer } from './searchMovies';
import { movieDetailReducer } from './movieDetail';
import { favoriteMoviesReducer } from './favoriteMovies';


export default combineReducers({
  searchMoviesReducer,
  movieDetailReducer,
  favoriteMoviesReducer,
});

// import { combineReducers } from 'redux';
// import { ShortMovie, FullMovie } from 'interfaces';
// import { searchMoviesReducer } from './searchMovies';
// import { movieDetailReducer } from './movieDetail';
// import { favoriteMoviesReducer } from './favoriteMovies';

// export interface State {
//   searchMovies: ShortMovie[],
//   movieDetail: FullMovie,
//   favoriteMovies: ShortMovie[],
// }

// export default combineReducers<State>({
//   searchMovies: searchMoviesReducer,
//   movieDetail: movieDetailReducer,
//   favoriteMovies: favoriteMoviesReducer,
// });
