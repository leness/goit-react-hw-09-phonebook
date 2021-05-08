import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import contactsOperations from '../redux/contacts/contacts-operations'
import contactsSelectors from '../redux/contacts/contacts-selectors'
import { useEffect } from 'react';


const styles = {
  app: {
    width: 500,
    margin: 'auto',
    textAlign: 'left',
  }
}

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading)
  
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  },[dispatch])

  return (
    <div style={styles.app}>
       
      <h1>Phonebook</h1>
      <ContactForm />
  
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoadingContacts && <h1>Загружаєм...</h1>}

    </div>
  )
}
