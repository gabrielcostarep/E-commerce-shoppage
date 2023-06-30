import IconSub from '../../../assets/images/icon-minus.svg';
import IconPlus from '../../../assets/images/icon-plus.svg';
import IconCart from '../../../assets/images/icon-cart.svg';

import styles from './styles.module.scss';

export function AddToCard() {
  return (
    <div className={styles.container}>
      <div className={styles.cartCounter}>
        <button type="button" className={styles.minus}>
          <img src={IconSub} />
        </button>
        <span>1</span>
        <button type="button" className={styles.plus}>
          <img src={IconPlus} />
        </button>
      </div>

      <button type="button" className={styles.addToCart}>
        <img src={IconCart} />
        <span>Add to cart</span>
      </button>
    </div>
  );
}
