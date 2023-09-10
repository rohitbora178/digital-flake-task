const initialState = {
  showLogoutModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_LOGOUT_MODAL":
      return {
        ...state,
        showLogoutModal: true,
      };
    case "CLOSE_LOGOUT_MODAL":
      return {
        ...state,
        showLogoutModal: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
