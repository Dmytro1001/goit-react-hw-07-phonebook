import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactItem } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { GlobalStyles } from './GlobalStyles';
import { Wrapper, LoaderWrapper } from './App.module';
import { fetchContacts } from 'redux/operationsContacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // console.log(fetchContacts());
  fetchContacts();

  return (
    <Wrapper>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <ContactList>
        <Filter />
        {isLoading && !error && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        <ContactItem />
      </ContactList>
      <GlobalStyles />
    </Wrapper>
  );
}

export { App };
