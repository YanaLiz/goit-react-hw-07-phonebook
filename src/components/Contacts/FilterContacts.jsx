

import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selector';
import css from './Styles.module.css'
// import PropTypes from "prop-types";

const FilterContacts = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    
    dispatch(addFilter(query.toLowerCase()));
  };
  const filter = useSelector(selectFilter);

  return (
    <label htmlFor="findInputId">
      <h2>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        placeholder=""
        name="filterContact"
        value={filter}
        id="findInputId"
        onChange={e => onFilterChange(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      ></input>
    </label>
  );
};

// FilterContacts.propTypes = {
//   value: PropTypes.string.isRequired,
//   filterName: PropTypes.func.isRequired,
// };

export default FilterContacts;
