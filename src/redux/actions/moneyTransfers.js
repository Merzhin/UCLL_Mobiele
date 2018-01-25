export const addTransfer = (name, amount, currency) => {
    return {
      type: 'ADD_TRANSFER',
      payload: {
        id: uid(),
        name,
        amount,
        currency
      }
    };
};

// hack for generating passable unique ids
// TODO: fix this!
const uid = () => Math.random().toString(34).slice(2);

