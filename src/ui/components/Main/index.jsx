import styles from './Main.module.scss';
const Main = () => {
  return (
    <div className='container'>
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
            Вместе с <span className={styles.title}>бесплатной консультацией </span>
            мы дарим:
          </div>
          <div className={styles.right__about}>
            <div className={styles.right__about__widget}>
              <span className={styles.title}>Виджеты</span>
              <div className={styles.right__about__description}>30 готовых решений</div>
            </div>
            <div className={styles.right__about__dashboard}>
              <span className={styles.title}>Dashboard</span>
              <div className={styles.right__about__description}>С показателями вашего бизнеса</div>
            </div>
            <div className={styles.right__about__skype}>
              <span className={styles.title}>Skype Аудит</span>
              <div className={styles.right__about__description}>отдела продаж и CRM системы</div>
            </div>

            <div className={styles.right__about__days}>
              <span className={styles.title}>35 дней</span>
              <div className={styles.right__about__description}>использования CRM</div>
            </div>
          </div>
          <div className={styles.about__mobile}>
            <ul className={styles.about__mobile__list}>
              <li>
                <span className={styles.about__mobile__list__item}>Skype аудит</span>
              </li>
              <li>
                <span className={styles.about__mobile__list__item}>dashboard</span>
              </li>
            </ul>
            <ul className={styles.about__mobile__list}>
              <li>
                <span className={styles.about__mobile__list__item}>30 виджетов</span>
              </li>
              <li>
                <span className={styles.about__mobile__list__item}>Месяц amocrm</span>
              </li>
            </ul>
          </div>
          <button className={styles.right__button}>Получить консультацию</button>
        </div>
      </div>
      <div className='purpleBall'></div>
      <div className='redlight'></div>
      <div className='purplelight'></div>
      <div className='redball'></div>
      <div className='redballSmall'></div>
      <div className='yellowlight'> </div>
    </div>
  );
};

export default Main;
