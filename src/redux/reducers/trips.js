import { List, Map } from 'immutable';

 const init = {
   
   trips: [{ id: 0,
             isFinished: true, 
             text: 'Bahamas', 
             participants: [ {id: 0, name: 'TestPersoon', paid: 0, owes: 100 }] }],
             expenses: []
 }

  const reducer = (state=init, action) => {
  switch(action.type) {
    case 'ADD_TRIP':
    
        return {
          ...state,
          trips: [...state.trips,action.payload]
        };
        
    case 'TOGGLE_FINISH_TRIP':
        return state.map(t => {
            if(t.get('id') === action.payload) {
                return t.update('isFinished', isFinished => !isFinished);
              } 
              return t;
        });
  case 'e':
         let newState = {}
            state.forEach( (trip) => {
              let id = trip.id
              newState[id] = Object.assign({}, trip, { id });
                  })
    
                  return newState;
          
    default:
      return state;
  }
}

export default reducer
