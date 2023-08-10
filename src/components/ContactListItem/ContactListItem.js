import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line } from 'react-icons/ri';
import {
  Button,
  ContactInfo,
  Name,
  Number,
  Spinner,
  UserIcon,
} from './ContactListItem.styled';
import { deleteContact } from '../../Redux/operations';
import { selectError, selectIsLoading } from '../../Redux/selectors';

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
  return (
    <>
      <UserIcon />
      <ContactInfo>
        <Name>{contact.name}</Name>
        <Number>{contact.phone}</Number>
      </ContactInfo>

      {isLoading && contactId === contact.id ? (
        <Spinner size={40} />
      ) : (
        <Button type="button" onClick={handleDelete} disabled={isLoading}>
          <RiDeleteBin2Line size={25} />
        </Button>
      )}
    </>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactsListItem;
