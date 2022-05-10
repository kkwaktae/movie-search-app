import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = () => {
  return (
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
  );
};

export default Button;
