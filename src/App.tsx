import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import styles from './App.module.scss';
import OverviewPage from 'pages/Overview';
import MoviePage from 'pages/Movie';
import Searchbar from 'components/Searchbar';
import { ShortMovie } from 'interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHome } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  const [favMovies, setFavMovies] = useState<ShortMovie[]>([]);
// Onclick home button clear searched movies
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Link to='/'>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
            </Link>
            <Searchbar className={styles.search} />
            <Link to='/favorites'>
              <FontAwesomeIcon icon={faStar} className={styles.icon} />
            </Link>
          </header>
          <div className={styles.content}>
            <Switch>
              <Route exact path='/'>
                <OverviewPage favMovies={favMovies} setFavMovies={setFavMovies} />
              </Route>
              <Route exact path='/movie/:id'>
                <MoviePage favMovies={favMovies} setFavMovies={setFavMovies} />
              </Route>
              <Route exact path='/favorites'>
                <OverviewPage favMovies={favMovies} setFavMovies={setFavMovies} />
              </Route>
              <Route>
                <OverviewPage favMovies={favMovies} setFavMovies={setFavMovies} />
              </Route>
            </Switch>
          </div>
          <footer className={styles.footer} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
