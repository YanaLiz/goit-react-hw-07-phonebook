
import css from './Styles.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   const dispatch = useDispatch();

 

  const handleSubmit = event => {
    event.preventDefault();
    const obj = { id: nanoid(), name, number };
    dispatch(addContact(obj));
    reset();
    
    // onSubmit(obj);
    // if (contacts.find(contact => contact.name === name)) {
    //   return;
    // }
    // this.reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  
    return (
      <form onSubmit={handleSubmit} className={css.form} action="">
        <label className={css.label} htmlFor="nameInputId">
          Name{' '}
          <input
            className={css.input}
            id="nameInputId"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />{' '}
        </label>
        <label className={css.label} htmlFor="nameInputId">
          Phone
          <input
            className={css.input}
            id="nameInputId"
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />{' '}
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }


ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;


