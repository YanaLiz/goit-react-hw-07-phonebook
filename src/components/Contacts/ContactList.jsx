import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { selectFilteredContacts } from 'redux/selector';
import { useSelector, useDispatch } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} >
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDelContact(id)}
            
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactsList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
