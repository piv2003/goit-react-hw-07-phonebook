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

  return (
    <AppBox>
      <ToastContainer autoClose={3000} position="top-center" />
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmit} />

      <h2>Contacts</h2>

      {isLoading && !error && <b>Request in progress...</b>}

      {error && <p>Something went wrong..</p>}

      <ContactsList />
    </AppBox>
  );
}
