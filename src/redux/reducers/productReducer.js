
import productsData from "../../data/prodcutsData";

const initialState = {
  productsData: productsData
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT':
      return {
        ...state,
        productsData: state.productsData.filter((product) => product.id !== action.payload),
      };
    case 'UPDATE_PRODUCT':
      // Find the index of the product to be updated
      const indexToUpdate = state.productsData.findIndex((product) => product.id === action.payload.id);

      if (indexToUpdate === -1) {
        return state; // Product not found, return the current state
      }

      // Create a copy of the products array with the updated product
      const updatedProductsData = [...state.productsData];
      updatedProductsData[indexToUpdate] = action.payload;

      return {
        ...state,
        productsData: updatedProductsData,
      };


    case 'SEARCH_PRODUCTS':
      const searchTerm = action.payload.toLowerCase();
      const filteredProducts = state.productsData.filter((product) => {
        const productName = product.name.toLowerCase();
        return productName.includes(searchTerm);
      });
      return {
        ...state,
        filteredProducts, // Add a filteredProducts field to your state
      };

    default:
      return state;
  }
};

export default productsReducer;