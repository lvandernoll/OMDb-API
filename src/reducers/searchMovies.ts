import { REQUEST_SEARCH_MOVIES, REQUEST_SEARCH_MOVIES_SUCCESS, REQUEST_SEARCH_MOVIES_FAILED } from 'actions';
import { SearchMoviesAction, ShortMovie } from 'interfaces';

export interface SearchMoviesState {
  isLoading: boolean,
  error: boolean,
  movies: ShortMovie[],
}

const initialState: SearchMoviesState = {
  isLoading: false,
  error: false,
  movies: [],
}

export const searchMoviesReducer = (
  state: SearchMoviesState = initialState,
  action: SearchMoviesAction,
): SearchMoviesState => {
  switch(action.type) {
    case REQUEST_SEARCH_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_SEARCH_MOVIES_SUCCESS:
      return {
        isLoading: false,
        error: false,
        movies: action.payload.movies || [],
      };
    case REQUEST_SEARCH_MOVIES_FAILED:
      console.error(action.payload.errorMessage || 'error');
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
}
