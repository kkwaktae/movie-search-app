import styles from './List.module.scss';

interface Props {
  isResult: boolean;
}

const List = ({ isResult }: Props) => {
  return (
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
  );
};

export default List;
