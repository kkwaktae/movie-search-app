import { useState } from 'react';

import { useSetRecoilState } from 'recoil';
import { displayModal, favoriteMovie } from 'store/search';

import styles from './favorite.module.scss';

const Favorite = (): JSX.Element => {
  const setModalState = useSetRecoilState(displayModal);
  const setFavoriteMovieState = useSetRecoilState(favoriteMovie);
  const [savedFavorites, isSavedFavorites] = useState<Array<object>>([]);

  const getFavorite = JSON.parse(localStorage.getItem('favorite') || '{}');
  // isSavedFavorites(JSON.parse(getFavorite));
  console.log(getFavorite);
  //   if (window.localStorage.length > 0 && savedFavorites.length === 0) {
  //     isSavedFavorites(prev => [...prev ,]);
  //   }
  //   const movieList = data.dataList;

  //   const handleShowModal = (e: IHandleClickTarget): void => {
  //     setModalState((prev) => !prev);
  //     const { id } = e.currentTarget.dataset;
  //     const favoriteMovieObj = {
  //       name: data.dataList[Number(id)].Title,
  //       dataId: Number(id),
  //       data: data.dataList[Number(id)],
  //     };

  //     setFavoriteMovieState(favoriteMovieObj);
  //   };

  //   const movieInfo = movieList.map((movie, idx) => {
  //     const key = `movie-info-${idx + 1}`;

  //     return (
  //       <li key={key} className={styles.list}>
  //         <div className={styles.movieImg}>
  //           <img src={movie.Poster} alt='movie-img' />
  //         </div>
  //         <div className={styles.movieContents}>
  //           <div className={styles.movieTitle}>
  //             <p>Title</p> {movie.Title}
  //           </div>
  //           <div className={styles.movieYear}>
  //             <p>Year</p> {movie.Year}
  //           </div>
  //           <div className={styles.movieType}>
  //             <p>Genre</p> {movie.Type}
  //           </div>
  //         </div>
  //         <button className={styles.favor} type='button' data-id={idx} onClick={handleShowModal}>
  //           click!
  //         </button>
  //       </li>
  //     );
  //   });

  return (
    <div className={styles.mainContainer}>
      {/* {movieList.length > 0 ? (
        <ul className={styles.listBox}>
          {movieInfo}
        </ul>
      ) : (
        <h2 className={styles.nothing}>즐겨찾기 목록이 없습니다.</h2>
      )} */}
    </div>
  );
};

export default Favorite;
