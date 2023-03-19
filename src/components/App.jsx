
import { useEffect } from 'react'
import ContactsForm from './Contacts/ContactsForm';
import SectionTitle from './Contacts/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selector';
import ContactsList from './Contacts/ContactList';
import FilterContacts from './Contacts/FilterContacts';

const App = () => {
 const dispatch = useDispatch();
 const isLoading = useSelector(selectIsLoading);
 const error = useSelector(selectError);

 useEffect(() => {
   dispatch(fetchContact());
 }, [dispatch]);

   return (
     <div>
       <SectionTitle title="Phonebook">
         <ContactsForm/>
       </SectionTitle>
       
       {isLoading && !error && <b>Request in progress...</b>}
       <SectionTitle title="Contacts">
        <FilterContacts />
        <ContactsList />
       </SectionTitle>
      
     </div>
   );

    };

export default App;


