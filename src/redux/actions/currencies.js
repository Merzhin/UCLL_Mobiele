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
  return {
    type: 'UPDATE_CURRENCY',
    payload: 
    {
      base: base,
      rates: rates
    }
  }
}

export const convertCurrency = (base, target) =>
{
  return {
    type: 'CONVERT_CURRENCY',
    payload: 
    {
      base: base,
      target: target
    }
  }
} 


