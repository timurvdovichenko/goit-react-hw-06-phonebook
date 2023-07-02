import { getFilterValue } from 'redux/filterSlice';
import { Button } from '../Common.styled';
import { List, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const contactsRedux = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  return (
    <List>
      {getFilteredContacts().map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              buttonListStyle={'margin-left: 10px'}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
