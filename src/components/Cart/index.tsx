import { useContext } from 'react';

import { InsideCart } from './InsideCart';

import iconCart from '../../assets/images/icon-cart.svg';

import { ProductContext } from '../../App';

import styles from './styles.module.scss';

interface CartProps {
  revealCart: boolean;
  setRevealCart: (revealCart: boolean) => void;
}

export function Cart({ revealCart, setRevealCart }: CartProps) {
  const { count } = useContext(ProductContext);

  return (
    <div className={styles.cart} onMouseOver={() => setRevealCart(true)}>
      <img src={iconCart} alt="Carrinho de Compras" />
      {count > 0 && <div className={styles.count}>{count}</div>}

      {revealCart && <InsideCart />}
    </div>
  );
}
