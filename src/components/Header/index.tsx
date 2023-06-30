import { useState } from 'react';

import { Menu } from '../Menu';
import { Cart } from '../Cart';
import { Profile } from '../Profile';

import logo from '../../assets/images/logo.svg';

import style from './styles.module.scss';

export function Header() {
  const [revealCart, setRevealCart] = useState(false);

  return (
    <header className={style.header} onMouseLeave={() => setRevealCart(false)}>
      <div className={style.leftContainer}>
        <img src={logo} alt="Logo Sneakers" />
        <Menu />
      </div>
      <div className={style.rightContainer}>
        <Cart revealCart={revealCart} setRevealCart={setRevealCart} />
        <Profile />
      </div>
    </header>
  );
}
