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
