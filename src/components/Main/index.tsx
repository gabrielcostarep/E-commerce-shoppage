import { SliderSwiper } from '../SliderSwiper';
import { DescriptionProduct } from '../DescriptionProduct';

import styles from './styles.module.scss';

export function Main() {
  return (
    <div className={styles.main}>
      <SliderSwiper />
      <DescriptionProduct />
    </div>
  );
}
