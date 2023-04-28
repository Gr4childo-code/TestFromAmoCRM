import styles from './Main.module.scss';
const Main = () => {
  return (
    <div className='container'>
      <div className='purpleBall'></div>
      <div className='redlight'></div>
      <div className='purplelight'></div>
      <div className='redball'></div>
      <div className='redballSmall'></div>
      <div className={styles.layout}>
        <div className={styles.layout__left}>
          <div className={styles.left__title}>
            Зарабатывайте <p>больше</p>
          </div>
          <span className={styles.left__subtitle}>с WELBEX</span>
          <div className={styles.left__text}>Развиваем и контролируем продажи за вас </div>
        </div>
        <div className={styles.layout__right}>
          <div className={styles.right__title}>
            Вместе с <span>бесплатной консультацией </span>
            мы дарим:
          </div>
          <div className={styles.right__about}>
            <div className={styles.right__about__widget}>
              <span>Виджеты</span>
              <div className={styles.right__about__description}>30 готовых решений</div>
            </div>
            <div className={styles.right__about__dashboard}>
              <span>Dashboard</span>
              <div className={styles.right__about__description}>С показателями вашего бизнеса</div>
            </div>
            <div className={styles.right__about__skype}>
              <span>Skype Аудит</span>
              <div className={styles.right__about__description}>отдела продаж и CRM системы</div>
            </div>

            <div className={styles.right__about__days}>
              <span>35 дней</span>
              <div className={styles.right__about__description}>использования CRM</div>
            </div>
          </div>
          <button className={styles.right__button}>Получить консультацию</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
