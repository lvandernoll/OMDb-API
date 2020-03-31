import React from 'react';
import { ShortMovie } from 'interfaces';
import { connect } from 'react-redux';
import { State } from 'reducers';
import MoviesOverview from 'components/MoviesOverview';

interface Props {
  movies: ShortMovie[],
}

const SearchPage: React.FC<Props> = ({ movies }) => {
  return (
    <MoviesOverview movies={movies} />
  )
}

const mapStateToProps = (state: State) => ({ movies: state.searchMovies });

export default connect(mapStateToProps)(SearchPage);
