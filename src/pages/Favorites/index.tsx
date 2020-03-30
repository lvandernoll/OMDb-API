import React from 'react';
import { ShortMovie } from 'interfaces';
import { connect } from 'react-redux';
import MoviesOverview from 'components/MoviesOverview';

interface Props {
  movies: ShortMovie[],
}

const FavoritesPage: React.FC<Props> = ({ movies }) => {
  return (
    <MoviesOverview movies={movies} />
  )
}

const mapStateToProps = (state: any) => ({ movies: state.favoriteMovies });

export default connect(mapStateToProps)(FavoritesPage);
