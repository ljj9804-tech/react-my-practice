import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Ex6.module.css';

// styles를 바인딩하여 cx 함수 생성
const cx = classNames.bind(styles);

const Ex6 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <button
      // cx를 사용하면 클래스 합치기가 매우 쉬워집니다.
      // isOn이 true일 때만 'active' 클래스가 적용됩니다.
      className={cx('button', { active: isOn })}
      onClick={toggle}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default Ex6;
