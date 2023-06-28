import styles from './styles.module.scss';

interface MenuItemProps {
  key: string;
  text: string;
  href: string;
}

export function MenuItem({ key, text, href }: MenuItemProps) {
  return (
    <a href={href} key={key} className={styles.menuItem}>
      {text}
    </a>
  );
}
