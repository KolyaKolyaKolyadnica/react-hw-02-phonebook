import PropTypes from 'prop-types';

import style from './ContactList.module.css';

function ContactList({ contacts, filterValue, onDeleteContact }) {
  const normalizedFilter = filterValue.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {contacts.length === 0 ? (
        <p>No contacts yet</p>
      ) : (
        <ul className={style.list}>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id} className={style.listItem}>
                <p className={style.contact}>
                  {contact.name}: {contact.number}
                </p>

                <button value={contact.id} onClick={onDeleteContact}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterValue: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
