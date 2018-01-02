
 const init = {
     id:'', item:[{ amount:'',  description: 'drank dag 1', users:['a']}]
  }
 
   const reducer = (state=init, action) => {
   switch(action.type) {
     case 'ADD_ITEM':
     
         return {...state,
          item: [...state.item, action.payload]};
         
     case 'UPDATE_ITEM':
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