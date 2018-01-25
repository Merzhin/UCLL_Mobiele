import { List, Map } from 'immutable';

 const init = {
    transfers: [{ id: 0, name: 'Tom', amount: 40, currency: 'EUR' }]
 };

  const transferReducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_TRANSFER':
        return {
          ...state,
          transfers: [...state.transfers, action.payload]
        };
    default:
      return state;
  }
};

export default transferReducer;
