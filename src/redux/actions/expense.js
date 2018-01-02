export const addItem = (description,amount,users) => {
    return {
      type: 'ADD_ITEM',
      payload: {
        
        amount,
        description,
        users
        
      }
    };
}

export const updateItem = (users) => {
    return {
      type: 'UPDATE_ITEM',
      payload: {
        
        
        users
        
      }
    };
}



