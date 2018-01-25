
 const init = {
     id:'', description: 'drank dag2', amount: 5, item:[{ amount:1,  description: 'drank dag 1', user:'jan'}], betaling:[{naam:'jan', amount:1}]
  }
  const reset={}
 
   const reducer = (state=init, action) => {
   switch(action.type) {
     case 'ADD_ITEM':
     state.amount=state.amount+action.payload.amount;
         return {...state,
          item: [...state.item, action.payload]};
         
     case 'UPDATE_ITEM':
         return state.map(t => {
             if(t.get('id') === action.payload) {
                 return t.update('isFinished', isFinished => !isFinished);
               } 
               return t;
         });
         case 'ADD_BETALING':
         state.amount=state.amount-action.payload.amount;
         return {...state,
            betaling: [...state.betaling, action.payload]};

            case 'CLEAR_EXPENSE':
            state=reset;
            return { id:'', description: 'drank dag2', amount: 5, item:[{ amount:1,  description: 'drank dag 1', user:'jan'}], betaling:[{naam:'jan', amount:1}]};

     default:
       return state;
   }
 }
 
 export default reducer