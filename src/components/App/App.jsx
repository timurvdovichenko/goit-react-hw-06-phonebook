import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import { H2Styled } from './App.styled';
import Filter from '../Filter';

const App = () => {
  return (
    <div>
      <H2Styled>PhoneBook</H2Styled>
      <ContactForm />
      <H2Styled>Contacts</H2Styled>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
