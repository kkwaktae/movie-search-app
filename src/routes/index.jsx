import styles from './Routes.module.scss';
import Main from './MovieSearch/Main';

const App = () => {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
};

export default App;
