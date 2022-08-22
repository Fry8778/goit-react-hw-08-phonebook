import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContacts } from '../../redux/contacts/contactsOperations';
import styles from '../form/form.module.css';
import { contactsAfterFilter } from '../../redux/contacts/contactsSelector';

const FormPhonebook  = () => {
  const contacts = useSelector(contactsAfterFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={styles.contact}>
      {contacts.map(el => (
          <li key={el.id} className={styles.item}>
            <p className={styles.conParagraph}>
              {el.name}: <span>{el.phone}</span>
            </p>
            <button
              className={styles.btn}
              type="button"
              onClick={() => dispatch(removeContacts(el.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default FormPhonebook;
