import { PriceProduct } from './PriceProduct';
import styles from './styles.module.scss';

export function DescriptionProduct() {
  return (
    <div className={styles.container}>
      <h3 className={styles.category}>Sneaker Company</h3>

      <h2 className={styles.title}>Fall Limited Edition Sneakers</h2>

      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <PriceProduct />
    </div>
  );
}
