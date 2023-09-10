
export const editItem = (item) => {
  return {
    type: "EDIT_ITEM",
    payload: item,
  };
};

export const deleteItem = (itemId) => {
  return {
    type: "DELETE_ITEM",
    payload: itemId,
  };
};

export const addNewItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const setSearchQuery = (query) => {
  return {
    type: "SET_SEARCH_QUERY",
    payload: query,
  };
};