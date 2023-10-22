import { useDispatch, useSelector } from "react-redux"
import { deleteContactsThunk } from "../../redux/contacts-thunk";
import { selectFilteredContacts } from "../../redux/selectors";
import { Table } from "./Contacts.styled";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const deleteContact = id => {
    console.log(`The deleted id was ${id}`);
    dispatch(deleteContactsThunk(id));
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
