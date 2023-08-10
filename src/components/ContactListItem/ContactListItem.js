import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  ContactInfo,
  Name,
  Number,
  Spinner,
  UserIcon,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line } from 'react-icons/ri';

const ContactsListItem = ({ contact }) => {
  const [contactId, setContactId] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setContactId(contact.id);
    if (!error) {
      toast.success(`Contact ${contact.name} successfully deleted`, {
        position: 'top-right',
      });
    }
  };
};

ContactsListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactsListItem;
