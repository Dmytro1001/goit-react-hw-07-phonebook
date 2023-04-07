// import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { List, Item, BtnDelete } from './Contact.module';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteContact } from 'redux/operationsContacts';
import { useContacts } from 'hooks/useContacts';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <div>
              <FaUserAlt />
              <span>{name}:</span>
              <span>{number}</span>
            </div>
            <BtnDelete
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <RiDeleteBin6Line size={18} />
            </BtnDelete>
          </Item>
        );
      })}
    </List>
  );
};

// ContactItem.propType = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       numder: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
