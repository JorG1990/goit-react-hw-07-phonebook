
import React, { useEffect, useState } from "react";
import { FormStyled } from "components/Filter/Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { getContactsList } from "../../redux/selectors";
import { addContactsThunk, getContactsThunk } from "../../redux/contacts-thunk";
import { Report } from "notiflix";

export const Form = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContactsList);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactExists = contactsList.find(contact => {
      return contact.name === name || contact.phone === phone;
    });

    if (contactExists) {
      Report.info(
        '',
        `Contact with name ${name} and number ${phone} already exists`,
        'Okay'
      );
      resetForm();
    } else if (!contactExists) {
      const contact = { id: nanoid(), name, phone };
      dispatch(addContactsThunk(contact));
    } else {
      Report.failure('', 'Error adding contact', 'Okay');
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          Name
          <input
          className="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          />
        </label>
        <label>
          Phone
          <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </FormStyled>
    </div>
  );
};
