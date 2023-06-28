import { useState } from 'react';

import iconCart from '../../assets/images/icon-cart.svg';

import styles from './styles.module.scss';

export function Cart() {
  const [revealCart, setRevealCart] = useState(false);

  return (
    <div
      className={styles.cart}
      onMouseOver={() => setRevealCart(true)}
      onMouseLeave={() => setRevealCart(false)}
    >
      <img src={iconCart} alt="Carrinho de Compras" />
      <div className={styles.count}>1</div>

      {revealCart && <h1>Carrinho</h1>}
    </div>
  );
}
