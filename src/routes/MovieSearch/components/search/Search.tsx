import { ChangeEvent, Dispatch, useState } from 'react';
import styles from './Search.module.scss';

interface Props {
  setIsResult: Dispatch<React.SetStateAction<boolean>>;
}

const Search = ({ setIsResult }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchValue(value);
    setIsResult((prev) => !prev);
  };

  return (
    <nav>
      <div className={styles.navContainer}>
        <header>
          <h2>Movie Search App</h2>
        </header>
        <form className={styles.searchBar}>
          <input className={styles.search} type='text' placeholder='search' onChange={handleOnSearch} />
          <button className={styles.clickBtn} type='submit'>
            검색
          </button>
        </form>
        <h2 className={styles.categoryName}>Movie List</h2>
      </div>
    </nav>
  );
};

export default Search;
