

import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';
import css from './Styles.module.css'
import PropTypes from "prop-types";

const FilterContacts = () => {
  const dispatch = useDispatch();

  const filterChange = query => {
    
    dispatch(addFilter(query.toLowerCase()));
  };
  const filter = useSelector(getFilter);

  return (
    <label htmlFor="findInputId">
      <h2>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        name="filterContact"
        value={filter}
        id="findInputId"
        onChange={e => filterChange(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      ></input>
    </label>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  filterName: PropTypes.func.isRequired,
};

export default FilterContacts;
