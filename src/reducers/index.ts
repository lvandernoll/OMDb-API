import { combineReducers } from 'redux';
import { helloWorldReducer } from './helloWorld';
import { searchMoviesReducer } from './searchMovies';
import { movieDetailReducer } from './movieDetail';


export default combineReducers({
  helloWorldReducer,
  searchMoviesReducer,
  movieDetailReducer,
});
