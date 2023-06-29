import styles from './styles.module.scss';

interface MenuItemProps {
  text: string;
  href: string;
}

export function MenuItem({ text, href }: MenuItemProps) {
  return (
    <a href={href} className={styles.menuItem}>
      {text}
    </a>
  );
}
