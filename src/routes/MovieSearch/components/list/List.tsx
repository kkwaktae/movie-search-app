import { useEffect, useRef, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { getMovieAPI } from 'services/movieSearch';
import { displayModal, searchState, favoriteMovie } from 'store/search';
import { IAPIParams, IHandleButtonTarget } from 'types/movieSearch';

import styles from './list.module.scss';

interface Props {
  scrollState: number;
  scrollBoxHeight: number;
}

const List = ({ scrollState, scrollBoxHeight }: Props): JSX.Element => {
  const [data, setData] = useRecoilState(searchState);
  const [page, setPage] = useState<number>(data.page);
  const [isLoading, setIsLoading] = useState(false);
  const setModalState = useSetRecoilState(displayModal);
  const setFavoriteMovieState = useSetRecoilState(favoriteMovie);

  const movieList = data.dataList;

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const APIParam: IAPIParams = {
      apikey: `${process.env.REACT_APP_API_KEY}`,
      s: data.s,
      page,
    };
    getMovieAPI(APIParam).then((res) => {
      if (res.data) setData({ ...data, page, dataList: [...movieList, ...res.data.Search] });
    });
  }, [page]);

  if (listRef.current !== null) {
    const ulTagHeight = listRef.current.offsetHeight;
    if (scrollState + scrollBoxHeight + 50 >= ulTagHeight && !isLoading) {
      setTimeout(() => {
        setIsLoading(true);
        setPage((prev) => prev + 1);
        setIsLoading(false);
      }, 500);
    }
  }

  const handleShowModal = (e: IHandleButtonTarget): void => {
    setModalState((prev) => !prev);
    const { id } = e.currentTarget.dataset;
    const favoriteMovieObj = data.dataList[Number(id)];
    setFavoriteMovieState(favoriteMovieObj);
  };

  const movieInfo = movieList.map((movie, idx) => {
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
          <button className={styles.favor} type='button' data-id={idx} onClick={handleShowModal}>
            favorite
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.mainContainer}>
      {movieList.length > 0 ? (
        <ul className={styles.listBox} ref={listRef}>
          {movieInfo}
          {movieInfo && <li className={styles.loader}>loading...</li>}
        </ul>
      ) : (
        <h2 className={styles.nothing}>검색 결과가 없습니다.</h2>
      )}
    </div>
  );
};

export default List;
