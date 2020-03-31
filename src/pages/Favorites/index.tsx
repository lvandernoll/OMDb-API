import React from 'react';
import { connect } from 'react-redux';
import { State } from 'reducers';
import { FavoriteMoviesState } from 'reducers/favoriteMovies';
import MoviesOverview from 'components/MoviesOverview';

interface Props {
  favoriteMoviesState: FavoriteMoviesState,
}

const FavoritesPage: React.FC<Props> = ({ favoriteMoviesState }) => {
  return (
    <MoviesOverview movies={favoriteMoviesState.movies} />
  )
}

const mapStateToProps = (state: State) => ({ favoriteMoviesState: state.favoriteMovies });

export default connect(mapStateToProps)(FavoritesPage);
