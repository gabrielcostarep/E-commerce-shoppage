import { Menu } from '../Menu';
import { Cart } from '../Cart';
import { Profile } from '../Profile';

import style from './styles.module.scss';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.leftContainer}>
        <img src={logo} alt="Logo Sneakers" />
        <Menu />
      </div>
      <div className={style.rightContainer}>
        <Cart />
        <Profile />
      </div>
    </header>
  );
}
