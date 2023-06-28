import { MenuItem } from './MenuItem';

import styles from './styles.module.scss';

export function Menu() {
  const menuItems = [
    { text: 'Collections', href: '#' },
    { text: 'Men', href: '#' },
    { text: 'Women', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  return (
    <div className={styles.menu}>
      {menuItems.map(item => (
        <MenuItem key={item.text} text={item.text} href={item.href} />
      ))}
    </div>
  );
}
