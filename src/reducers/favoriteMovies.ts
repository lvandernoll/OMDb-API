import { REQUEST_FAVORITE_MOVIES, REQUEST_FAVORITE_MOVIES_SUCCESS } from 'actions';
import { ShortMovie, FavoriteMoviesAction } from 'interfaces';

export interface FavoriteMoviesState {
  isLoading: boolean,
  movies: ShortMovie[],
}

const initialState: FavoriteMoviesState = {
  isLoading: false,
  movies: [],
}

export const favoriteMoviesReducer = (
  state: FavoriteMoviesState = initialState,
  action: FavoriteMoviesAction,
): FavoriteMoviesState => {
  switch(action.type) {
    case REQUEST_FAVORITE_MOVIES:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_FAVORITE_MOVIES_SUCCESS:
      return {
        isLoading: false,
        movies: action.payload.movies,
      }
    default:
      return state;
  }
}
