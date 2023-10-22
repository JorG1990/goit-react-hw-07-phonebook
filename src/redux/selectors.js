
export const selectFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContactsList(state);
  return contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
};

export const getContactsList = state => state.contacts.item;
export const getFilter = state => state.filter;
