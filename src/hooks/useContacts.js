import { useSelector } from 'react-redux';

import { selectUserContacts } from 'redux/selectors';

const useContacts = () => useSelector(selectUserContacts);

export { useContacts };
