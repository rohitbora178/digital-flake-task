import data from '../../data/credentials';

const initialState = {
    items: data,
    searchQuery: '',
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_ITEM":
            const updatedItems = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload };
                } else {
                    return item;
                }
            });
            return { ...state, items: updatedItems };

        case "DELETE_ITEM":
            const filteredItems = state.items.filter(
                (item) => item.id !== action.payload
            );
            return { ...state, items: filteredItems };

        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case "SET_SEARCH_QUERY":
            return {
                ...state,
                searchQuery: action.payload,
            };

        case 'ADD_PRODUCT':
            return {
                ...state,
                productsData: [...state.productsData, action.payload],
            };

        default:
            return state;
    }
};

export default categoryReducer;
