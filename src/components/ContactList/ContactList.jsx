import PropTypes from 'prop-types';
import { Button } from '../Common.styled';
import { List, ListItem } from './ContactList.styled';
const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onClick(id)} buttonListStyle={'margin-left: 10px'}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onClick: PropTypes.func.isRequired,
};
