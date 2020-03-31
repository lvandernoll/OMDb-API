import { REQUEST_MOVIE_DETAIL, REQUEST_MOVIE_DETAIL_SUCCESS, REQUEST_MOVIE_DETAIL_FAILED } from 'actions';
import { MovieDetailAction, FullMovie } from 'interfaces';

export interface MovieDetailState {
  error: boolean,
  isLoading: boolean,
  movie: FullMovie,
}

const defaultState: MovieDetailState = {
  error: false,
  isLoading: false,
  movie: {
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
  },
}

export const movieDetailReducer = (
  state: MovieDetailState = defaultState,
  action: MovieDetailAction,
): MovieDetailState => {
  switch(action.type) {
    case REQUEST_MOVIE_DETAIL:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_MOVIE_DETAIL_SUCCESS:
      if(action.payload.movie) {
        return {
          isLoading: false,
          error: false,
          movie: action.payload.movie,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error: true,
        }
      }
    case REQUEST_MOVIE_DETAIL_FAILED:
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
