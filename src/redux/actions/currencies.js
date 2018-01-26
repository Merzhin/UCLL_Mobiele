export const selectCurrency = (currencyType) => {
    return {
      type: 'SELECT_CURRENCY',
      payload: 
      {
        base: currencyType
      }
    };
}

export const updateCurrency = (base, rates) => {
  console.log("you update currency");
  return {
    type: 'UPDATE_CURRENCY',
    payload: 
    {
      base: base,
      rates: rates
    }
  }
}


