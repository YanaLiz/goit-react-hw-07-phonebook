
import css from './Styles.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';

const ContactForm = () => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const storeContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

 

  const handleSubmit = event => {
    event.preventDefault();

     const alertContact = storeContacts.filter(
       contact => contact.name.toLowerCase() === name.toLowerCase()
     );
     alertContact.length
       ? alert(`${name} is already in contacts`)
       : dispatch(addContact({ name, phone }));
    reset();
    

  };

  const reset = () => {
    setName('');
    setPhone('');
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
          />
        </label>
        <label className={css.label} htmlFor="nameInputId">
          Phone
          <input
            className={css.input}
            id="nameInputId"
            type="tel"
            name="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }




export default ContactForm;


