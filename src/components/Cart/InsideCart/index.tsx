import styles from './styles.module.scss';

export function InsideCart() {
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h1>Cart</h1>
      </div>
      <div className={styles.content}>
        <p>Your cart is empty</p>
      </div>
    </div>
  );
}
