import { useContext } from 'react';
import { ProductContext } from '../../../App';

import ProductImage from '../../../assets/images/image-product-1-thumbnail.jpg';
import IconDelete from '../../../assets/images/icon-delete.svg';

import styles from './styles.module.scss';

export function ProductCart() {
  const { count, setCount } = useContext(ProductContext);
  const ProductPrice = 125;
  const TotalPrice = count * ProductPrice;

  return (
    <div className={styles.productCart}>
      <div className={styles.containerDescription}>
        <img
          src={ProductImage}
          alt="Imagem do produto"
          className={styles.productImage}
        />
        <div className={styles.description}>
          <p className={styles.title}>Fall Limited Edition Sneakers</p>
          <span className={styles.productPrice}>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(ProductPrice)}
          </span>
          <span className={styles.productPrice}>
            {count > 1 && ` x ${count}`}
          </span>
          {count > 1 && (
            <span className={styles.totalPrice}>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(TotalPrice)}
            </span>
          )}
        </div>
        <button
          type="button"
          className={styles.deleteProduct}
          onClick={() => setCount(0)}
        >
          <img src={IconDelete} alt="Deletar item do carrinho" />
        </button>
      </div>

      <div className={styles.containerCheckout}>Checkout</div>
    </div>
  );
}
