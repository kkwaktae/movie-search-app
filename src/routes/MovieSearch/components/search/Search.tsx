import { ChangeEvent, FormEvent, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { getMovieAPI } from 'services/movieSearch';
import { searchResult, searchState } from 'store/search';
import { IAPIParams } from 'types/movieSearch';

import styles from './search.module.scss';

const Search = (): JSX.Element => {
  const [text, setText] = useState('');
  const setSearchList = useSetRecoilState(searchState);
  const [isResult, setIsResult] = useRecoilState(searchResult);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmitSearch = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const APIParam: IAPIParams = {
      apikey: `${process.env.REACT_APP_API_KEY}`,
      s: text,
      page: 1,
    };
    const getData = await getMovieAPI(APIParam);
    if (getData.data) {
      setSearchList(() => ({
        s: text,
        page: 1,
        dataList: getData.data ? getData.data.Search : [],
      }));
      setIsResult(true);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <h2>Movie Search App</h2>
      <form className={styles.searchBar} onSubmit={handleSubmitSearch}>
        <input className={styles.search} type='text' placeholder='search' onChange={handleSearch} />
        <button className={styles.clickBtn} type='submit'>
          검색
        </button>
      </form>
      {!isResult && <h2 className={styles.nothingWord}>검색 결과가 없습니다.</h2>}
    </div>
  );
};

export default Search;
