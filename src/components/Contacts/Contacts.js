import { useDispatch, useSelector } from "react-redux"
import { deleteContactThunk } from "../../redux/contacts-thunk";
import { selectFilteredContacts } from "../../redux/selectors";
import { Table } from "./Contacts.styled";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const deleteContact = id => {
    console.log(`El id eliminado fue el ${id}`);
    dispatch(deleteContactThunk(id));
  };

  return(
    <Table>
      <tbody>
        {contacts.map(({ id, name, phone }) => {
          return (
            <tr key={ id }>
              <td>{ name }</td>
              <td>{ phone }</td>
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
