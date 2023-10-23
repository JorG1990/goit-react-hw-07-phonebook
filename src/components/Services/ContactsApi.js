
import axios from "axios";

const contactsAPI = axios.create ({
  baseURL: 'https://6535a573c620ba9358ec9a96.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await contactsAPI.get('/contacts');
  console.log ('Ingresamos a la API')
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactsAPI.post('/contacts', contact);
  console.log ('Agg contacto nuevo')
  return data;
};

export const deleteContacts = async id => {
  console.log(id)
  const { data } = await contactsAPI.delete(`/contacts/${id}`);
  console.log ('Eliminamos contacto')
  return data;
};
