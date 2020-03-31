import { ShortMovie, FullMovie } from 'interfaces';

export const REQUEST_SEARCH_MOVIES         = 'REQUEST_SEARCH_MOVIES';
export const REQUEST_SEARCH_MOVIES_SUCCESS = 'REQUEST_SEARCH_MOVIES_SUCCESS';
export const REQUEST_SEARCH_MOVIES_FAILED  = 'REQUEST_SEARCH_MOVIES_FAILED';

export const REQUEST_MOVIE_DETAIL         = 'REQUEST_MOVIE_DETAIL';
export const REQUEST_MOVIE_DETAIL_SUCCESS = 'REQUEST_MOVIE_DETAIL_SUCCESS';
export const REQUEST_MOVIE_DETAIL_FAILED  = 'REQUEST_MOVIE_DETAIL_FAILED';

export const REQUEST_FAVORITE_MOVIES         = 'REQUEST_FAVORITE_MOVIES';
export const REQUEST_FAVORITE_MOVIES_SUCCESS = 'REQUEST_FAVORITE_MOVIES_SUCCESS';


export const requestSearchMovies = (query: string) => ({ type: REQUEST_SEARCH_MOVIES, payload: { query } });
export const requestSearchMoviesFailed = (errorMessage: string) => ({ type: REQUEST_SEARCH_MOVIES_FAILED, payload: { errorMessage } });
export const requestSearchMoviesSuccess = (movies: ShortMovie[]) => ({ type: REQUEST_SEARCH_MOVIES_SUCCESS, payload: { movies } });

export const requestMovieDetail = (id: string) => ({ type: REQUEST_MOVIE_DETAIL, payload: { id } });
export const requestMovieDetailFailed = (errorMessage: string) => ({ type: REQUEST_MOVIE_DETAIL_FAILED, payload: { errorMessage } });
export const requestMovieDetailSuccess = (movie: FullMovie) => ({ type: REQUEST_MOVIE_DETAIL_SUCCESS, payload: { movie } });

export const requestFavoriteMovies = () => ({ type: REQUEST_FAVORITE_MOVIES });
export const requestFavoriteMoviesSuccess = (movies: ShortMovie[]) => ({ type: REQUEST_FAVORITE_MOVIES_SUCCESS, payload: { movies } });
