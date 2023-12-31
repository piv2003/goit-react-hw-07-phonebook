import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../Redux/selectors';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import { AppBox } from './App.styled';
import { addContact, fetchContacts } from '../Redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function notifiesAlert(numberContact, nameContact) {
    return toast.error(
      `${numberContact} is already in contacts under the name ${nameContact}.`,
      { position: 'top-right' }
    );
  }

  function checkСontact(newNumber) {
    return contacts.some(contact => contact.phone === newNumber);
  }

  function onSubmit(name, phone) {
    if (checkСontact(phone)) {
      return notifiesAlert(phone, name);
    }
    dispatch(addContact({ name, phone }));
    toast.success(`Contact ${name} added successfully`, {
      position: 'top-right',
    });
  }
  return (
    <AppBox>
      <ToastContainer autoClose={3000} position="top-center" />
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmit} />

      <h2>Contacts</h2>

      {isLoading && !error && <strong>Request in progress...</strong>}

      {error && <p>Something went wrong..</p>}

      <ContactsList />
    </AppBox>
  );
}
