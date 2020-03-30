import React from 'react';
import { ShortMovie } from 'interfaces';
import { connect } from 'react-redux';
import MoviesOverview from 'components/MoviesOverview';

interface Props {
  movies: ShortMovie[],
}

const SearchPage: React.FC<Props> = ({ movies }) => {
  return (
    <MoviesOverview movies={movies} />
  )
}

const mapStateToProps = (state: any) => ({ movies: state.searchMoviesReducer });

export default connect(mapStateToProps)(SearchPage);
