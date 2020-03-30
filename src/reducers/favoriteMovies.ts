import { RECIEVE_FAVORITE_MOVIES } from 'actions';
import { ShortMovie, FavoriteMoviesAction } from 'interfaces';

export const favoriteMoviesReducer = (
  state: ShortMovie[] = [],
  action: FavoriteMoviesAction,
): ShortMovie[] => {
  switch(action.type) {
    case RECIEVE_FAVORITE_MOVIES:
      return action.payload.movies;
    default:
      return state;
  }
}
