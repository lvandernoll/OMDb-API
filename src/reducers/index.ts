import { combineReducers } from 'redux';
import { ShortMovie, FullMovie } from 'interfaces';
import { searchMoviesReducer } from './searchMovies';
import { movieDetailReducer } from './movieDetail';
import { favoriteMoviesReducer } from './favoriteMovies';

interface State {
  searchMovies: ShortMovie[],
  movieDetail: FullMovie,
  favoriteMovies: ShortMovie[],
}

export default combineReducers<State>({
  searchMovies: searchMoviesReducer,
  movieDetail: movieDetailReducer,
  favoriteMovies: favoriteMoviesReducer,
});
