import styles from './Navigation.module.scss';
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.navigation__links}>
        <li>Услуги</li>
        <li>Виджеты</li>
        <li>Интеграции</li>
        <li>Кейсы</li>
        <li>Сертификаты</li>
      </ul>
    </div>
  );
};

export default Navigation;
