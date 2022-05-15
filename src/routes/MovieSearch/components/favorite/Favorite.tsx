import { useEffect, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { displayModal, favoriteMovie, searchState } from 'store/search';
import { IHandleButtonTarget, ISearch } from 'types/movieSearch';

import styles from './favorite.module.scss';

const Favorite = (): JSX.Element => {
  const [data, setData] = useRecoilState(searchState);
  const setModalState = useSetRecoilState(displayModal);
  const setFavoriteMovieState = useSetRecoilState(favoriteMovie);

  const getFavorite = JSON.parse(localStorage.getItem('favorite') || '{}');
  const savedFavorites: ISearch[] = getFavorite;
  console.log(savedFavorites);

  const handleShowModal = (e: IHandleButtonTarget): void => {
    setModalState((prev) => !prev);
    const { id } = e.currentTarget.dataset;
    const favoriteMovieObj = data.dataList[Number(id)];

    setFavoriteMovieState(favoriteMovieObj);
  };

  const favoriteInfo = savedFavorites.map((movie, idx) => {
    const key = `movie-info-${idx + 1}`;

    return (
      <li key={key} className={styles.list}>
        <div className={styles.movieImg}>
          <img src={movie.Poster} alt='movie-img' />
        </div>
        <div className={styles.movieContents}>
          <div className={styles.movieTitle}>
            <p>Title</p> {movie.Title}
          </div>
          <div className={styles.movieYear}>
            <p>Year</p> {movie.Year}
          </div>
          <div className={styles.movieType}>
            <p>Genre</p> {movie.Type}
          </div>
        </div>
        <button className={styles.favor} type='button' data-id={idx} onClick={handleShowModal}>
          delete
        </button>
      </li>
    );
  });
  return (
    <div className={styles.mainContainer}>
      {savedFavorites.length > 0 ? (
        <ul className={styles.listBox}>{favoriteInfo}</ul>
      ) : (
        <h2 className={styles.nothing}>즐겨찾기 목록이 없습니다.</h2>
      )}
    </div>
  );
};

export default Favorite;
