import { useSetRecoilState } from 'recoil';
import { componentState, searchResult } from 'store/search';
import { IHandleListTarget } from 'types/movieSearch';

import styles from './button.module.scss';

const Button = () => {
  const setIsMain = useSetRecoilState(componentState);
  const setIsResult = useSetRecoilState(searchResult);
  const buttons: string[] = ['검색', '즐겨찾기'];

  const handleChangeComp = (e: IHandleListTarget): void => {
    const { id } = e.currentTarget.dataset;
    setIsResult(true);
    Number(id) === 0 ? setIsMain(true) : setIsMain(false);
  };

  const button = buttons.map((btn, idx) => {
    const key = `btn-key-${idx + 1}`;
    return (
      <li key={key} data-id={idx} role='presentation' onClick={handleChangeComp}>
        {btn}
      </li>
    );
  });

  return <ul className={styles.tab}>{button}</ul>;
};

export default Button;
