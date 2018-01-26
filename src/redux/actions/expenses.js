export const addExpense = (amount,description,whopaid,tripID) => {
    return {
      type: 'ADD_EXPENSE',
      payload: {
        id: uid(),
        amount,
        description,
        whopaid,
        tripID
        
      }
    };
}

export const addExpenseObject = (expense,tripID,description,categorie) => {
  return {
    type: 'ADD_EXPENSEOBJECT',
   payload:{ expense,
    tripID,
  description,
categorie}
  };
}


// hack for generating passable unique ids
// TODO: fix this!
const uid = () => Math.random().toString(34).slice(2);

