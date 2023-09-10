
export const deleteProduct = (productId) => ({
  type: 'DELETE_PRODUCT',
  payload: productId,
});


export const updateProduct = (updatedProduct) => ({
  type: 'UPDATE_PRODUCT',
  payload: updatedProduct,
});


export const addProduct = (newProduct) => ({
  type: 'ADD_PRODUCT',
  payload: newProduct,
});

export const searchProducts = (searchTerm) => ({
  type: 'SEARCH_PRODUCTS',
  payload: searchTerm,
});