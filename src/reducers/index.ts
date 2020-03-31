import { combineReducers } from 'redux';
import { searchMoviesReducer, SearchMoviesState } from './searchMovies';
import { movieDetailReducer, MovieDetailState } from './movieDetail';
import { favoriteMoviesReducer, FavoriteMoviesState } from './favoriteMovies';

export interface State {
  searchMovies: SearchMoviesState,
  movieDetail: MovieDetailState,
  favoriteMovies: FavoriteMoviesState,
}

export default combineReducers<State>({
  searchMovies: searchMoviesReducer,
  movieDetail: movieDetailReducer,
  favoriteMovies: favoriteMoviesReducer,
});
