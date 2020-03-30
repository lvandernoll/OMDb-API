import { RECIEVE_MOVIE_DETAIL } from 'actions';
import { MovieDetailAction, FullMovie } from 'interfaces';

const defaultState = {
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
) => {
  switch(action.type) {
    case RECIEVE_MOVIE_DETAIL:
      return action.payload.movie;
    default:
      return state;
  }
}
