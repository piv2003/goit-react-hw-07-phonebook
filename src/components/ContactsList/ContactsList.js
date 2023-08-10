import { useSelector } from 'react-redux';
import ContactListItem from '../../components/ContactListItem/ContactListItem';
import { Item, List, Wrapper } from './ContactsList.styled';
import { selectContactByName, selectIsLoading } from '../../Redux/selectors';
import Filter from '../Filter/Filter';

const ContactsList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <List>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </List>
  );
};

export default ContactsList;
