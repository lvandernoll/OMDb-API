import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoviePage from 'pages/Movie';
import SearchPage from 'pages/Search';
import FavoritesPage from 'pages/Favorites';
import Searchbar from 'components/Searchbar';
import styles from './App.module.scss';
import store from 'store';

const App: React.FC = () => {
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
                <h1>{'Homepage'}</h1>
              </Route>
              <Route exact path='/search'>
                <SearchPage />
              </Route>
              <Route exact path='/movie/:id'>
                <MoviePage />
              </Route>
              <Route exact path='/favorites'>
                <FavoritesPage />
              </Route>
              <Route>
                <SearchPage />
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
