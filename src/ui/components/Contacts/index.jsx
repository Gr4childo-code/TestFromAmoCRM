const Contacts = ({ ...props }) => {
  return (
    <div {...props}>
      <span {...props}>+7 555 555-55-55</span>
      <ul {...props}>
        <li>
          <img src='../../../assets/telegram.svg' alt='' />
        </li>
        <li>
          <img src='../../../assets/viber.svg' alt='' />
        </li>
        <li>
          <img src='../../../assets/whatsapp.svg' alt='' />
        </li>
      </ul>
    </div>
  );
};

export default Contacts;