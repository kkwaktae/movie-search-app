import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.scss';

const Main = () => {
  const [isResult, setIsResult] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  console.log(searchValue);

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchValue(value);
    setIsResult((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
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

      <main>
        <div className={styles.container}>
          {isResult ? (
            <ul className={styles.listBox}>
              <li className={styles.list}>
                <div className={styles.movieImg}>포스터 이미지</div>
                <div className={styles.movieContents}>
                  <div className={styles.movieTitle}>제목</div>
                  <div className={styles.movieYear}>연도</div>
                  <div className={styles.movieType}>타입</div>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.movieImg}>포스터 이미지</div>
                <div className={styles.movieContents}>
                  <div className={styles.movieTitle}>제목</div>
                  <div className={styles.movieYear}>연도</div>
                  <div className={styles.movieType}>타입</div>
                </div>
              </li>
            </ul>
          ) : (
            <p className={styles.nothing}>검색 결과가 없습니다.</p>
          )}
        </div>
      </main>
      <footer>
        <ul className={styles.tab}>
          <Link to='/'>
            <li>검색</li>
          </Link>
          <Link to='/favorite'>
            <li>즐겨찾기</li>
          </Link>
        </ul>
      </footer>
    </div>
  );
};

export default Main;
