import { List, Map } from 'immutable';

const init = List([]);

export default function(trips=init, action) {
  switch(action.type) {
    case 'ADD_TRIP':
        return trips.push(Map(action.payload));
    case 'TOGGLE_FINISH_TRIP':
        return trips.map(t => {
            if(t.get('id') === action.payload) {
                return t.update('isFinished', isFinished => !isFinished);
              } else {
                return t;
              }
        });
    default:
      return trips;
  }
}