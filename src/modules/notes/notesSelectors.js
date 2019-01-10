export const getItems = state => state.notes.items;

export const getFilter = state => state.notes.filter;

export const getFilteredNotes = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();

  return items.filter(item => item.text.toLowerCase().includes(filter));
};
