
 const init = {
   expenses: [{ id: 0, amount:'',  description: 'drank dag 1', whopaid: 'jan', tripID: ''}]
 }

  const reducer = (state=init, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
    
        return {...state,
         expenses: [...state.expenses,action.payload]};
        
    case 'TOGGLE_FINISH_TRIP':
        return state.map(t => {
            if(t.get('id') === action.payload) {
                return t.update('isFinished', isFinished => !isFinished);
              } 
              return t;
        });
  
          
    default:
      return state;
  }
}

export default reducer
