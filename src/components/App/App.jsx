import { Component } from 'react';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import { H2Styled } from './App.styled';
import Filter from '../Filter';

const CL_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      const contactsLocalStorage = JSON.stringify(this.state.contacts);

      localStorage.setItem(CL_KEY, contactsLocalStorage);
    }
  }

  componentDidMount() {
    const savedState = localStorage.getItem(CL_KEY);
    if (savedState) {
      this.setState({ contacts: JSON.parse(localStorage.getItem(CL_KEY)) });
    }
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };
  filterHandlerData = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  onDeleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== id;
      }),
    }));
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  getNormalizedContacts = () => {
    return this.state.contacts.map(contact => {
      return { id: contact.id, name: contact.name.toLowerCase(), number: contact.number };
    });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <H2Styled>PhoneBook</H2Styled>
        <ContactForm onSubmitForm={this.formSubmitHandler} />
        <H2Styled>Contacts</H2Styled>
        <Filter value={this.state.filter} onChange={this.filterHandlerData} />
        <ContactList contacts={filteredContacts} onClick={this.onDeleteContactHandler} />
      </div>
    );
  }
}

export default App;
