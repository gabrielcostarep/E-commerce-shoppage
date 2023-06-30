import { useContext } from 'react';
import { ProductContext } from '../../../App';

import styles from './styles.module.scss';
import { ProductCart } from '../ProductCart';

export function InsideCart() {
  const { count } = useContext(ProductContext);

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h1>Cart</h1>
      </div>
      {count === 0 ? (
        <div className={styles.content}>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <ProductCart />
      )}
    </div>
  );
}
