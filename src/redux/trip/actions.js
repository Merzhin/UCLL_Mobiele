export function addTrip(createdByUsername, description) {
    return {
      type: 'ADD_TRIP',
      payload: {
        id: uid(),
        isFinished: false,
        createdBy: createdByUsername,
        description: description
      }
    };
}

export function finishTrip(id) {
    return {
      type: 'TOGGLE_FINISH_TRIP',
      payload: id
    }
  }

// hack for generating passable unique ids
// TODO: fix this!
const uid = () => Math.random().toString(34).slice(2);

