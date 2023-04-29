const Contacts = ({ ...props }) => {
  return (
    <div {...props}>
      <span {...props}>+7 555 555-55-55</span>
      <ul {...props}>
        <li>
          <img src='/telegram.svg' alt='' />
        </li>
        <li>
          <img src='/viber.svg' alt='' />
        </li>
        <li>
          <img src='/whatsapp.svg' alt='' />
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
