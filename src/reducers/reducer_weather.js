import { FETCH_WEATHER } from "../actions/actions";

export default function(state = [], action) {
  // When the app loads this would check for the state, which is undefined, so set it to null in the argument.
  switch (action.type) {
    case FETCH_WEATHER:
      //console.log(`reducer received data:${action.payload.data}`);
      return [action.payload.data, ...state];

    default:
      return state;
  }
}
