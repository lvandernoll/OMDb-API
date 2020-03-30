export interface ShortMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string,
}

interface Rating {
  Source: string,
  Value: string,
}

export interface FullMovie {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: Rating[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
}

export interface HelloWorldAction {
  type: string,
  payload: string,
}

export interface SearchMoviesAction {
  type: string,
  payload: {
    query?: string,
    movies?: ShortMovie[],
  },
}
