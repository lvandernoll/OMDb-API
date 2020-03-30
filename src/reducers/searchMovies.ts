import { RECIEVE_SEARCH_MOVIES } from 'actions';
import { SearchMoviesAction, ShortMovie } from 'interfaces';

export const searchMoviesReducer = (
  state: ShortMovie[] = [],
  action: SearchMoviesAction,
): ShortMovie[] => {
  switch(action.type) {
    case RECIEVE_SEARCH_MOVIES:
      return action.payload.movies || [];
    default:
      return state;
  }
}
