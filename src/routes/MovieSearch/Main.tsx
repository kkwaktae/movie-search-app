import { UIEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { componentState, displayModal, searchResult, favoriteMovie } from 'store/search';

import Search from './components/search/Search';
import List from './components/list/List';
import Button from './components/button/Button';
import Favorite from './components/favorite/Favorite';

import cx from 'classnames';
import styles from './Main.module.scss';

const Main = () => {
  const [scrollState, setScrollState] = useState(0);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(0);
  const [addFavorite, setAddFavorite] = useState<Array<object>>([]);

  const [modalState, setModalState] = useRecoilState(displayModal);
  const isMain = useRecoilValue(componentState);
  const isResult = useRecoilValue(searchResult);
  const favoriteMovieState = useRecoilValue(favoriteMovie);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(addFavorite));
  }, [addFavorite]);

  const handleScroll = (e: UIEvent<HTMLDivElement>): void => {
    const scrollTarget = e.currentTarget;
    setScrollBoxHeight(scrollTarget.offsetHeight);
    setScrollState(scrollTarget.scrollTop);
  };

  const handleAddFavor = () => {
    setModalState((prev) => !prev);
    setAddFavorite((prev) => (prev ? [...prev, favoriteMovieState] : [...prev]));
  };

  const handleCancle = () => {
    setModalState((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <header className={isResult ? styles.header : ''}>
        <Search />
      </header>
      <main className={isResult ? styles.main : ''} onScroll={handleScroll}>
        {isMain ? <List scrollState={scrollState} scrollBoxHeight={scrollBoxHeight} /> : <Favorite />}
      </main>
      <footer>
        <Button />
      </footer>
      <div className={cx(styles.modalwrapper, { [styles.display]: modalState })}>
        <div className={styles.modal}>
          <button className={styles.favorBtn} type='button' onClick={handleAddFavor}>
            즐겨찾기
          </button>
          <button className={styles.cancleBtn} type='button' onClick={handleCancle}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
