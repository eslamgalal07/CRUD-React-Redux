import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // payload is Array So convert array of object to object  {id:object}
      const newObject = Object.assign({}, ...action.payload.map((obj) => ({ [obj.id]: obj })));
      // set obect in state
      return { ...state, ...newObject };

    case FETCH_STREAM:
      //payload = {"id" : {data}}
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      //payload = {"id" : {data} }
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      //payload = {"id" : {data} }
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      const newState = { ...state };
      // payload is id only
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};
