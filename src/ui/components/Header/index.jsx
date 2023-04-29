import Contacts from '../Contacts';
import Navigation from '../Navigation';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrapper}>
          <div className={styles.header__left}>
            <img src='../../../assets/Logo.svg' alt='' />
            <p className={styles.header__left__text}>
              крупный интегратор CRM в Росcии и ещё 8 странах
            </p>
          </div>
          <div className={styles.header__center}>
            <Navigation />
          </div>
          <div className={styles.header__right}>
            <Contacts className={styles.contacts} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
