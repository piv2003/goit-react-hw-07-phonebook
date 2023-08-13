import { useSelector } from 'react-redux';
import ContactItem from '../ContactListItem/ContactListItem';
import { Item, List, Wrapper, Empty } from './ContactsList.styled';
import { selectContactByName, selectIsLoading } from '../../Redux/selectors';
import Filter from '../Filter/Filter';

const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContactByName);

  return (
    <Wrapper>
      <Filter />
      {contacts.length > 0 ? (
        <List>
          {contacts.map(contact => (
            <Item key={contact.id}>
              <ContactItem contact={contact} />
            </Item>
          ))}
        </List>
      ) : (
        <Empty>{isLoading ? 'Loading...' : 'Contacts list is empty'}</Empty>
      )}
    </Wrapper>
  );
};

export default ContactsList;
