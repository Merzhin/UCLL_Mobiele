export const addUser = (firstName, lastName) => {
    return {
      type: 'ADD_USER',
      payload: {
        id: uid(),
        firstName,
        lastName
      }
    };
};

// hack for generating passable unique ids
// TODO: fix this!
const uid = () => Math.random().toString(34).slice(2);

