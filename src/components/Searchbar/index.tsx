import React, { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { ShortMovie } from 'interfaces';
import { searchMovies } from 'api';
import styles from './Searchbar.module.scss';

interface Props {
  className?: string,
  setMovies: (shortMovies: ShortMovie[]) => void,
}

const Searchbar: React.FC<Props> = ({ className, setMovies }) => {
  const [value, setValue] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [searchOpened, setSearchOpened] = useState<boolean>(false);
  const browserHistory = useHistory();

  const search = async () => {
    if(value) {
      browserHistory.push('/');
      const newHistory: string[] = [...history];
      newHistory.unshift(value);
      if(newHistory.length > 10) {
        newHistory.pop();
      }
      setHistory(newHistory);
      const data = await searchMovies(value);
      setMovies(data.Search || []);
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search();
    setSearchOpened(false);
    const searchElement: HTMLInputElement | null = document.querySelector('#search');
    if(searchElement) {
      searchElement.blur();
    }
  }

  return (
    <form onSubmit={onSubmit} autoComplete='off' className={`${styles.wrapper} ${className || ''}`}>
      <input name='search' id='search' className={styles.input} placeholder={'Search...'}
        onFocus={() => setSearchOpened(true)}
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
