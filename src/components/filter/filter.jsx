import { useDispatch, useSelector } from 'react-redux';
import { handlechangeFilter } from '../../redux/contacts/contactsSlice';
import { getStateFilter } from '../../redux/contacts/contactsSelector';


const Filter = () => {
  const value = useSelector(getStateFilter);
  const dispatch = useDispatch();
  return (
    <>      
      <input
        type="text"
        placeholder="Enter name"
        name="filter"
        value={value}
        onChange={e => dispatch(handlechangeFilter(e.target.value))}   
      />
    </>
  );
};

export default Filter;