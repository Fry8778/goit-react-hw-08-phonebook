import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContacts } from '../../redux/contacts/contactsOperations';
import s from '../Form/Form';
import { contactsAfterFilter } from '../../redux/contacts/contactsSelector';

const FormPhonebook  = () => {
  const contacts = useSelector(contactsAfterFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={s.contact}>
      {contacts.map(el => (
          <li key={el.id} className={s.item}>
            <p className={s.conParagraph}>
              {el.name}: <span>{el.number}</span>
            </p>
            <button
              className={s.btn}
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
