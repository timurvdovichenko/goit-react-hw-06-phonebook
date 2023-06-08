import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from '../Common.styled';
import { Span } from './ContactForm.styled';

const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.currentTarget.name === 'number') {
      setNumber(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    const contact = { id: nanoid(), name: name, number: number };
    onSubmitForm(contact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <Span>Phone</Span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
