import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styles from './App.module.scss';
import HomePage from 'pages/Home';
import MoviePage from 'pages/Movie';
import Searchbar from 'components/Searchbar';
import { ShortMovie } from 'interfaces';

const App: React.FC = () => {
  const [movies, setMovies] = useState<ShortMovie[]>([]);

  return (
    <div className={styles.wrapper}>
      <Router>
        <header className={styles.header}>
          <Searchbar setMovies={setMovies} className={styles.search}/>
        </header>
        <div className={styles.content}>
            <Switch>
              <Route exact path='/'>
                <HomePage movies={movies} />
              </Route>
              <Route exact path='/movie/:id'>
                <MoviePage />
              </Route>
              <Route>
                <HomePage movies={movies} />
              </Route>
            </Switch>
        </div>
        <footer className={styles.footer} />
      </Router>
    </div>
  );
}

export default App;
