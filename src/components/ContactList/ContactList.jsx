import { ReactComponent as IconDelete } from '../../assets/delete.svg';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.box}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.itemList}>
            <span className={css.nameItem}>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              type="button"
              onClick={() => onDeleteContact(contact.id)}
              className={css.btnDelete}
            >
              <IconDelete className={css.iconDelete} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
