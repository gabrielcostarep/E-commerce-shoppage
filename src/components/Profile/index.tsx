import ImageAvatar from '../../assets/images/image-avatar.png';

import styles from './styles.module.scss';

export function Profile() {
  return (
    <img
      src={ImageAvatar}
      alt="Foto de perfil do usuário"
      className={styles.avatar}
    />
  );
}
