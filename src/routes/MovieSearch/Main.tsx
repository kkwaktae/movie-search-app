import { useState } from 'react';
import styles from './Main.module.scss';
import Search from './components/search/Search';
import List from './components/list/List';
import Button from './components/button/Button';

const Main = () => {
  const [isResult, setIsResult] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Search setIsResult={setIsResult} />
      <List isResult={isResult} />
      <Button />
    </div>
  );
};

export default Main;
