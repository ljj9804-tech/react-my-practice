import React, { useState } from 'react';
import './Ex4.scss';

const Ex4 = () => {
  const menus = ['홈', '소개', '서비스', '연락처'];
  const [activeMenu, setActiveMenu] = useState('홈');

  return (
    <div>
      <nav className="Navbar">
        <div className="nav-brand">MyApp</div>
        <ul className="nav-menu">
          {menus.map((menu) => (
            <li key={menu} className="nav-item">
              <a
                className={menu === activeMenu ? 'active' : ''}
                onClick={() => setActiveMenu(menu)}
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Ex4;
