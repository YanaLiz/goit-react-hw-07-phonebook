export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const selectFilteredContacts = state => {
  const fiterContacts = state.filter
    ? state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.filter)
      )
    : state.contacts;

  return fiterContacts;
};