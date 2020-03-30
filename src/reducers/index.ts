import { combineReducers } from 'redux';
import { helloWorldReducer } from './helloWorld';
import { searchMoviesReducer } from './searchMovies';


export default combineReducers({
  helloWorldReducer,
  searchMoviesReducer,
});
