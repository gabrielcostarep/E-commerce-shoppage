import styles from './styles.module.scss';

export function PriceProduct() {
  const number = 250;
  const percent = 50;
  const numberDiscount = number - (number * percent) / 100;

  return (
    <div className={styles.container}>
      <div className={styles.priceContent}>
        <div className={styles.priceDiscount}>
          {new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'USD',
          }).format(numberDiscount)}
        </div>
        <div className={styles.percent}>
          {new Intl.NumberFormat('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          }).format(percent / 100)}
        </div>
      </div>

      <div className={styles.priceDelet}>
        {new Intl.NumberFormat('ja-JP', {
          style: 'currency',
          currency: 'USD',
        }).format(number)}
      </div>
    </div>
  );
}
