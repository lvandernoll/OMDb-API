import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './Searchbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ShortMovie } from 'interfaces';
import { useHistory } from 'react-router-dom';

interface Props {
  className?: string,
  setMovies: Dispatch<SetStateAction<ShortMovie[]>>,
}

const Searchbar: React.FC<Props> = ({ className, setMovies }) => {
  const [value, setValue] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [searchOpened, setSearchOpened] = useState<boolean>(false);
  const browserHistory = useHistory();

  const search = () => {
    if(value) {
      browserHistory.push('/');
      const newHistory: string[] = history;
      newHistory.unshift(value);
      if(newHistory.length > 10) {
        newHistory.pop();
      }
      setHistory(newHistory);
      const apiUrl: string = 'http://www.omdbapi.com';
      const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
      fetch(encodeURI(`${apiUrl}?apiKey=${apiKey}&s=${value}`))
      .then(response => response.json())
      .then(data => setMovies(data.Search))
      .catch(console.error);
    }
  }

  return (
    <form autoComplete='off' className={`${styles.wrapper} ${className || ''}`} onSubmit={e => {
      e.preventDefault();
      search();
      setSearchOpened(false);
    }}>
      <input name='search' id='search' autoComplete='false' className={styles.input}
        onClick={() => setSearchOpened(true)}
        onBlur={() => setSearchOpened(false)}
        onChange={e => setValue(e.currentTarget.value)}
        value={value} />
      <button className={styles.iconButton}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      </button>
      {searchOpened && history &&
        <ul className={styles.history}>
          {history.map((item, i) => 
            <li className={styles.historyItem} key={i}
              onMouseDown={() => {
                setValue(item);
                setSearchOpened(false);
              }
            }>
              <span>{item}</span>
              <FontAwesomeIcon icon={faTimes} className={styles.historyItemIcon}
                onMouseDown={e => {
                  e.stopPropagation();
                  const newHistory: string[] = history;
                  newHistory.splice(i, 1);
                  setHistory(newHistory);
                }}
              />
            </li>
          )}
        </ul>
      }
    </form>
  )
}

export default Searchbar;
