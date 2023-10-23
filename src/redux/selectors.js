
export const selectFilteredContacts = state => {
  const filter = getFilter(state);
  const contact = getContactsList(state);
  return contact.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
};

export const getContactsList = state => state.contacts.items;
export const getFilter = state => state.filter;
