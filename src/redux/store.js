import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { contactsFiltersSlice } from './filtersSlice';

// export const rootReducer = combineReducers({
//   contacts: contactsSlice.reducer,
//   filter: contactsFiltersSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: contactsFiltersSlice.reducer,
  },
});
