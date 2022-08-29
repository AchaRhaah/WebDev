const initialState = [
  { id: 0, name: "Acha Reina", number: 8093524, email: "ar@g.com" },
  { id: 1, name: "Kah Samma", number: 8093524 , email: "ks@g.com"},
];
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "UPDATE_CONTACT":
        const updateState = state.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state = updateState;
        return state;
      case "DELETE_CONTACT":
        const filterContacts = state.filter(contact => contact.id !== action.payload && contact)
        state = filterContacts;
        return state;
      default:
        return state;
    }
};
export default contactReducer;
