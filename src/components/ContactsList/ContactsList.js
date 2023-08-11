import { useSelector } from 'react-redux';
import ContactItem from '../ContactListItem/ContactListItem';
import { Item, List, Wrapper } from './ContactsList.styled';
import { selectContactByName, selectIsLoading } from '../../Redux/selectors';
import Filter from '../Filter/Filter';

const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContactByName);

  return (
    <Wrapper>
      {contacts.length > 0 && (
        <>
          <Filter />
          <List>
            {contacts.map(contact => (
              <Item key={contact.id}>
                <ContactItem contact={contact} />
              </Item>
            ))}
          </List>
        </>
      )}

      {!isLoading && contacts.length === 0 && <p>Contacts list is empty</p>}
    </Wrapper>
  );
};

export default ContactsList;
