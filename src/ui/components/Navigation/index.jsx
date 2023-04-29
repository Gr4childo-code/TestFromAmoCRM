import styles from './Navigation.module.scss';
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.navigation__links}>
        <li>
          <span>Услуги</span>
        </li>
        <li>
          <span>Виджеты</span>
        </li>
        <li>
          <span>Интеграции</span>
        </li>
        <li>
          <span>Кейсы</span>
        </li>
        <li>
          <span>Сертификаты</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
