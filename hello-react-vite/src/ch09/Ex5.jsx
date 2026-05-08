import styles from './Ex5.module.css';

const Ex5 = ({ type, children }) => {
  // styles[type]을 사용하면 "success", "warning" 문자열에 맞는 클래스를 가져옵니다.
  return <span className={`${styles.badge} ${styles[type]}`}>{children}</span>;
};

export default Ex5;
