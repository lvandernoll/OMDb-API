import { ShortMovie, FullMovie } from 'interfaces';

export const REQUEST_SEARCH_MOVIES = 'REQUEST_SEARCH_MOVIES';
export const RECIEVE_SEARCH_MOVIES = 'RECIEVE_SEARCH_MOVIES';

export const REQUEST_MOVIE_DETAIL         = 'REQUEST_MOVIE_DETAIL';
export const REQUEST_MOVIE_DETAIL_FAILED  = 'REQUEST_MOVIE_DETAIL_FAILED';
export const REQUEST_MOVIE_DETAIL_SUCCESS = 'RECIEVE_MOVIE_DETAIL';

export const REQUEST_FAVORITE_MOVIES = 'REQUEST_FAVORITE_MOVIES';
export const RECIEVE_FAVORITE_MOVIES = 'RECIEVE_FAVORITE_MOVIES';


export const requestSearchMovies = (query: string) => ({ type: REQUEST_SEARCH_MOVIES, payload: { query } });
export const recieveSearchMovies = (movies: ShortMovie[]) => ({ type: RECIEVE_SEARCH_MOVIES, payload: { movies } });

export const requestMovieDetail = (id: string) => ({ type: REQUEST_MOVIE_DETAIL, payload: { id } });
export const requestMovieDetailFailed = (errorMessage: string) => ({ type: REQUEST_MOVIE_DETAIL_FAILED, payload: { errorMessage } });
export const requestMovieDetailSuccess = (movie: FullMovie) => ({ type: REQUEST_MOVIE_DETAIL_SUCCESS, payload: { movie } });

export const requestFavoriteMovies = () => ({ type: REQUEST_FAVORITE_MOVIES });
export const recieveFavoriteMovies = (movies: ShortMovie[]) => ({ type: RECIEVE_FAVORITE_MOVIES, payload: { movies } });
