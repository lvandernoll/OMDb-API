import { combineReducers } from 'redux';
import { ShortMovie } from 'interfaces';
import { searchMoviesReducer } from './searchMovies';
import { movieDetailReducer, MovieDetailState } from './movieDetail';
import { favoriteMoviesReducer } from './favoriteMovies';

export interface State {
  searchMovies: ShortMovie[],
  movieDetail: MovieDetailState,
  favoriteMovies: ShortMovie[],
}

export default combineReducers<State>({
  searchMovies: searchMoviesReducer,
  movieDetail: movieDetailReducer,
  favoriteMovies: favoriteMoviesReducer,
});
