export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_INFO":
      state = { ...state, ...action.data };
      break;
    case "REMOVE_INFO":
      state = {};
      break;
    default:
      break;
  }
  return state;
};
