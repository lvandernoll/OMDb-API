import { ShortMovie } from "interfaces";

export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const RECIEVE_HELLO_WORLD = 'RECIEVE_HELLO_WORLD';

export const REQUEST_SEARCH_MOVIES = 'REQUEST_SEARCH_MOVIES';
export const RECIEVE_SEARCH_MOVIES = 'RECIEVE_SEARCH_MOVIES';


export const requestHelloWorld = () => ({type: REQUEST_HELLO_WORLD});
export const recieveHelloWorld = (payload: string) => ({type: RECIEVE_HELLO_WORLD, payload});

export const requestSearchMovies = (query: string) => ({type: REQUEST_SEARCH_MOVIES, payload: { query }});
export const recieveSearchMovies = (movies: ShortMovie[]) => ({type: RECIEVE_SEARCH_MOVIES, payload: { movies }});
