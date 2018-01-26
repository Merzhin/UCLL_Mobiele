 const init = {
   users: [
     { firstName: 'Tom', lastName: 'Tintel' },
     { firstName: 'Pieter', lastName: 'Bogemans' }
    ]
 };

 const reducer = (state = init, action) => {
   switch (action.type) {
    case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload]
        };
    default:
    return state;
    }
  };
  
  export default reducer;
