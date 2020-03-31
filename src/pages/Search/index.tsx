import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { State } from 'reducers';
import { SearchMoviesState } from 'reducers/searchMovies';
import MoviesOverview from 'components/MoviesOverview';
import { useHistory } from 'react-router-dom';

interface Props {
  searchMoviesState: SearchMoviesState,
}

const SearchPage: React.FC<Props> = ({ searchMoviesState }) => {
  const history = useHistory();

  useEffect(() => {
    if(searchMoviesState.error) {
      history.push('/');
    }
  }, [searchMoviesState.error, history]);

  return (
    <>
      {searchMoviesState.isLoading ?
        <span>{'Loading...'}</span>
        :
        <MoviesOverview movies={searchMoviesState.movies} />
      }
    </>
  )
}

const mapStateToProps = (state: State) => ({ searchMoviesState: state.searchMovies });

export default connect(mapStateToProps)(SearchPage);
