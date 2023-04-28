import Contacts from '../Contacts';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__company}>
            <p className={styles.title}>О компании</p>
            <ul>
              <li className={styles.footer__company__item}>Партнерская программа</li>
              <li className={styles.footer__company__item}>Вакансии</li>
            </ul>
          </div>
          <div className={styles.footer__menu}>
            <p className={styles.title}>Меню</p>
            <ul className={styles.footer__menu__ul}>
              <li className={styles.footer__menu__items}>Расчет стоимости</li>
              <li className={styles.footer__menu__items}>Кейсы</li>
              <li className={styles.footer__menu__items}>Услуги</li>
              <li className={styles.footer__menu__items}>Благодарственные письма</li>
              <li className={styles.footer__menu__items}>Виджеты</li>
              <li className={styles.footer__menu__items}>Сертификаты</li>
              <li className={styles.footer__menu__items}>Интеграции</li>
              <li className={styles.footer__menu__items}>Блог на Youtube</li>
              <li className={styles.footer__menu__items}>Наши клиенты</li>
              <li className={styles.footer__menu__items}>Вопрос / Ответ</li>
            </ul>
          </div>
          <div className={styles.footer__contacts}>
            <p className={styles.title}>Контакты</p>
            <div className={styles.wrapper}>
              <Contacts className={styles.contacts} />
            </div>
            <p className={styles.footer__contacts__adress}>Москва, Путевой проезд 3с1, к 902</p>
            <div className={styles.footer__contacts__security}>
              <p>©WELBEX 2022. Все права защищены.</p>
              <p className={styles.politics}>Политика конфиденциальности</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
