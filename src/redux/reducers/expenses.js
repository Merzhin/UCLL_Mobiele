
 const init = {
   expenses: [{ description: "ree", totalamount: 0, tripID: 0, personenBerekend: [], categorie: "transport"}]
 }

  const reducer = (state=init, action) => {
  switch(action.type) {
    case 'ADD_EXPENSEOBJECT':
        
      var mymap = new Map();

action.payload.expense.item.forEach(function(x) {
            if(mymap.has(x.user)){
                mymap.set(x.user,(mymap.get(x.user)+x.amount));
            }
            if(mymap.has(x.user)==false){
              mymap.set(x.user,x.amount);
            }

          })
          var mymap2=new Map();
          action.payload.expense.betaling.forEach(function(y) {
            if(mymap2.has(y.naam)){
                mymap2.set(y.naam,(mymap2.get(y.naam)+y.amount));
            }
            if(mymap2.has(y.naam)==false){
              mymap2.set(y.naam,y.amount);
            }

          })

          const fin=[];
          for (var [key, value] of mymap) {
            const lll={naam: key,owesamount: value, paidamount: 0, total:0};
            for (var [key2, value2] of mymap2) {
            if(lll.naam==key2){
              lll.paidamount=value2;
            }
            }
            lll.total=lll.paidamount-lll.owesamount;
            fin.push(lll);
          }

          
          const lala = {description: action.payload.description, totalamount: action.payload.expense.totalamount,tripID:action.payload.tripID, personenBerekend: fin, categorie: action.payload.categorie}
          
          

            return {...state,
             expenses: [...state.expenses,lala]};
          
    default:
      return state;
  }
}

export default reducer
