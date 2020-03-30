import { RECIEVE_MOVIE_DETAIL } from 'actions';
import { MovieDetailAction, FullMovie } from 'interfaces';

const defaultState: FullMovie = {
  Title: '',
  Year: '',
  Rated: '',
  Released: '',
  Runtime: '',
  Genre: '',
  Director: '',
  Writer: '',
  Actors: '',
  Plot: '',
  Language: '',
  Country: '',
  Awards: '',
  Poster: '',
  Ratings: [],
  Metascore: '',
  imdbRating: '',
  imdbVotes: '',
  imdbID: '',
  Type: '',
  DVD: '',
  BoxOffice: '',
  Production: '',
  Website: '',
}

export const movieDetailReducer = (
  state: FullMovie = defaultState,
  action: MovieDetailAction,
): FullMovie => {
  switch(action.type) {
    case RECIEVE_MOVIE_DETAIL:
      if(action.payload.movie !== undefined) {
        return action.payload.movie;
      } else {
        return defaultState;
      }
    default:
      return state;
  }
}
