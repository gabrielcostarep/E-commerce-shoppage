import IconSub from '../../../assets/images/icon-minus.svg';
import IconPlus from '../../../assets/images/icon-plus.svg';
import IconCart from '../../../assets/images/icon-cart.svg';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { ProductContext } from '../../../App';

export function AddToCard() {
  const { count, setCount } = useContext(ProductContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartCounter}>
        <button
          type="button"
          className={styles.minus}
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
        >
          <img src={IconSub} />
        </button>
        <span>{count}</span>
        <button
          type="button"
          className={styles.plus}
          onClick={() => setCount(count + 1)}
        >
          <img src={IconPlus} />
        </button>
      </div>

      <button
        type="button"
        className={styles.addToCart}
        onClick={count === 0 ? () => setCount(count + 1) : undefined}
      >
        <img src={IconCart} />
        <span>Add to cart</span>
      </button>
    </div>
  );
}
