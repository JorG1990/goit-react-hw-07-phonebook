
import { Table } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts-thunk';
import { selectFilteredContacts } from '../../redux/selectors';


export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

   const deleteContact = id => {
    console.log(`El id Elimina fue el ${id}`);
    dispatch(deleteContactsThunk(id));
  };

  return (
    <Table>
      <tbody>
        {contacts.map(({ id, name, phone }) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{phone}</td>
              <td>
                <button onClick={() => deleteContact(id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
